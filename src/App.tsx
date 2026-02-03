import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import './App.scss';
import SuraCard from "./components/SuraCard";
import { SettingsProvider } from "./contexts/SettingsContext";
import ErrorBoundary from "./components/ErrorBoundary"; // ErrorBoundary import qilindi

interface Ayah { text: string; numberInSurah: number; }
interface Sura { number: number; englishName: string; name: string; }
interface SuraData {
    title: string;
    arabicAyahs: Ayah[];
    uzbekAyahs: Ayah[];
    translitAyahs: Ayah[];
    audioUrl: string;
}

const uzbekNames: { [key: number]: string } = {
    1: "Fotiha", 2: "Baqara", 3: "Oli Imron", 4: "Niso", 5: "Moida", 6: "An'om", 7: "A'rof", 8: "Anfol", 9: "Tavba", 10: "Yunus",
    11: "Hud", 12: "Yusuf", 13: "Ra'd", 14: "Ibrohim", 15: "Hijr", 16: "Nahl", 17: "Isro", 18: "Kahf", 19: "Maryam", 20: "Toha",
    21: "Anbiyo", 22: "Hajj", 23: "Mo‘minun", 24: "Nur", 25: "Furqon", 26: "Shuaro", 27: "Namli", 28: "Qasas", 29: "Ankabut", 30: "Rum",
    31: "Luqmon", 32: "Sajda", 33: "Ahzob", 34: "Saba", 35: "Fatir", 36: "Yosin", 37: "Soffat", 38: "Sod", 39: "Zumar", 40: "G‘ofir",
    41: "Fussilat", 42: "Shuro", 43: "Zuxruf", 44: "Duxon", 45: "Josiya", 46: "Ahqof", 47: "Muhammad", 48: "Fath", 49: "Hujurot", 50: "Qof",
    51: "Zoriyot", 52: "Tur", 53: "Najm", 54: "Qamar", 55: "Rahmon", 56: "Voqia", 57: "Hadid", 58: "Mujodala", 59: "Hashr", 60: "Mumtahana",
    61: "Soff", 62: "Jum'a", 63: "Munofiqun", 64: "Tag‘obun", 65: "Taloq", 66: "Tahrim", 67: "Mulk", 68: "Qalam", 69: "Haqqa", 70: "Maorij",
    71: "Nuh", 72: "Jinn", 73: "Muzzammil", 74: "Muddassir", 75: "Qiyomat", 76: "Inson", 77: "Mursalat", 78: "Naba", 79: "Nozi'at", 80: "Abasa",
    81: "Takvir", 82: "Infitor", 83: "Mutoffifun", 84: "Inshiqoq", 85: "Buruj", 86: "Toriq", 87: "A'lo", 88: "G‘oshiyya", 89: "Fajr", 90: "Balad",
    91: "Shams", 92: "Layl", 93: "Zuho", 94: "Sharh", 95: "Tin", 96: "Alaq", 97: "Qadr", 98: "Bayyina", 99: "Zalzala", 100: "Odiyat",
    101: "Qori'a", 102: "Takosur", 103: "Asr", 104: "Humaza", 105: "Fil", 106: "Quraysh", 107: "Ma’un", 108: "Kavsar", 109: "Kofirun", 110: "Nasr",
    111: "Masad", 112: "Ixlos", 113: "Falaq", 114: "Nos"
};

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
        return suras.filter(sura => {
            const uzName = uzbekNames[sura.number]?.toLowerCase() || "";
            const enName = sura.englishName.toLowerCase();
            const search = searchTerm.toLowerCase();
            return uzName.includes(search) || enName.includes(search) || sura.number.toString().includes(search);
        });
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
                    title: uzbekNames[selectedSuraId],
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
        <ErrorBoundary>
            <SettingsProvider>
                <div className="app-wrapper">
                    <aside className="sidebar">
                        <div className="sidebar-logo"><h2>QUR'ON</h2></div>
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Surani qidirish..."
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
                                        <span className="sura-name">{uzbekNames[sura.number]} surasi</span>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    <div className="app-container">
                        <header className="main-header">
                            <h1>Qur'oni Karim</h1>
                            <p>O'zbekcha ma'nolari bilan</p>
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
                                <div className="error-msg">Ma'lumot topilmadi.</div>
                            )}
                        </main>

                        <footer className="main-footer">
                            <p className="copyright">© 2026 - Qur'on Kundaligi</p>
                        </footer>
                    </div>
                </div>
            </SettingsProvider>
        </ErrorBoundary>
    );
}

export default App;