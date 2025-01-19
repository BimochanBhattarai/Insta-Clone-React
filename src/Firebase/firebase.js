import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSSvWHrBlrS9_FytnHcqf3FXLvE4IdwJw",
  authDomain: "insta-clone-react-9c02d.firebaseapp.com",
  projectId: "insta-clone-react-9c02d",
  storageBucket: "insta-clone-react-9c02d.firebasestorage.app",
  messagingSenderId: "907428333020",
  appId: "1:907428333020:web:a1dfc453a6906eddfefb19",
  measurementId: "G-4GSW1SB7NR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };