import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../styles/SuraCard.scss';

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

    return (
        <div className="sura-card">
            <div className="sura-header-sticky">
                <h2 className="sura-title">{title}</h2>
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
                        <span className="playing-label">Tinglanmoqda:</span>
                        <span className="sura-name">{title}</span>
                    </div>
                    <div className="custom-h5-player">
                        <AudioPlayer
                            src={audioURL}
                            autoPlayAfterSrcChange={false}
                            showJumpControls={false}
                            customAdditionalControls={[]}
                            layout="horizontal"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(SuraCard);