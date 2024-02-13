import React from 'react'
import casino from '../assets/Webp/Casino-night.webp'
import { Greenline } from '../common/Icons'
const Section_5 = () => {
    return (
        <section className='baground-white-2 bg-[#03141A] max-lg:bg-white pt-[70px] lg:pt-[304px] lg:pb-[324px]'>
            <div className='container max-w-[1140px] mx-auto px-[12px]'>
                <div className="flex flex-wrap mx-[-12px]">
                    <div className='md:w-[50%] w-full px-[12px] md:pt-[20px] lg:pt-[79px] z-30 max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px]'>
                        <h2 className='font-Anton text-[48px] leading-[57.6px] pb-[16px]' >Por qué elegirnos</h2>
                        <p className='font-Inter font-medium text-[16px] leading-[25.6px] max-w-[526px]'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                        <button className="py-[13px] duration-300 mt-[24px] px-[46px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A] rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_1px_#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-bold font-['inter'] text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
                            <Greenline />
                        </span>Aprende más</button>
                    </div>
                    <div className='md:w-[50%] w-full max-md:pt-[24px] px-[12px] pb-[70px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px]'>
                        <img src={casino} className='w-full' alt="casino-night" />
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Section_5