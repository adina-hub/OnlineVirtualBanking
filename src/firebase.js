import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyB6u327tpF3K0KJ4K4UmOOmOhe2I0q9JM4",
    authDomain: "online-virtual-banking.firebaseapp.com",
    databaseURL: "https://online-virtual-banking.firebaseio.com",
    projectId: "online-virtual-banking",
    storageBucket: "online-virtual-banking.appspot.com",
    messagingSenderId: "579063071636",
    appId: "1:579063071636:web:ea2e041bd8ab7f78530581"
})

export const auth = app.auth()

export default app