import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Hero({toggleGame}) {
  return (
    
    <section className='mx-h-[100vh]'>
        <div className='grid lg:grid-cols-2  grid-cols-1 lg:max-w-[1182px] mx-h-[522px] mx-auto items-center py-[160px]'>

            {/* section for dice images */}
            <section className='flex flex-col items-center '>
                <img 
                className='h-[25vh] lg:h-[50vh]'
                src="https://www.dropbox.com/scl/fi/q9hih1yzo9zmezyz8909b/dices-1.png?rlkey=xxptkvsfw97nc1gm6kn62fhaw&st=d8wbb5o8&dl=1" alt="dice img"  
                
                />

            </section>


            {/* section for contents */}
            <section 
            className='items-center content-center flex flex-col'
            >
                <h1 className='lg:text-[96px] text-[60px] font-[700] gap-[10px]'> DICE GAME</h1>
                <button 
                className='lg:w-[220px] w-[190px] h-[44px] rounded-[5px] text-white
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
                onClick={toggleGame}
                >Play Now </button>
              
            </section>
        </div>
        <div  className='flex gap-3 items-center justify-center lg:mt-4 mt-[110px]'>
          <a 
          className='text-[24px]'
          href="https://www.linkedin.com/in/vivek-kumar-84sia/?trk=public-profile-join-page">
          <FaLinkedin />
          </a>
          <a  className='text-[24px]' href="https://www.instagram.com/vivek_84sia/profilecard/">
          <FaInstagram />
          </a>
          <a  className='text-[24px]' href="https://www.facebook.com/people/V%C3%AEvek-Kumar/100053914440434/?mibextid=ZbWKwL">
          <FaFacebook/>
          </a>
          <a  className='text-[24px]' href="mailto:vivek84sia@gmail.com">
          <IoIosMail />
          </a>
          
        </div>
          <p className='justify-self-center mt-2 text-[10px]' >copyright © 2025 Vivek kumar </p>


    </section>
  )
}
