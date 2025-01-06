
import Score from './score'
import Rules from './Rules'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'


export default function GamePage(){
  const[selected,setSelected] = useState();
  const[dice,setDice]= useState(1);
  const[score,setScore]=useState(0);
  const[error,setError]=useState("");
  const[rules,showRules]=useState(false)

  const generateDice = (min , max) => {
    return Math.floor(Math.random()*(max-min)+min );}

  const rollDice = () => {
    if(!selected)
    {
    setError("You have not selected any number")
    return;
    }
    const random = generateDice(1,7);
    setDice(random);

    if(selected == random){
      setScore((prev) => prev + random) ;
    }else{
      setScore((prev) => prev - 2);
    }
    setSelected(undefined);
};

const resetScore = () =>{
  setScore(0)
}
  return (
    <main className='pt-[70px]'>
      <div className='flex justify-around items-center flex-col lg:flex-row'>
        <Score score = {score}/>

        <NumberSelector selected ={selected}
         setError ={setError} setSelected = {setSelected} error={error} 
        
        />
       </div>
       <RollDice dice={dice} rollDice={rollDice}/>


       <div className='flex flex-col justify-center items-center gap-[24px]  '>
        <button
        className='w-[220px] h-[44px] rounded-[5px] text-black
        border-solid mt-6
        border-[2px]
        border-black
        hover:border-solid
        hover:border-[2px]
        hover:border-white
        hover:text-white
        hover:bg-black px-[18px] py-[10px] 
        duration-[.3s] ease-in
        '
        onClick={resetScore}
        >Reset Score</button>
        <button
        className='w-[220px] h-[44px] rounded-[5px] text-white
        border-solid
        border-transparent
        hover:border-solid
        hover:border-[2px]
        hover:border-black
        hover:text-black
        bg-black px-[18px] py-[10px]
        hover:bg-white 
        duration-[.3s] ease-in
        '
        onClick={()=>showRules(!rules)}
        >{ rules? "Hide":"Show"} Rules</button>
       </div>
     {
      rules ? <Rules/> : <></>
     }
     <p className={`justify-self-center ${rules ? "mt-0" : "mt-10"} text-[12px]`}> Made with ❤️ by Vivek kumar</p>
    </main>
  )
}
