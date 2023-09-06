'use client'


import React, { useEffect, useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const Products = () => {
    const [data,setData] = useState([]);
    const [cart,setCart] = useState([]);
    const[value,setValue] = useState(9);
    const[hide,setHide] = useState(false);
    const[loading,setLoading] = useState(true);



    const handleValue=()=>{

        setValue(value+9);

        if(value>data.length) {
            setHide(false);
        }
        else if(value ==data.length) {
            setHide(true);

        }


    }


    const handleAdd=(product)=>{

        console.log('Product Added: ', product)
        const newCart =[...cart,product];
        setCart(newCart);
    }

    const productsData=async()=>{
        try{
            const result= await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
            const response= await result.json();
            setData(response);
            setLoading(false);

        }
        catch(err){
            <h1>No Data Found</h1>
            console.log(err);
        }

    }
    useEffect(()=>{
        productsData();
    },[])

    // console.log(data);
    return (
        <>
        <section className='w-full flex sm:w-[90%] flex-col-reverse justify-center sm:justify-start items-center sm:items-start sm:flex-row sm:space-x-32 mx-auto px-5 sm:px-0'>

            <div className='w-full sm:w-[75%] mt-20 sm:mt-0 mx-auto'>
            {loading? <h1 className='text-5xl text-center font-bold'>Loading...</h1>
            :<main className='grid grid-cols-1 sm:grid-cols-2  gap-10 lg:grid-cols-3'>
            {data && data.slice(0,value).map((pd)=>{
                return <Product key={pd.id} handleAdd={handleAdd} data={pd}/>
            })}

            </main>}



            <div className='text-center'>
            {data.length>1 && !hide?<button onClick={handleValue} className='mt-20 bg-[#FF9900] p-5 w-1/3 font-bold rounded-md mx-auto text-white text-xl text-center'>See More</button>:null}


            </div>
 



            </div>

            {data.length>1 && <div className='w-full mx-auto sm:w-[25%] p-10 sm:h-screen rounded-md bg-[#FFE0B3]'>
              <Cart cart={cart}/>
            </div> }



      






        </section>
            
        </>
    );
};

export default Products;