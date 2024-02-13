import React from 'react'
import pos_1 from '../assets/Webp/sec_9-img-1.webp'
import pos_2 from '../assets/Webp/sec_9-img-2.webp'
import { Greenline } from '../common/Icons'
const Section_9 = () => {
    return (
        <section className='bg-[#00141B]'>
            <div className='container max-w-[1140px] mx-auto px-[12px]'>
                <div className='py-[70px] md:py-[150px]'>
                    <div className='border-[0.5px] border-[#829195] hover:shadow-[1px_1px_11px_1px_#3D8656] hover:border-[#3D8656] duration-200 flex flex-col items-center justify-center rounded-[16px] max-md:px-[24px] pt-[104px] pb-[99px] relative'>
                        <h2 className='font-Anton text-[32px] leading-[41.6px] text-white pb-[40px] z-20 text-center'>Lanza tu propia plataforma en sólo 2 semanas</h2>
                        <div className='z-20'>
                            <button className="py-[13px] duration-300 px-[46px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A] rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_1px_#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-bold font-['inter'] text-[16px] text-[#00141B] "> <span className='absolute -bottom-2 -left-2'>
                                <Greenline />
                            </span>Leer más</button>
                        </div>
                        <div className='absolute top-0 left-0 lg:block hidden'>
                            <img src={pos_1} alt="ellipse-img" />
                        </div>
                        <div className='absolute top-0 right-0 lg:block hidden'>
                            <img src={pos_2} alt="ellipse-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section_9