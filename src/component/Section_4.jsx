import React from 'react'
import Jackpot from '../assets/Webp/Jackpot.webp'
import pos_1 from '../assets/Webp/position-1.webp'
import pos_2 from '../assets/Webp/position-2.webp'
import jack_1 from '../assets/Webp/Black-Jack1.webp'
import jack_2 from '../assets/Webp/Black-Jack2.webp'
import jack_3 from '../assets/Webp/Black-Jack3.webp'
import ellipse4 from '../assets/Webp/Ellipse29.webp'
import ellipse5 from '../assets/Webp/Ellipse28.webp'
import { Doubletick, Whiteline } from '../common/Icons'
const Section_4 = () => {
    return (
        <section className='baground-green bg-[#00141B] bg-cover bg-center relative'>
            <div className="container max-w-[1140px] mx-auto px-[12px]">
                <div className='flex flex-row flex-wrap mx-[-12px] pt-[70px] pb-[70px] md:pb-[150px]'>
                    <div className='md:w-[50%] w-full px-[12px] z-20 max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px]'>
                        <img src={Jackpot} className='w-full' alt="jackpot" />
                    </div>
                    <div className='md:w-[50%] w-full px-[12px] max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px]'>
                        <h2 className='font-Anton text-white text-[48px] max-md:text-center leading-[57.6px] pt-[30.5px] pb-[16px]'>Potenciando sus elecciones</h2>
                        <p className='text-[#CDD0D2] text-[16px] leading-[25px] font-Inter font-medium'>Con Exclusive Game lo mejor está de tu lado.</p>
                        <div className='max-w-[412px]'>
                            <div className='flex items-center gap-[8px] pt-[24px]'>
                                <Doubletick />
                                <p className='text-[#CDD0D2] font-Inter font-medium text-[16px] leading-[25.6px]'>Tecnología HTML5</p>
                            </div>
                            <div className='flex items-center gap-[8px] pt-[12px]'>
                                <Doubletick />
                                <p className='text-[#CDD0D2] font-Inter font-medium text-[16px] leading-[25.6px]'>Versión PC y móvil</p>
                            </div>
                            <div className='flex items-center gap-[8px] pt-[12px]'>
                                <Doubletick />
                                <p className='text-[#CDD0D2] font-Inter font-medium text-[16px] leading-[25.6px]'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className='flex items-start gap-[8px] pt-[12px]'>
                                <div>
                                    <Doubletick />
                                </div>
                                <p className='text-[#CDD0D2] font-Inter font-medium text-[16px] leading-[25.6px]'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
                            </div>
                            <div className='flex items-center gap-[8px] pt-[12px] pb-[24px]'>
                                <Doubletick />
                                <p className='text-[#CDD0D2] font-Inter font-medium text-[16px] leading-[25.6px]'>Aplicación para android y windows de regalo.</p>
                            </div>
                        </div>
                        <p className='text-[#CDD0D2] font-Inter font-medium text-[16px] leading-[25.6px]'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
                    </div>
                </div>
                <div className='border border-white duration-200 hover:shadow-[1px_1px_11px_1px_#3D8656] hover:border-[#3D8656] z-20 rounded-[16px] relative'>
                    <div className='flex flex-col items-center justify-center '>
                        <h2 className='font-Anton text-white text-[30px] md:text-[48px] text-center py-[50px] md:py-[96px] leading-[50px] md:leading-[57.6px] max-w-[520px] z-40'>lanza tu propia plataforma en sólo 2 semanas</h2>
                    </div>
                    <div className='absolute top-0 left-0 hidden lg:block'>
                        <img src={pos_1} className=' opacity-[30%]' alt="pos-1" />
                    </div>
                    <div className='absolute bottom-0 right-0 hidden lg:block'>
                        <img src={pos_2} className=' opacity-[30%]' alt="pos-2" />
                    </div>
                </div>
                <div>
                    <h2 className='font-Anton text-white text-[44px] md:text-[48px] text-center pt-[50px] md:pt-[150px] pb-[40px] leading-[57.6px]'>Juegos en vivo</h2>
                    <div className='flex flex-row flex-wrap mx-[-12px] pb-[70px] max-lg:justify-center'>
                        <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] group">
                            <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px]'>
                                <img src={jack_1} className='w-full relative' alt="image_1" />
                                <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>
                                    <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter font-bold text-[16px] text-white hover:bg-white hover:text-[#000] duration-300 z-20"> <span className='absolute -bottom-2 -left-2'>
                                        <Whiteline />
                                    </span>Reproducir ahora</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] group">
                            <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px]'>
                                <img src={jack_2} className='w-full relative' alt="image_1" />
                                <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>
                                    <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter font-bold text-[16px] text-white hover:bg-white hover:text-[#000] duration-300 z-20"> <span className='absolute -bottom-2 -left-2'>
                                        <Whiteline />
                                    </span>Reproducir ahora</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] group z-30">
                            <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px]'>
                                <img src={jack_3} className='w-full relative' alt="image_1" />
                                <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>
                                    <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter font-bold text-[16px] text-white hover:bg-white hover:text-[#000] duration-300 z-20"> <span className='absolute -bottom-2 -left-2'>
                                        <Whiteline />
                                    </span>Reproducir ahora</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' absolute top-[-700px] left-[-10%] hidden lg:block'>
                <img src={ellipse4} alt="ellipse-img" />
            </div>
            <div className=' absolute bottom-[-400px] right-0 hidden lg:block'>
                <img src={ellipse5} alt="ellipse-img" />
            </div>
        </section>
    )
}

export default Section_4