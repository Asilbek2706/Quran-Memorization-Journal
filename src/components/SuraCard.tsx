import React from 'react';
import '../styles/SuraCard.scss';

interface Ayah {
    text: string;
    numberInSurah: number;
}

interface IProps {
    title: string;
    audioURL: string;
    originalText: Ayah[];
    translationText: Ayah[];
    translitText: Ayah[];
}

const SuraCard = ({ title, audioURL, originalText, translationText, translitText }: IProps) => {

    const handleAudioError = () => {
        console.error("Audio faylni yuklashda xatolik yuz berdi. Manba:", audioURL);
    };

    return (
        <div className="sura-card">
            <h2 className="sura-title">{title}</h2>

            <div className="audio-container">
                <audio
                    controls
                    key={audioURL}
                    preload="metadata"
                    onError={handleAudioError}
                >
                    <source src={audioURL} type="audio/mpeg" />
                    Brauzeringiz audioni qo'llab-quvvatlamaydi.
                </audio>
            </div>

            <div className="ayahs-container">
                {originalText.map((ayah, index) => (
                    <div key={`ayah-block-${index}`} className="ayah-block">

                        <div className="arabic-line">
                            <span className="ayah-number">{ayah.numberInSurah}</span>
                            <p className="quran-text">{ayah.text}</p>
                        </div>

                        <div className="details-grid">
                            <div className="detail-item translit">
                                <small>O'qilishi</small>
                                <p>{translitText[index]?.text || "Yuklanmoqda..."}</p>
                            </div>

                            <div className="detail-item translation">
                                <small>Ma'nosi</small>
                                <p>{translationText[index]?.text || "Yuklanmoqda..."}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(SuraCard);