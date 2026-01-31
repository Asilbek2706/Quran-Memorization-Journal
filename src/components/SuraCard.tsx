import '../styles/SuraCard.scss';

interface IProps {
    title: string;
    audioURL: string;
    originalText: React.ReactNode;
    translationText: React.ReactNode;
}

const SuraCard = ({ title, audioURL, originalText, translationText }: IProps) => {
    return (
        <div className="sura-card">
            <h2 className={"sura-title"}>{title}</h2>
            <audio controls className={"sura-audio"}>
                <source src={audioURL} />
                Brawser audioni qo'llab-quvvatlamaydi
            </audio>
            <div className="sura-content-wrapper">
                <div className="text-column original">
                    {originalText}
                </div>

                <div className={"divider-line"}></div>

                <div className={"text-column translation"}>
                    {translationText}
                </div>
            </div>
        </div>
    )
}

export default SuraCard;