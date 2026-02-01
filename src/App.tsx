import { useState, useEffect } from 'react';
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
    const [selectedSuraId, setSelectedSuraId] = useState<number>(1);
    const [suraData, setSuraData] = useState<SuraData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        axios.get('https://api.alquran.cloud/v1/surah')
            .then((res: any) => {
                setSuras(res.data.data);
            })
            .catch((err: any) => console.error("Ro'yxatda xato:", err));
    }, []);

    useEffect(() => {
        setLoading(true);

        axios.get(`https://api.alquran.cloud/v1/surah/${selectedSuraId}/editions/quran-uthmani,uz.sodik,en.transliteration`)
            .then((res: any) => {
                const [arabic, translation, translit] = res.data.data;

                const suraNumber = String(selectedSuraId).padStart(3, '0');

                setSuraData({
                    title: arabic.englishName,
                    arabicAyahs: arabic.ayahs,
                    uzbekAyahs: translation.ayahs,
                    translitAyahs: translit.ayahs,
                    audioUrl: `https://server8.mp3quran.net/afs/${suraNumber}.mp3`
                });
                setLoading(false);
            })
            .catch((err: any) => {
                console.error("Ma'lumot yuklashda xato:", err);
                setLoading(false);
            });
    }, [selectedSuraId]);

    return (
        <div className="app-wrapper">
            <aside className="sidebar">
                <div className="sidebar-logo">
                    <h2>Qur'on</h2>
                </div>
                <nav>
                    <ul>
                        {suras.map((sura) => (
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
                    <p>Hammasi bo'lib 114 ta sura</p>
                </header>

                <main className="suras-display">
                    {loading ? (
                        <div className="loader">Sura ma'lumotlari yuklanmoqda...</div>
                    ) : suraData ? (
                        <SuraCard
                            title={`${selectedSuraId}. ${suraData.title}`}
                            audioURL={suraData.audioUrl}
                            originalText={suraData.arabicAyahs}
                            translationText={suraData.uzbekAyahs}
                            translitText={suraData.translitAyahs}
                        />
                    ) : (
                        <div className="error-msg">Ma'lumot topilmadi.</div>
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