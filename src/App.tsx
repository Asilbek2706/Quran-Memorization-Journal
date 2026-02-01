import { useState } from 'react';
import './App.scss';
import AnNas from "./components/Suras/AnNas.tsx";
import AlFalaq from "./components/Suras/AlFalaq.tsx";
import Ixlos from "./components/Suras/Ixlos.tsx";
import AlMasad from "./components/Suras/AlMasad.tsx";
import AnNasr from "./components/Suras/AnNasr.tsx";

const SURAS_LIST = [
    { id: 110, name: "An-Nasr", component: <AnNasr /> },
    { id: 111, name: "Masad", component: <AlMasad /> },
    { id: 112, name: "Ixlos", component: <Ixlos /> },
    { id: 113, name: "Al-Falaq", component: <AlFalaq /> },
    { id: 114, name: "An-Nas", component: <AnNas /> },
];

function App() {
    const [selectedSuraId, setSelectedSuraId] = useState(110);

    const currentSura = SURAS_LIST.find(sura => sura.id === selectedSuraId);

    return (
        <div className="app-wrapper">

            <aside className="sidebar">
                <div className="sidebar-logo">
                    <h2>30-Pora</h2>
                </div>
                <nav>
                    <ul>
                        {SURAS_LIST.map((sura) => (
                            <li
                                key={sura.id}
                                className={selectedSuraId === sura.id ? 'active' : ''}
                                onClick={() => setSelectedSuraId(sura.id)}
                            >
                                <span className="sura-number">{sura.id}</span>
                                <span className="sura-name">{sura.name}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <div className="app-container">
                <header className="main-header">
                    <h1>Mening Qur'on kundaligim</h1>
                    <p>Yodlash jarayoni: {SURAS_LIST.length} / 37</p>
                </header>

                <main className="suras-display">
                    {currentSura ? currentSura.component : <p>Sura tanlanmagan</p>}
                </main>

                <footer className="main-footer">
                    <p className="copyright">© 2026 - Qur'on Kundaligi</p>
                </footer>
            </div>
        </div>
    );
}

export default App;