import { useState } from "react"
import './App.css'

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
            <h1 className="title">Batsman : Bangladeshi man</h1>
            {
                runs >= 50 && <p id="score-fifty" className="paragraph">You Scored 50</p>
            }
            {
                runs >= 100 && <p className="paragraph">You Scored 100</p>
            }

            <div className="box">
                <div className="flex">
                    <p>Score: {runs}</p>
                    <p>Sixes: {sixes}</p>
                    <p>Fours: {fours}</p>
                </div>
                <div className="flex">
                    <button className="btn" onClick={handleSingles}>Single</button>
                    <button className="btn" onClick={handleFours}>Four</button>
                    <button className="btn" onClick={handleSixes}>Six</button>
                </div>
            </div>

            
        </div>
        
    )
}