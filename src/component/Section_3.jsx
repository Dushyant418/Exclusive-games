import React from 'react'
import image_1 from '../assets/Webp/sec-3_img-1.webp'
import image_2 from '../assets/Webp/sec-3_img-2.webp'
import image_3 from '../assets/Webp/sec-3_img-3.webp'
import image_4 from '../assets/Webp/sec-3_img-4.webp'
import image_5 from '../assets/Webp/sec-3_img-5.webp'
import image_6 from '../assets/Webp/sec-3_img-6.webp'
import bulb from '../assets/Webp/bulb.webp'
import card_icon2 from '../assets/Webp/Card-icon-2.webp'
import card_icon3 from '../assets/Webp/Card-icon-3.webp'
import vector1 from '../assets/Webp/Vector-1.webp'
import vector2 from '../assets/Webp/Vector-2.webp'
import { Greenline, Whiteline } from '../common/Icons'
const Section_3 = () => {
    return (
        <section className="baground-white bg-[#00141B] max-lg:bg-white bg-center bg-cover w-full">
            <div className="container max-w-[1140px] mx-auto px-[12px] pt-[70px] lg:pt-[243px]">
                <div className='flex flex-col items-center justify-center pb-[60px]'>
                    <h2 className="text-[39px] sm:text-[48px] leading-[57.6px] font-Anton max-md:text-center">Nuestros Atributos de Marca</h2>
                </div>
                <div className='flex flex-wrap mx-[-12px] relative max-lg:justify-center max-md:items-center'>
                    <div className='lg:w-[33.33%] md:w-[50%] w-full flex px-3 flex-col lg:items-start'>
                        <div className='flex items-center flex-col'>
                            <img src={bulb} alt="bulb" />
                            <h2 className='font-Anton text-[20px] leading-[26px] text-center pt-[16px]'>Inteligencia</h2>
                            <p className='text-[#334349] font-Inter font-medium text-[16px] leading-[25.6px] text-center max-w-[263px] pt-[10px]'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                        </div>
                    </div>
                    <div className='lg:w-[33.33%] md:w-[50%] w-full flex px-3 flex-col lg:items-center max-md:pt-[24px] '>
                        <div className='flex items-center flex-col'>
                            <img src={card_icon2} alt="icon-2" />
                            <h2 className='font-Anton text-[20px] leading-[26px] text-center pt-[16px]'>Proactividad</h2>
                            <p className='text-[#334349] font-Inter font-medium text-[16px] leading-[25.6px] text-center max-w-[263px] pt-[10px]'>Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                        </div>
                    </div>
                    <div className='lg:w-[33.33%] md:w-[50%] w-full flex px-3 flex-col lg:items-end max-lg:pt-[24px] '>
                        <div className='flex items-center flex-col'>
                            <img src={card_icon3} alt="icon-3" />
                            <h2 className='font-Anton text-[20px] leading-[26px] text-center pt-[16px]'>Innovación</h2>
                            <p className='text-[#334349] font-Inter font-medium text-[16px] leading-[25.6px] text-center max-w-[263px] pt-[10px]'>Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                        </div>
                    </div>
                    <div className='absolute top-0 left-[218px] max-lg:hidden'>
                        <img src={vector1} alt="arrow" />
                    </div>
                    <div className='absolute top-[69px] right-[218px] max-lg:hidden'>
                        <img src={vector2} alt="arrow" />
                    </div>
                </div>



                <div className='flex flex-col items-center justify-center pt-[100px] md:pt-[150px]'>
                    <h2 className="text-[48px] leading-[57.6px] font-Anton pb-[16px]">Slots </h2>
                    <p className="font-medium text-[16px] text-center max-w-[904px] font-Inter">En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                    <div className="flex flex-wrap mx-[-12px] pt-[60px] z-30">
                        <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] group">
                            <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                                <img src={image_1} className='w-full relative' alt="image_1" />
                                <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>
                                    <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter font-bold text-[16px] text-white hover:bg-white hover:text-[#000] duration-300 z-20"> <span className='absolute -bottom-2 -left-2'>
                                        <Whiteline />
                                    </span>Jugar</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] group">
                            <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                                <img src={image_2} className='w-full relative' alt="image_1" />
                                <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>
                                    <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter font-bold text-[16px] text-white hover:bg-white hover:text-[#000] duration-300 z-20"> <span className='absolute -bottom-2 -left-2'>
                                        <Whiteline />
                                    </span>Jugar</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] group">
                            <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                                <img src={image_3} className='w-full relative' alt="image_1" />
                                <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>
                                    <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter font-bold text-[16px] text-white hover:bg-white hover:text-[#000] duration-300 z-20"> <span className='absolute -bottom-2 -left-2'>
                                        <Whiteline />
                                    </span>Jugar</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] group lg:mt-[24px]">
                            <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                                <img src={image_4} className='w-full relative' alt="image_1" />
                                <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>
                                    <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter font-bold text-[16px] text-white hover:bg-white hover:text-[#000] duration-300 z-20"> <span className='absolute -bottom-2 -left-2'>
                                        <Whiteline />
                                    </span>Jugar</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] group lg:mt-[24px]">
                            <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                                <img src={image_5} className='w-full relative' alt="image_1" />
                                <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>
                                    <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter font-bold text-[16px] text-white hover:bg-white hover:text-[#000] duration-300 z-20"> <span className='absolute -bottom-2 -left-2'>
                                        <Whiteline />
                                    </span>Jugar</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] group lg:mt-[24px]">
                            <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                                <img src={image_6} className='w-full relative' alt="image_1" />
                                <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>
                                    <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter font-bold text-[16px] text-white hover:bg-white hover:text-[#000] duration-300 z-20"> <span className='absolute -bottom-2 -left-2'>
                                        <Whiteline />
                                    </span>Jugar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' pb-[70px] pt-[40px] md:pb-[243px]'>
                        <button className="py-[13px] duration-300 px-[46px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A] rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_1px_#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-bold font-['inter'] text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
                            <Greenline />
                        </span>Mostrar más</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Section_3