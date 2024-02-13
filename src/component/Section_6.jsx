import React from 'react'
import casino_cards from '../assets/Webp/Casino-cards.webp'
import green_pos from '../assets/Webp/green-position.webp'
import A_pos from '../assets/Webp/position-A.webp'
import A_pos2 from '../assets/Webp/position2-A.webp'
import Dice_pos from '../assets/Webp/position-dice.webp'
import card_3 from '../assets/Webp/Card-3img.webp'
import Giros from '../assets/Webp/Giros-Gratis.webp'
import Todos from '../assets/Webp/todos.webp'
import Happy_hour from '../assets/Webp/Happy-hour.webp'
import ellipse_16 from '../assets/Webp/Ellipse16.webp'
import ellipse_26 from '../assets/Webp/Ellipse26.webp'
import vending from '../assets/Webp/Vending-machine.webp'
import icon from '../assets/Webp/icon.webp'
import icon_2 from '../assets/Webp/icon-2.webp'
import icon_3 from '../assets/Webp/icon-3.webp'
import ellipse_22 from '../assets/Webp/Ellipse22.webp'
import ellipse_25 from '../assets/Webp/Ellipse25.webp'
import { Doubletick, Greenline, Whiteline } from '../common/Icons'
const Section_7 = () => {
    return (
        <section className='bg-[#00141B] relative'>
            <div className='container max-w-[1140px] mx-auto px-[12px]'>
                <div className='flex flex-row flex-wrap mx-[-12px] pt-[70px]'>
                    <div className='md:w-[50%] w-full px-[12px] z-20 max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px]'>
                        <img src={vending} className='w-full' alt="vending-machine" />
                    </div>
                    <div className='md:w-[50%] w-full px-[12px] z-20 '>
                        <h2 className='text-white font-Anton text-[48px] pb-[32px] max-md:text-center'>Más razones para elegirnos</h2>
                        <div className='bg-[#061D20] duration-200 max-w-[374px] hover:shadow-[1px_1px_11px_1px_#3D8656] cursor-pointer border-[0.5px] border-[#3F884F] rounded-[16px] py-[24px] pl-[56px] flex items-center gap-[37px] w-full'>
                            <img src={icon} alt="icon" />
                            <div>
                                <p className='text-white font-Anton text-[32px] leading-[41.6px]'>200</p>
                                <p className='text-white font-Inter font-medium text-[16px] leading-[25.6px]'>Páginas creadas</p>
                            </div>
                        </div>
                        <div className='bg-[#061D20] duration-200 mt-[24px] mb-[24px] max-w-[374px] border-[0.5px] hover:shadow-[1px_1px_11px_1px_#3D8656] cursor-pointer border-[#3F884F] rounded-[16px] py-[24px] pl-[56px] flex items-center gap-[37px] w-full'>
                            <img src={icon_2} alt="icon" />
                            <div>
                                <p className='text-white font-Anton text-[32px] leading-[41.6px]'>98%</p>
                                <p className='text-white font-Inter font-medium text-[16px] leading-[25.6px]'>Clientes Satisfechas</p>
                            </div>
                        </div>
                        <div className='bg-[#061D20] duration-200 max-w-[374px] border-[0.5px] hover:shadow-[1px_1px_11px_1px_#3D8656] cursor-pointer border-[#3F884F] rounded-[16px] py-[24px] pl-[56px] flex items-center gap-[37px] w-full'>
                            <img src={icon_3} alt="icon" />
                            <div>
                                <p className='text-white font-Anton text-[32px] leading-[41.6px]'>200</p>
                                <p className='text-white font-Inter font-medium text-[16px] leading-[25.6px]'>Divisas Disponibles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' absolute top-[-650px] left-0 z-0 hidden lg:block'>
                <img src={ellipse_22} alt="ellipse-img" />
            </div>
            <div className=' absolute top-0 right-0 z-0 hidden lg:block'>
                <img src={ellipse_25} alt="ellipse-img" />
            </div>
            <div className='container max-w-[1140px] mx-auto px-[12px] z-50 flex flex-col'>
                <div className='flex flex-col items-center justify-center pt-[70px]'>
                    <h2 className='font-Anton text-[48px] leading-[57.6px] text-white pb-[16px]'>Nuestras ofertas</h2>
                    <p className='font-Inter font-medium text-[16px] text-center leading-[25.6px] text-white pb-[60px]'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
                </div>
                <div className='bg-[#072124] duration-200 border-[0.5px] border-[#829291] hover:shadow-[1px_1px_11px_1px_#3D8656] hover:border-[#3D8656] pt-[57px] max-md:pl-[40px] pb-[32px] pr-[40px] rounded-[16px] z-50'>
                    <div className='flex flex-row flex-wrap mx-[-12px] z-40'>
                        <div className='md:w-[50%] w-full px-[12px] md:pt-[77px] relative  z-20 '>
                            <img src={casino_cards} className='w-full ' alt="casino-card" />
                            <div className=' absolute top-[-60px] left-[-30px] z-[-10] max-lg:hidden'>
                                <img src={ellipse_16} alt="ellipse-16" className=' -z-10' />
                            </div>
                        </div>
                        <div className='md:w-[50%] w-full px-[12px]'>
                            <h4 className='text-white font-Anton text-[32px] leading-[41.6px] pb-[16px] '>Silver</h4>
                            <p className='text-[#CDD3D3] font-Inter text-[16px] leading-[25.6px]'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                            <h2 className='text-white font-Anton text-[48px] leading-[57.6px] pt-[32px] pb-[16px]'>$5000</h2>
                            <div className='max-w-[419px] flex flex-col gap-[12px]'>
                                <div className='flex items-start gap-[8px]'>
                                    <div>
                                        <Doubletick />
                                    </div>
                                    <p className='text-[#CDD3D3] font-Inter font-medium text-[16px] leading-[25.6px]'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                                </div>
                                <div className='flex items-start gap-[8px]'>
                                    <div>
                                        <Doubletick />
                                    </div>
                                    <p className='text-[#CDD3D3] font-Inter font-medium text-[16px] leading-[25.6px]'>Control de RTP (controlás qué porcentaje pagar)</p>
                                </div>
                                <div className='flex items-start gap-[8px]'>
                                    <div>
                                        <Doubletick />
                                    </div>
                                    <p className='text-[#CDD3D3] font-Inter font-medium text-[16px] leading-[25.6px]'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                                </div>
                                <div className='flex items-start gap-[8px]'>
                                    <div>
                                        <Doubletick />
                                    </div>
                                    <p className='text-[#CDD3D3] font-Inter font-medium text-[16px] leading-[25.6px]'>Aplicación para Android y Windows de regalo.</p>
                                </div>
                                <div className='flex items-start gap-[8px]'>
                                    <div>
                                        <Doubletick />
                                    </div>
                                    <p className='text-[#CDD3D3] font-Inter font-medium text-[16px] leading-[25.6px]'>Tiempo de creación 2 a 3 semanas</p>
                                </div>
                            </div>
                            <div className='pt-[40px]'>
                                <button className="py-[13px] duration-300 px-[46px] relative flex items-center justify-center bg-transparent border rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_1px_#67E0B2] hover:to-[#51C8EF] hover:from-[#7AF57A] font-bold font-['inter'] text-[16px] text-white hover:text-black hover:border-transparent"> <span className='absolute -bottom-2 -left-2'>
                                    <Whiteline />
                                </span>Comprar ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container max-w-[1140px] mx-auto px-[12px]'>
                <div className='border-[0.5px] duration-200 border-[#829291] hover:shadow-[1px_1px_11px_1px_#3D8656] hover:border-[#3D8656] pt-[57px] pb-[32px] z-20 max-md:pl-[40px] pr-[40px] rounded-[16px] mt-[64px] card-image relative'>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='font-Anton text-[32px] leading-[41.6px] text-white pb-[16px]'>Luxury</h2>
                        <p className='max-w-[419px] text-[#CDD5D5] font-medium text-[16px] leading-[25.6px] text-center'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                        <h2 className='font-Anton text-[48px] leading-[57.6px] text-white pt-[32px] pb-[16px]'>$9000</h2>
                        <div className='max-w-[419px] flex flex-col gap-[12px]'>
                            <div className='flex items-start gap-[8px]'>
                                <div>
                                    <Doubletick />
                                </div>
                                <p className='text-[#CDD3D3] font-Inter font-medium text-[16px] text-center leading-[25.6px]'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                            </div>
                            <div className='flex items-start gap-[8px]'>
                                <div>
                                    <Doubletick />
                                </div>
                                <p className='text-[#CDD3D3] font-Inter font-medium text-[16px] text-center leading-[25.6px]'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className='flex items-start gap-[8px]'>
                                <div>
                                    <Doubletick />
                                </div>
                                <p className='text-[#CDD3D3] font-Inter font-medium text-[16px] text-center leading-[25.6px]'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                            </div>
                            <div className='flex items-start gap-[8px]'>
                                <div>
                                    <Doubletick />
                                </div>
                                <p className='text-[#CDD3D3] font-Inter font-medium text-[16px] text-center leading-[25.6px]'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                            <div className='flex items-start gap-[8px]'>
                                <div>
                                    <Doubletick />
                                </div>
                                <p className='text-[#CDD3D3] font-Inter font-medium text-[16px] text-center leading-[25.6px]'>Tiempo de creación 2 a 3 semanas</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center pt-[36px]'>
                            <button className="py-[13px] duration-300 px-[46px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A] rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_1px_#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-bold font-['inter'] text-[16px] text-[#00141B] "> <span className='absolute -bottom-2 -left-2'>
                                <Greenline />
                            </span>Comprar ahora</button>
                        </div>
                    </div>
                    <div className='absolute top-[120px] left-[215px] max-lg:hidden'>
                        <img src={green_pos} alt="green-icon" />
                    </div>
                    <div className='absolute bottom-[90px] left-[120px] max-lg:hidden'>
                        <img src={A_pos} alt="A-icon" />
                    </div>
                    <div className='absolute top-[90px] right-[120px] max-lg:hidden'>
                        <img src={A_pos2} alt="A-icon" />
                    </div>
                    <div className='absolute bottom-[106px] right-[224px] max-lg:hidden'>
                        <img src={Dice_pos} alt="green-icon" />
                    </div>
                </div>
            </div>
            <div className='container max-w-[1140px] mx-auto px-[12px]'>
                <div className='border-[0.5px] duration-200 hover:shadow-[1px_1px_11px_1px_#3D8656] z-30  hover:border-[#3D8656] border-[#829291] py-[78px] pr-[40px] pl-[50px] rounded-[16px] mt-[64px] relative'>
                    <div className='flex flex-row-reverse md:flex-row flex-wrap mx-[-12px]'>
                        <div className='md:w-[41.66%] w-full px-[12px] md:pt-[43px] z-20'>
                            <h3 className='font-Anton text-[32px] leading-[41.6px] text-white pb-[16px]'>Platinum</h3>
                            <p className='text-[#CFD6D6] font-Inter font-medium text-[16px] leading-[25.6px]'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                            <h3 className='font-Anton text-[48px] leading-[57.6px] text-white pt-[32px] pb-[16px]'>Consultar precio</h3>
                            <div className='flex gap-[8px]'>
                                <Doubletick />
                                <p className='text-[#CED4D4] font-Inter font-medium text-[16px] leading-[25.6px] '>Personalizable </p>
                            </div>
                            <div className='pt-[40px]'>
                                <button className="py-[13px] duration-300 px-[46px] relative flex items-center justify-center bg-transparent border rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_1px_#67E0B2] hover:to-[#51C8EF] hover:from-[#7AF57A] font-bold font-['inter'] text-nowrap text-[16px] text-white hover:text-black hover:border-transparent"> <span className='absolute -bottom-2 -left-2'>
                                    <Whiteline />
                                </span>Comprar ahora</button>
                            </div>
                        </div>
                        <div className='md:w-[58.33%] w-full px-[12px] z-10 max-md:pt-[30px]'>
                            <img src={card_3} className='w-full' alt="card-3" />
                        </div>
                    </div>
                    <div className=' absolute top-[-40px] right-0 max-lg:hidden'>
                        <img src={ellipse_16} alt="ellipse-img" />
                    </div>
                </div>
            </div>
            <div className='container max-w-[1140px] mx-auto px-[12px]'>
                <div className='flex flex-col items-center justify-center pt-[70px]'>
                    <h2 className='font-Anton text-[43px] md:text-[48px] leading-[57.6px] text-white text-center'>Ellos eligieron apostar con nosotros</h2>
                </div>
                <div className='flex flex-row flex-wrap max-lg:justify-center mx-[-12px] pt-[40px]'>
                    <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] group z-10">
                        <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px]'>
                            <img src={Giros} className='w-full relative' alt="image_1" />
                            <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>
                                <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter font-bold text-[16px] text-white hover:bg-white hover:text-[#000] duration-300 z-20"> <span className='absolute -bottom-2 -left-2'>
                                    <Whiteline />
                                </span>Rcasinovip</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] group">
                        <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px]'>
                            <img src={Todos} className='w-full relative' alt="image_1" />
                            <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>
                                <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter font-bold text-[16px] text-white hover:bg-white hover:text-[#000] duration-300 z-20"> <span className='absolute -bottom-2 -left-2'>
                                    <Whiteline />
                                </span>Rcasinovip</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col max-sm:px-[30px] max-md:px-[60px] group">
                        <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px]'>
                            <img src={Happy_hour} className='w-full relative' alt="image_1" />
                            <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>
                                <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter font-bold text-[16px] text-white  hover:bg-white hover:text-[#000] duration-300 z-20"> <span className='absolute -bottom-2 -left-2'>
                                    <Whiteline />
                                </span>Rcasinovip</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-center font-Inter font-semibold text-[16px] leading-[25.6px] text-white max-w-[883px] pt-[38px]'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
                        <span className='block'>Ahora, la próxima apuesta está en tus manos.</span>
                        Elige ganar. Elige exclusive game.</p>
                </div>
            </div>
            <div className='absolute bottom-[550px] left-0 z-0 hidden lg:block'>
                <img src={ellipse_26} alt="ellipse-img" />
            </div>
        </section>
    )
}
export default Section_7