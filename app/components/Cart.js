import React from 'react';

const Cart = ({cart}) => {

    console.log(cart);

    const totalPrice=cart.reduce((oldTotal, prd)=> oldTotal + prd.price,0);

    let shipping= 0;
    if(totalPrice>35){
        shipping=20;
    }
    else if(totalPrice<35 && totalPrice!=0){
        shipping=50;
    }

     const vat=Math.round(totalPrice/15);
     const grandTotal=totalPrice+shipping+vat;
 


    return (
        <>
                <h1 className='text-2xl text-center font-bold mb-10'>Order Summary</h1>
                <h4  className='mb-5 text-xl'>Selected Item: {cart.length}</h4>
                <h4 className='mb-5 text-xl'>Total Price: ${totalPrice}</h4>
                <h4 className='mb-5 text-xl'>Total Shipping Charge: ${shipping}</h4>
                <h4 className='mb-5 text-xl'>VAT: ${vat}</h4>
                <h4 className='text-2xl font-bold mb-10'>Grand Total: ${grandTotal}</h4>


                <div>
                <button className='bg-[#FF3030] px-10 py-4 w-full rounded-md text-white mb-5'>Clear Cart</button>
                </div>
                <div>
                <button className='bg-[#FF9900] px-10 py-4 w-full rounded-md text-white mb-10'>Review Order</button>
                    
                </div>
            
        </>
    );
}

export default Cart;