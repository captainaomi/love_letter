import React from "react";  
import Peace from '../assets/Peace.JPG'

const Happy = () => {
    return (
        <div className='w-full bg-[#e0e8e2] py-6 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Peace} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#467750] font-bold md:mx-4'>YOU MAKE ME HAPPYYYYYY</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl text-[#8fbd98] font-bold py-2 md:mx-4'>Yep, even when you're infuriating, you're the best.</h1>
                    <p className='text-[#2a3f3f] md:mx-4'>
                        Bla bla bla, big love letter here. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit modi esse eum error unde facilis expedita cumque, optio, voluptate quibusdam dolores assumenda! Ipsa sequi commodi eaque porro! Est, aspernatur sapiente.
                    </p>
                    <button className='text-[#f0cd6e] w-[150px] rounded-md font-medium my-6 mx-auto md:mx-4 py-3 bg-[#2a3f3f]'>
                        #morecheese
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Happy