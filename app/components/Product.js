import React,{useState,useEffect} from 'react';
import firestore from '../firebase/firebase.js';
import {collection,addDoc,query,where,getDocs} from 'firebase/firestore';

const Product = (props) =>{
    const [incart, setIncart] = useState(false);
    const [onload, setOnload] = useState(false);

    const checkCart = () =>{
        const q = query(collection(firestore,'adminCart'),where("id","==",props.data.id));
        getDocs(q).then((snapshot) =>{
            snapshot.forEach((doc)=>{
                setIncart(true);
            })
        })
    }

    useEffect(() =>{
        checkCart();
    },[])

    const addTocart = () =>{
        setOnload(true);
        addDoc(collection(firestore,'adminCart'),{
            id:props.data.id,
            name:props.data.name,
            price:props.data.price,
            imgUrl:props.data.imgUrl,
        }).then(() =>{
            checkCart();  
        }).then(() =>{
            setOnload(false);
        }).catch((err) =>{
            console.log(err)
        })
    }
    return(
        <div className='productContainer'>
            <img src={props.data.imgUrl} className='w-full' />
            <div className='px-6 py-4'>
                <h1 className='font-bold text-xl mb-2 text-gray-700'>{props.data.name}</h1>
                <p className='text-gray-700 mb-2'>{props.data.caption}</p>
                <h1 className='font-bold text-xl text-gray-700'>${props.data.price}</h1>
            </div>
            {
                (incart?
                    <div className='bg-green-600 mx-6 text-center py-4 px-2 text-white rounded inline-flex w-5/6 justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <h1 className=''>Added To Cart</h1>
                    </div>
                    :
                    <div className='buttonContainer px-6  flex justify-between'>
                    <button onClick={addTocart} className='bg-purple-800 rounded text-white px-4 py-2 hover:bg-purple-900'>
                        {
                            (onload?
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline items-center mr-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            )
                        }          
                        Add To Cart
                    </button>
                    <button className='bg-transparent border border-purple-800 rounded text-purple-800 px-4 py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        Add WishList
                    </button>
                </div>
                )
            }
           
        </div>
    )
}

export default Product;