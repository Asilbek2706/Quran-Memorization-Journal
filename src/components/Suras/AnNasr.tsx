import SuraCard from "../SuraCard.tsx";

const AlMasad = () => {
    const original = (
        <>
            Bismillahir Rohmanir Rohiym<br/>
            Iza ja'a nasrullohi val-fath<br/>
            Va roaytan-nasa yadxuluna fi dinillahi afvaja<br/>
            Fasabbih bihamdi Robbika vastag'firh, innahu kana tavvaba<br/>
        </>
    );

    const translation = (
        <>
            Mehribon va Rahmli Alloh nomi bilan<br/>
            Qachonki, Allohning yordami va g'alaba kelsa...<br/>
            ...va odamlarning to'p-to'p bo'lib Allohning diniga kirayotganini ko'rsang...<br/>
            ...Darhol Robbingga hamd aytish bilan Uni poklab yod et va Undan mag'firat so'ra. Zero, U tavbalarni qabul qiluvchi Zotdir.<br/>
        </>
    );

    return (
        <SuraCard title={"110. An-Nasr surasi"}
                  audioURL={"src/public/Nasr.MP3"}
                  originalText={original}
                  translationText={translation}
        >
        </SuraCard>
    );
}

export default AlMasad;