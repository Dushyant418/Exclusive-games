import React from 'react'
import poker from '../assets/Webp/poker.webp'
import Aviator from '../assets/Webp/Aviator.webp'
import Ellips1 from '../assets/Webp/Ellipse-31.webp'
import Ellips2 from '../assets/Webp/Ellipse12.webp'
import Ellips3 from '../assets/Webp/Ellipse-30.webp'

const Secton_2 = () => {
    return (
        <section className="bg-[#00141B] relative">
            <div className="container max-w-[1140px] mx-auto px-[12px]">
                <div className="flex flex-wrap mx-[-12px] pt-[74.2px] pb-[70px]">
                    <div className="md:w-[50%] w-full max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] px-[12px] z-10">
                        <img src={poker} className='w-full' alt="poker" />
                        <h2 className="text-white text-[48px] leading-[57.6px] font-Anton pb-[16px] pt-[60px]">Nuestra Visión</h2>
                        <p className="text-[#CCD0D2] font-medium text-[16px] leading-[25.6px] font-Inter max-w-[444px]">Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                        <p className="text-[#7AF57A] font-bold text-[16px] leading-[25px] font-Inter  pt-[24px] cursor-pointer">Aprende más <span>&#8594;</span></p>
                    </div>
                    <div class="md:w-[50%] w-full px-[12px] max-md:pt-[50px] max-md:justify-center max-md:items-center max-sm:px-[30px] max-md:flex max-md:flex-col max-md:px-[60px] z-20">
                        <h2 className="text-white text-[48px] leading-[57.6px] pb-[16px] font-Anton">Nuestra Misión</h2>
                        <p className="text-[#CCD0D2] font-medium text-[16px] leading-[25.6px] font-Inter max-w-[444px]">Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                        <p className="text-[#7AF57A] font-bold text-[16px] leading-[25px] font-Inter pt-[24px] pb-[60px] cursor-pointer">Aprende más <span>&#8594;</span></p>
                        <img src={Aviator} className='w-full' alt="poker" />
                    </div>
                </div>
            </div>
            <div className=' absolute top-[-160px] left-0 hidden lg:block'>
                <img src={Ellips1} alt="ellipse-img" />
            </div>
            <div className=' absolute top-[320px] left-[550px] hidden lg:block'>
                <img src={Ellips2} alt="ellipse-img" />
            </div>
            <div className=' absolute bottom-[-600px] right-0 hidden lg:block'>
                <img src={Ellips3} alt="ellipse-img" />
            </div>
        </section>
    )
}

export default Secton_2