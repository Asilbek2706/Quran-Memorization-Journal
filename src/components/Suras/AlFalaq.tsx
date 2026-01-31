import SuraCard from "../SuraCard.tsx";

const AlFalaq = () => {
    const original = (
        <>
            Bismillahir Rohmanir Rohiym<br/>
            Qul 'auzu birobbil Falaqq<br/>
            Min sharri maa xolaq<br/>
            Vaa min sharri g'osiqin izaa vaqob<br/>
            Va min sharrin-naffaasati fil ‘uqod<br/>
            Va min sharri haasidin izaa hasad
        </>
    );

    const translation = (
        <>
            Mehribon va Rahmli Alloh nomi bilan<br/>
            Ayting: «Tong Parvardigoridan panoh so‘rayman».<br/>
            «U yaratgan narsalar yomonligidan».<br/>
            «Va kirib kelgan qorong‘ulik yomonligidan».<br/>
            «Va tugunlarga dam uruvchi (sehrgar)lar yomonligidan».<br/>
            «Va hasad qilayotgan hasadchining yomonligidan».<br/>
        </>
    );

    return (
        <SuraCard title={"113. Al-Falaq surasi"}
                  audioURL={"src/suras-audio/Falaq.mp3"}
                  originalText={original}
                  translationText={translation}
        >
        </SuraCard>
    );
}

export default AlFalaq;