import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
        const [nav, setNav] = useState(false)

        const handleNav = () => {
            setNav(!nav);
        }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#e0e8e2]'>
            <h1 className='w-full text-3xl font-bold text-[#f0cd6e]'>N + P</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Memories</li>
                <li className='p-4'>Dreams</li>
                <li className='p-4'>Origin</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 text-[#e0e8e2] bg-[#2a3f3f] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#f0cd6e] m-4'>N + P</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Memories</li>
                    <li className='p-4 border-b border-gray-600'>Dreams</li>
                    <li className='p-4 border-b border-gray-600'>Origin</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar