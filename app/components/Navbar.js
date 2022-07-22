import React,{useState,useEffect} from 'react';
import firestore from '../firebase/firebase.js';
import {onSnapshot,collection} from 'firebase/firestore';
import Sidebarmenu from './Sidebarmenu.js';
import Icons from './icons.js';

const Navbar = () =>{
    const [authstate, setAuthState] = useState(true)
    const [sidebaractive, setSidebaractive] = useState(false);
    const [cartitems, setCartitems] = useState([]);

    const sidebarToggler = () =>{
        if(sidebaractive){
            setSidebaractive(false);
        }else{
            setSidebaractive(true);
        }
    };

    useEffect(() =>{
        const collectionRef = collection(firestore,'adminCart');
        onSnapshot(collectionRef,(snapshot) =>{
            setCartitems(snapshot.docs.map((doc) => doc.data()))
        })
    },[])

    return(
        <>
        <div className='navbarContainer'>
            <div className='navbarLogoContainer'>
                <h1 className='navbarLogo'>Wire Cart</h1>
            </div>
            <div className='navbarMenuContainer flex'>
                {
                    (authstate?
                        <Icons />
                    :
                        <button className='bg-violet-800 hover:bg-violet-900 text-white px-6 py-2'>Login</button>
                    )
                }
                <div className={(authstate?'sidebarTogglerIcon':'sidebarTogglerIconUnactive')} onClick={sidebarToggler}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="sidebarTogglerIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>
        </div>
        <div className={(sidebaractive?'sidebarActive':'sidebarunActive')}>
            <Sidebarmenu cartCount={cartitems.length}/>
        </div>
        </>
        
    )
}

export default Navbar;