 
const Rules = () => {
  return (
    <div className='lg:max-w-[794px] max-w-[80%] mx-auto p-[20px] bg-[#FBF1F1] mt-[70px] mb-[10px] rounded-lg'> 
      <h1 className='lg:text-[24px] text-[18px] p-[20px]  font-[700] '>How to play dice game</h1>
      <div className='pl-[20px] text-[12px] lg:text-[16px]'>
      <ol className='list-decimal'>
          <li>select any number</li>
          <li>click on dice image to roll</li>
          <li>if matched, you'll get the score you had selected.</li>
          <li>if you get wrong guess then 2 point will be deducted.</li>
      </ol>
      </div>
    </div>
  )
}

export default Rules;
