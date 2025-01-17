import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSSvWHrBlrS9_FytnHcqf3FXLvE4IdwJw",
  authDomain: "insta-clone-react-9c02d.firebaseapp.com",
  projectId: "insta-clone-react-9c02d",
  storageBucket: "insta-clone-react-9c02d.firebasestorage.app",
  messagingSenderId: "907428333020",
  appId: "1:907428333020:web:a1dfc453a6906eddfefb19",
  measurementId: "G-4GSW1SB7NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);