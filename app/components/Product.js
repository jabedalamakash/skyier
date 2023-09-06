import Image from 'next/image';
import React from 'react';

const Product = ({data,handleAdd}) => {
    return (
        <>
        <main className='border-2 rounded-md'>
        <Image
        src={data.img}
        height={400}
        width={400}
        alt={data.name}
        priority
        className='w-full p-5 rounded-md mb-5'/>

        <h1 className='text-xl px-5 mb-2'>{data.name}</h1>
        <h3 className=' text-2xl px-5  mb-8'>Price: ${data.price}</h3>
        <p className='text-xl px-5 mb-2'>Manufacturer: {data.seller}</p>
        <p className='text-xl px-5 mb-2'>Rating: {data.ratings} Star</p>
        <p className='text-xl px-5 mb-3'>Stock: {data.stock} items left</p>
        <button onClick={()=>handleAdd(data)} className='bg-[#FFE0B3] text-xl text-center p-5 w-full  mb-0  '>Add To Cart </button>




        </main>

            
        </>
    );
};

export default Product;