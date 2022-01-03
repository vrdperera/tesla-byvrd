import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyASm-nbsDmKfMfi2bM0pnARTQfRBaIWWl4',
  authDomain: 'tesla-byvrd.firebaseapp.com',
  projectId: 'tesla-byvrd',
  storageBucket: 'tesla-byvrd.appspot.com',
  messagingSenderId: '689136609937',
  appId: '1:689136609937:web:35463101c2e52ed5126d30',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
