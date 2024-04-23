// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTHyhI-u9PyhsAp6SCWhuxyabHlPBdC-s",
  authDomain: "community-marketplace-ap-1c1bd.firebaseapp.com",
  projectId: "community-marketplace-ap-1c1bd",
  storageBucket: "community-marketplace-ap-1c1bd.appspot.com",
  messagingSenderId: "298693831953",
  appId: "1:298693831953:web:86b43623033f4aef3830b0",
  measurementId: "G-91XFQ7BRP3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);