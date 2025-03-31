const diceImages = [
  "/assets/dice_1.png",
  "/assets/dice_2.png",
  "/assets/dice_3.png",
  "/assets/dice_4.png",
  "/assets/dice_5.png",
  "/assets/dice_6.png",
];

const RollDice = ({rollDice , dice}) => {
  return (
    <main className='flex justify-center flex-col items-center'>
      <div>
{/*       
        <img 
        className='cursor-pointer '
        onClick={rollDice }

        src={`/assets/dice_${dice}.png`}
        // /src/assets/dice_${dice}.png
        alt={`dice_${dice}`} /> */}
        <img
          className="cursor-pointer"
          onClick={rollDice}
          src={diceImages[dice - 1]} // Access the corresponding dice image
          alt={`dice_${dice}`}
        />
      </div>
      <p className='text-[24px]  font-[500]'>Click on Dice to  roll</p>
    </main>
  )
}

export default RollDice;
