import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);
    const handleSingles = ()=> {
        const newRun = runs + 1;
        setRuns(newRun);
    }
    const handleFours = ()=> {
        const newRun = runs + 4;
        setRuns(newRun);
        const setFour = fours + 1;
        setFours(setFour)
    }
    const handleSixes = ()=> {
        const newRun = runs + 6;
        const setSix = sixes + 1;
        setSixes(setSix)
        setRuns(newRun);
    }
    return(
        <div>
            <h1>Batsman : Bangladeshi man</h1>
            {
                runs >= 50 && <p>You Scored 50</p>
            }
            {
                runs >= 100 && <p>You Scored 100</p>
            }

            <p>Score: {runs}</p>
            <p>Sixes: {sixes}</p>
            <p>Fours: {fours}</p>
            <button onClick={handleSingles}>Single</button>
            <button onClick={handleFours}>Four</button>
            <button onClick={handleSixes}>Six</button>
        </div>
    )
}