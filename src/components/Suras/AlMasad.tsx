import SuraCard from "../SuraCard.tsx";
import masadAudio from "../../suras-audio/Masad.mp3";

const AlMasad = () => {
    const original = (
        <>
            Bismillahir Rohmanir Rohiym<br/>
            Tabbat yadaa abii lahabiv-va tabb<br/>
            Maa ag'naa 'anhu maaluhu va maa kasab<br/>
            Sayaslaa naaron zaata lahab<br/>
            Vamroatuhu hammaalatal hatob<br/>
            Fii jiidihaa hablum-mim masad
        </>
    );

    const translation = (
        <>
            Mehribon va Rahmli Alloh nomi bilan<br/>
            Abu Lahabning qo'llari halok bo'lsin, halok!<br/>
            Mol-mulki va to'plagan boyliklari unga foyda bermadi.<br/>
            Yaqinda u alangalangan olovga kiradi.<br/>
            Uning o'tin tashuvchi xotini ham (olovga kiradi).<br/>
            Uning bo'ynida pishiq eshilgan ip (arvoh) bo'ladi.<br/>
        </>
    );

    return (
        <SuraCard title={"113. Al-Masad surasi"}
                  audioURL={masadAudio}
                  originalText={original}
                  translationText={translation}
        >
        </SuraCard>
    );
}

export default AlMasad;