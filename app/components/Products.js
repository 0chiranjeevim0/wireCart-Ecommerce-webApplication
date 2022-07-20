import React,{useState,useEffect} from 'react';
import Product from './Product.js'
import firestore from '../firebase/firebase.js';
import {collection,onSnapshot} from 'firebase/firestore';

const Products = () =>{
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const collectionRef = collection(firestore,"electronics");
        onSnapshot(collectionRef,(snapshot) =>{
           setProducts(snapshot.docs.map((doc) => doc.data()))
        })
    },[])

    return(
        <div className='productsContainer'>
            {
                products.map((product) =>(
                    <Product data={product}/>
                ))
            }
        </div>
    )
}

export default Products;