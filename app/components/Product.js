import React from 'react';


const Product = (props) =>{
    return(
        <div className='productContainer'>
            <img src={props.data.imgUrl} className='w-full' />
            <div className='px-6 py-4'>
                <h1 className='font-bold text-xl mb-2 text-gray-700'>{props.data.name}</h1>
                <p className='text-gray-700 mb-2'>{props.data.caption}</p>
                <h1 className='font-bold text-xl text-gray-700'>${props.data.price}</h1>
            </div>
            <div className='buttonContainer px-6  flex justify-between'>
                <button className='bg-purple-800 rounded text-white px-4 py-2 hover:bg-purple-900'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>          
                    Add To Cart
                </button>
                <button className='bg-transparent border border-purple-800 rounded text-purple-800 px-4 py-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Add WishList
                </button>
            </div>
        </div>
    )
}

export default Product;