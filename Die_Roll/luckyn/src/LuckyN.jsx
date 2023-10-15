import {useState} from "react";
import { getRolls} from "./utils";
import Dice from "./Dice";
import Button from "./button";

export default function LuckyN({ title="Dice game" ,numDice=2 , winCheck}){
  const[dice,setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice);
  const rollAgain = () => {
    setDice(getRolls(numDice))
  }
  return(
    <main className="LuckyN">
        <h1>Lucky {title}{isWinner?" Winner!!":null}</h1>
        <Dice dice={dice}/>
        {/* <button onClick={rollAgain}>Re-roll</button> */}
        <Button clickFunc={rollAgain} name="Re-roll"/>
    </main>
  )
}
