import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <section className='bg-[#1C2B35]  p-10 flex flex-col sm:justify-between sm:flex-row'>
            <div className=''>
            <Link href="/"><Image
                src={'/images/Logo.svg'}
                height={100}
                width={100}
                alt="logo"
                className='mx-auto mb-10 sm:mb-0'/></Link>

            </div>
            <nav className='text-white text-center sm:text-left space-x-5'>
            <Link href="/">Order</Link>
            <Link href="/">Order Review</Link>
            <Link href="/">Manage Inventory</Link>
            <Link href="/">Log in</Link>


            </nav>

            
        </section>
    );
};

export default Header;