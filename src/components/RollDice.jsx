

const RollDice = ({rollDice , dice}) => {
   
 
  return (
    <main className='flex justify-center flex-col items-center'>
      <div>
        <img 
        className='cursor-pointer '
        onClick={rollDice }

        src={`/assets/dice_${dice}.png`}
        // /src/assets/dice_${dice}.png
        alt={`dice_${dice}`} />
      </div>
      <p className='text-[24px]  font-[500]'>Click on Dice to  roll</p>
    </main>
  )
}

export default RollDice;
