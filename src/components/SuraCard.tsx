import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../styles/SuraCard.scss';

const uzbekNames: { [key: number]: string } = {
    1: "Fotiha surasi", 2: "Baqara surasi", 3: "Oli Imron surasi", 4: "Niso surasi", 5: "Moida surasi", 6: "An'om surasi", 7: "A'rof surasi", 8: "Anfol surasi", 9: "Tavba surasi", 10: "Yunus surasi",
    11: "Hud surasi", 12: "Yusuf surasi", 13: "Ra'd surasi", 14: "Ibrohim surasi", 15: "Hijr surasi", 16: "Nahl surasi", 17: "Isro surasi", 18: "Kahf surasi", 19: "Maryam surasi", 20: "Toha surasi",
    21: "Anbiyo surasi", 22: "Hajj surasi", 23: "Mo‘minun surasi", 24: "Nur surasi", 25: "Furqon surasi", 26: "Shuaro surasi", 27: "Namli surasi", 28: "Qasas surasi", 29: "Ankabut surasi", 30: "Rum surasi",
    31: "Luqmon surasi", 32: "Sajda surasi", 33: "Ahzob surasi", 34: "Saba surasi", 35: "Fatir surasi", 36: "Yosin surasi", 37: "Soffat surasi", 38: "Sod surasi", 39: "Zumar surasi", 40: "G‘ofir surasi",
    41: "Fussilat surasi", 42: "Shuro surasi", 43: "Zuxruf surasi", 44: "Duxon surasi", 45: "Josiya surasi", 46: "Ahqof surasi", 47: "Muhammad surasi", 48: "Fath surasi", 49: "Hujurot surasi", 50: "Qof surasi",
    51: "Zoriyot surasi", 52: "Tur surasi", 53: "Najm surasi", 54: "Qamar surasi", 55: "Rahmon surasi", 56: "Voqia surasi", 57: "Hadid surasi", 58: "Mujodala surasi", 59: "Hashr surasi", 60: "Mumtahana surasi",
    61: "Soff surasi", 62: "Jum'a surasi", 63: "Munofiqun surasi", 64: "Tag‘obun surasi", 65: "Taloq surasi", 66: "Tahrim surasi", 67: "Mulk surasi", 68: "Qalam surasi", 69: "Haqqa surasi", 70: "Maorij surasi",
    71: "Nuh surasi", 72: "Jinn surasi", 73: "Muzzammil surasi", 74: "Muddassir surasi", 75: "Qiyomat surasi", 76: "Insan surasi", 77: "Mursalat surasi", 78: "Naba surasi", 79: "Nozi'at surasi", 80: "Abasa surasi",
    81: "Takvir surasi", 82: "Infitor surasi", 83: "Mutoffifun surasi", 84: "Inshiqoq surasi", 85: "Buruj surasi", 86: "Toriq surasi", 87: "A'lo surasi", 88: "G‘oshiyya surasi", 89: "Fajr surasi", 90: "Balad surasi",
    91: "Shams surasi", 92: "Layl surasi", 93: "Zuho surasi", 94: "Sharh surasi", 95: "Tin surasi", 96: "Alaq surasi", 97: "Qadr surasi", 98: "Bayyina surasi", 99: "Zalzala surasi", 100: "Odiyat surasi",
    101: "Qori'a surasi", 102: "Takosur surasi", 103: "Asr surasi", 104: "Humaza surasi", 105: "Fil surasi", 106: "Quraysh surasi", 107: "Ma’un surasi", 108: "Kavsar surasi", 109: "Kofirun surasi", 110: "Nasr surasi",
    111: "Masad surasi", 112: "Ixlos surasi", 113: "Falaq surasi", 114: "Nos surasi"
};

interface Ayah { text: string; numberInSurah: number; }
interface IProps {
    title: string;
    audioURL: string;
    originalText: Ayah[];
    translationText: Ayah[];
    translitText: Ayah[];
}

const SuraCard = ({ title, audioURL, originalText, translationText, translitText }: IProps) => {
    const [fontArabic, setFontArabic] = useState(2.2);
    const [fontTranslit, setFontTranslit] = useState(1.1);
    const [fontTranslation, setFontTranslation] = useState(1.1);

    const suraNum = parseInt(audioURL.split('/').pop()?.replace('.mp3', '') || '1');
    const uzSuraName = uzbekNames[suraNum] || title;

    return (
        <div className="sura-card">
            <div className="sura-header-sticky">
                <h2 className="sura-title">{uzSuraName}</h2>
                <div className="card-font-settings">
                    <div className="setting-item">
                        <small>Arabcha</small>
                        <div className="btns">
                            <button onClick={() => setFontArabic(prev => Math.max(1.5, prev - 0.2))}>−</button>
                            <span className="val">{fontArabic.toFixed(1)}</span>
                            <button onClick={() => setFontArabic(prev => Math.min(4.0, prev + 0.2))}>+</button>
                        </div>
                    </div>
                    <div className="setting-item">
                        <small>O'qilishi</small>
                        <div className="btns">
                            <button onClick={() => setFontTranslit(prev => Math.max(0.8, prev - 0.1))}>−</button>
                            <span className="val">{fontTranslit.toFixed(1)}</span>
                            <button onClick={() => setFontTranslit(prev => Math.min(2.5, prev + 0.1))}>+</button>
                        </div>
                    </div>
                    <div className="setting-item">
                        <small>Ma'nosi</small>
                        <div className="btns">
                            <button onClick={() => setFontTranslation(prev => Math.max(0.8, prev - 0.1))}>−</button>
                            <span className="val">{fontTranslation.toFixed(1)}</span>
                            <button onClick={() => setFontTranslation(prev => Math.min(2.5, prev + 0.1))}>+</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ayahs-container">
                {originalText.map((ayah, index) => (
                    <div key={`ayah-block-${index}`} className="ayah-block">
                        <div className="arabic-line">
                            <span className="ayah-number">{ayah.numberInSurah}</span>
                            <p className="quran-text" style={{ fontSize: `${fontArabic}rem` }}>{ayah.text}</p>
                        </div>
                        <div className="details-grid">
                            <div className="detail-item translit">
                                <p style={{ fontSize: `${fontTranslit}rem` }}>{translitText[index]?.text || "..."}</p>
                            </div>
                            <div className="detail-item translation">
                                <p style={{ fontSize: `${fontTranslation}rem` }}>{translationText[index]?.text || "..."}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="audio-player-fixed">
                <div className="player-wrapper">
                    <div className="sura-info">
                        <span className="playing-label">TINGLANMOQDA:</span>
                        <span className="sura-name">{suraNum}. {uzSuraName}</span>
                    </div>
                    <div className="custom-h5-player">
                        <AudioPlayer
                            src={audioURL}
                            autoPlayAfterSrcChange={false}
                            showJumpControls={false}
                            customAdditionalControls={[]}
                            layout="horizontal"
                            key={audioURL}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(SuraCard);