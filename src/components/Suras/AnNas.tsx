import SuraCard from "../SuraCard";
import nasAudio from "../../suras-audio/Nas.mp3";

const AnNas = () => {
    const original = (
        <>
            Bismillahir Rohmanir Rohiym<br/>
            Qul 'auzu birobbin-nas<br/>
            Malikin nas<br/>
            Ilahin nas<br/>
            Min sharril vasvasil xonnas<br/>
            Allaziy yuvasvisu fiy sudurin-nas<br/>
            Minal jinnati van-nas<br/>
        </>
    );

    const translation = (
        <>
            Mehribon va Rahmli Alloh nomi bilan<br/>
            (Ey Muhammad), ayting: «Insonlarning Parvardigoridan panoh so'rayman.<br/>
            Insonlarning Podshohidan<br/>
            (Allohning zikri kelganda) chekinuvchi vasvasachining (shaytonning) yomonligidan.<br/>
            U insonlarning dillariga vasvasa solur.<br/>
            (U vasvasachilar) jinlardan ham va odamlardan ham bo'lur».<br/>
        </>
    )

    return (
        <SuraCard
            title={"114. An-Nas surasi"}
            audioURL={nasAudio}
            originalText={original}
            translationText={translation}
        >
        </SuraCard>
    )
}

export default AnNas;