import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <>
        <section className='bg-[#F9F6E2]  w-full h-full p-10 sm:p-20 flex flex-col-reverse sm:flex-row items-center'>

            <div className='w-full sm:w-1/2 mx-auto my-10 '>
                <div className='sm:ml-40'>
                <h3 className='text-2xl text-center mt-10 sm:mt-0 font-medium mb-10 sm:mb-20'>--SALE FEVER--</h3>
                <h1 className='font-bold text-center text-3xl sm:text-5xl mb-10 '>Purchase TK 200 or <br/> above & get <span className='text-[#E527B2]'>20% off</span></h1>
                <p className='font-bold text-center text-xl  '>Use Promo Code &nbsp; &nbsp;<span className='bg-[#E527B2] px-5 py-5 rounded-md  text-white text-center'>  SELL200</span></p>

                </div>

            </div>
            <div className='object-right w-full sm:w-1/2 mx-auto sm:mr-40 '>
                <Image 
                src={'/images/summer.png'}
                width={500}
                height={500}
                alt="banner"
                className=' w-[100%] sm:w-auto '/>
            </div>

        </section>
            
        </>
    );
};

export default Banner;