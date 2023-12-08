import React from 'react';
import Typed from 'react-typed';


const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='md:text-2xl text-xl text-[#8fbd98] font-bold p-2'>
                    I NEVER IMAGINED OUR FRIENDSHIP TURNING INTO THIS
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-5xl text-[#e0e8e2] font-bold md:py-6'>
                    but I'm so glad it did.
                </h1>
                <div className='flex justify-center items-center '>
                    <p className='md:text-5xl sm:text-4xl text-3xl text-[#e0e8e2] font-bold py-4'>
                        To me, you are
                    </p>
                    <Typed 
                    className='md:text-5xl sm:text-4xl text-3xl text-[#e0e8e2] font-bold md:pl-4 pl-2'
                        strings={['handsome.', 'adventurous.', 'silly.', 'adoring.', 'wise.', 'annoying.', 'sexy.', 'challenging.', 'safe.']} 
                        typeSpeed={130} 
                        backSpeed={140} 
                        loop 
                    />
                </div>
                <p className='md:text-2xl text-xl text-[#8fbd98] font-bold py-4'>
                    SO BASICALLY, YOU'RE EVERYTHING TO ME.
                </p>
                <button className='bg-[#f0cd6e] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-[#2a3f3f]'>
                    #morecheese
                </button>
            </div>
        </div>

    )
}

export default Hero

