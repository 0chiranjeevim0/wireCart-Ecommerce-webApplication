import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


const firebase = initializeApp({
    apiKey: "AIzaSyBfskikM9OOYhm7_N8gM8Flzjok-WwLAlU",
    authDomain: "wirecart-5b00d.firebaseapp.com",
    projectId: "wirecart-5b00d",
    storageBucket: "wirecart-5b00d.appspot.com",
    messagingSenderId: "203299973096",
    appId: "1:203299973096:web:010f32a25f0bcb521ba65d"
})

const firestore = getFirestore(firebase);

export default firestore;
