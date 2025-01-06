 
const NumberSelector = ( {selected,setSelected, error, setError}) => {
    const arr=[
        1,2,3,4,5,6
    ]
    const handler = (value) => {
      setSelected(value);
      setError("");
    }
  return (
    <main className="flex flex-col items-end gap-[20px] justify-center">
      <h1 className='text-red-600'>{error}</h1>
      <div className='flex gap-[24px]'>
      {arr.map((value, i) => {
      const isSelected = (value === selected); // Calculate isSelected for each item
      return (
        <div
          key={i}
          className={`border-black border-[2px] lg:w-[72px] lg:h-[72px] w-[45px] h-[45px] font-[700] text-[24px] items-center text-center cursor-pointer grid
            ${isSelected ? "bg-black text-white" : "bg-white text-black"}`}
          onClick={() => handler(value)}> 
          {value}
        </div>
      );
      })}
    </div>
    <p className='lg:font-[700] lg:text-[24px] font-[600] text-[18px]  '>Select Number</p>
  </main>
  
  );
};

export default NumberSelector
