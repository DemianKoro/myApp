import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,

  // apiKey: "AIzaSyB1rouZkcmYesR11pZ8clbmhiOlu_yK2io",
  // authDomain: "kalanchoe-36e0f.firebaseapp.com",
  // projectId: "kalanchoe-36e0f",
  // storageBucket: "kalanchoe-36e0f.appspot.com",
  // messagingSenderId: "25130042408",
  // appId: "1:25130042408:web:17e62c097508a83fa3e11d"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
