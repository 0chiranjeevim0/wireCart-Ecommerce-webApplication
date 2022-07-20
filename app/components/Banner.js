import React from 'react';

const Banner = () =>{
    return(
        <div className='flex px-6'>
            <div className='w-full d:w-2/4'>
                <div className='bannerTextContainer'>
                    <h1 className='bannerText'>Get Upto 30% Off</h1>
                    <span className='text-purple-800 span'>New Arrivals</span>
                    <button className='px-8 mb-4 py-4 mt-6 hover:bg-purple-900 bg-purple-800 text-white self-start'>Shop now</button>
                </div>   
            </div>
            <div className='md:w-3/4 hidden md:inline-block'>
                <img className="bannerImg" src='./images/bannerImg.jpg' alt='banner image' />
            </div>
        </div>
    )
}

export default Banner;