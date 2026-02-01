import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import './App.scss';
import SuraCard from "./components/SuraCard";

interface Ayah {
    text: string;
    numberInSurah: number;
}

interface Sura {
    number: number;
    englishName: string;
    name: string;
}

interface SuraData {
    title: string;
    arabicAyahs: Ayah[];
    uzbekAyahs: Ayah[];
    translitAyahs: Ayah[];
    audioUrl: string;
}

function App() {
    const [suras, setSuras] = useState<Sura[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedSuraId, setSelectedSuraId] = useState<number>(1);
    const [suraData, setSuraData] = useState<SuraData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const cachedSuras = localStorage.getItem('suras_list');
        if (cachedSuras) {
            setSuras(JSON.parse(cachedSuras));
        } else {
            axios.get('https://api.alquran.cloud/v1/surah')
                .then((res: any) => {
                    setSuras(res.data.data);
                    localStorage.setItem('suras_list', JSON.stringify(res.data.data));
                })
                .catch((err: any) => console.error(err));
        }
    }, []);

    const filteredSuras = useMemo(() => {
        return suras.filter(sura =>
            sura.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sura.number.toString().includes(searchTerm)
        );
    }, [suras, searchTerm]);

    useEffect(() => {
        const cacheKey = `sura_full_${selectedSuraId}`;
        const cachedSura = localStorage.getItem(cacheKey);

        if (cachedSura) {
            setSuraData(JSON.parse(cachedSura));
            return;
        }

        setLoading(true);
        axios.get(`https://api.alquran.cloud/v1/surah/${selectedSuraId}/editions/quran-uthmani,uz.sodik,en.transliteration`)
            .then((res: any) => {
                const [arabic, translation, translit] = res.data.data;
                const suraNumber = String(selectedSuraId).padStart(3, '0');

                const finalData: SuraData = {
                    title: arabic.englishName,
                    arabicAyahs: arabic.ayahs,
                    uzbekAyahs: translation.ayahs,
                    translitAyahs: translit.ayahs,
                    audioUrl: `https://server8.mp3quran.net/afs/${suraNumber}.mp3`
                };

                localStorage.setItem(cacheKey, JSON.stringify(finalData));
                setSuraData(finalData);
                setLoading(false);
            })
            .catch((err: any) => {
                console.error(err);
                setLoading(false);
            });
    }, [selectedSuraId]);

    return (
        <div className="app-wrapper">
            <aside className="sidebar">
                <div className="sidebar-logo">
                    <h2>Qur'on</h2>
                </div>

                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Surani qidiring..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <nav>
                    <ul>
                        {filteredSuras.map((sura) => (
                            <li
                                key={sura.number}
                                className={selectedSuraId === sura.number ? 'active' : ''}
                                onClick={() => setSelectedSuraId(sura.number)}
                            >
                                <span className="sura-number">{sura.number}</span>
                                <span className="sura-name">{sura.englishName}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <div className="app-container">
                <header className="main-header">
                    <h1>Qur'oni Karim</h1>
                    <p>Jami 114 ta sura</p>
                </header>

                <main className="suras-display">
                    {loading ? (
                        <div className="loader">Yuklanmoqda...</div>
                    ) : suraData ? (
                        <SuraCard
                            title={`${selectedSuraId}. ${suraData.title} surasi`}
                            audioURL={suraData.audioUrl}
                            originalText={suraData.arabicAyahs}
                            translationText={suraData.uzbekAyahs}
                            translitText={suraData.translitAyahs}
                        />
                    ) : (
                        <div className="error-msg">Sura topilmadi.</div>
                    )}
                </main>

                <footer className="main-footer">
                    <p className="copyright">© 2026 - Qur'on Kundaligi</p>
                </footer>
            </div>
        </div>
    );
}

export default App;