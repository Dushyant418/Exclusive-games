import React, { useState } from 'react'
import img from '../assets/Webp/Group.webp'
import { Greenline, Whiteline } from '../common/Icons';

const Section_1 = () => {
    const [show, setShow] = useState(false);
    if (show === true) {
        document.body.classList.add("overflow-hidden")
    }
    else {
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <section className="bg-black bg-image">
            <nav className=' bg-white bg-opacity-[10%]'>
                <div className="container max-w-[1140px] mx-auto px-[12px] ">
                    <div className="flex items-center justify-between py-[19px]">
                        <div>
                            <a href=""><img className='relative z-30' src={img} alt="img" /></a>
                        </div>
                        <ul class={` ${show ? "left-[0]" : ""}  flex  gap-[38px] flex-col transition-all duration-500  w-full min-h-screen bg-black fixed left-[-100%] top-0  items-center  justify-center z-20 lg:flex-row lg:bg-inherit lg:static lg:min-h-full lg:w-auto`}>
                            <li><a href="#" className="text-[#D2D8DA] font-Inter font-medium text-[16px] leading-[25px] hover:text-white">Hogar</a></li>
                            <li><a href="#" className="text-[#D2D8DA] font-Inter font-medium text-[16px] leading-[25px] hover:text-white">Misión</a></li>
                            <li><a href="#" className="text-[#D2D8DA] font-Inter font-medium text-[16px] leading-[25px] hover:text-white">Tragamonedas</a></li>
                            <li><a href="#" className="text-[#D2D8DA] font-Inter font-medium text-[16px] leading-[25px] hover:text-white">Por qué elegirnos</a></li>
                            <li><a href="#" className="text-[#D2D8DA] font-Inter font-medium text-[16px] leading-[25px] hover:text-white">Ofertas</a></li>
                        </ul>
                        <div>
                            <button className="py-[13px] px-[46px] max-md:hidden relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-['inter'] sm:text-[16px] text-[14px] text-white hover:shadow-[1px_1px_11px_1px_#ffff] hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                                <Whiteline />
                            </span>Acceso</button>
                        </div>
                        <button onClick={() => setShow(!show)} className='gap-[5px] flex flex-col lg:hidden z-30'>
                            <span class=" bar1 h-[2px] w-[25px] bg-white block lg:hidden"></span>
                            <span class=" bar2 h-[2px] w-[25px] bg-white  block lg:hidden"></span>
                            <span class=" bar3 h-[2px] w-[25px] bg-white block lg:hidden"></span>
                        </button>
                    </div>
                </div>
            </nav>
            <div className="container max-w-[1140px] mx-auto px-[12px] " id='nav1'>
                <div className='flex items-center justify-center flex-col pt-[70px] md:pt-[140px] pb-[70px] md:pb-[218px]'>
                    <h1 class="text-white text-[50px] md:text-[72px] leading-[60px] max-md:text-center md:leading-[86px] max-w-[505px] font-Anton uppercase">Exclusive Games. Pasión por ganar</h1>
                    <p className="text-[#D4D6D9] font-medium text-[16px] leading-[25.6px] max-w-[727px] font-inter text-center pt-[16px] pb-[40px]">En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
                    <button className="py-[13px] duration-300 px-[46px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A] rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_1px_#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-bold font-['inter'] text-[16px] text-[#00141B] "> <span className='absolute -bottom-2 -left-2'>
                        <Greenline />
                    </span>Empezar</button>
                </div>
            </div>
        </section>
    )
}

export default Section_1