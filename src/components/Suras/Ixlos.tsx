import SuraCard from "../SuraCard.tsx";
import ixlosAudio from "../../suras-audio/Ixlos.mp3";

const Ixlos = () => {
    const original = (
        <>
            Bismillahir Rohmanir Rohiym<br/>
            Qul huvallohu ahad<br/>
            Allohus-somad<br/>
            Lam yalid va lam yulad<br/>
            Va lam yakullahu kufuvan ahad<br/>
        </>
    );

    const translation = (
        <>
            Mehribon va Rahmli Alloh nomi bilan<br/>
            (Ey Muhammad), ayting: «U Alloh yagonadir».<br/>
            «Alloh Somaddir (barcha hojatlar bilan ko'zlanadigan, hech kimga muhtoj bo'lmagan, hamma unga muhtoj zotdir)».<br/>
            «U tug'magan va tug'ilmagan».<br/>
            «Va Unga hech kim teng bo'lmagan».<br/>
        </>
    );

    return (
        <SuraCard title={"112. Ixlos surasi"}
                  audioURL={ixlosAudio}
                  originalText={original}
                  translationText={translation}
        >
        </SuraCard>
    );
}

export default Ixlos;