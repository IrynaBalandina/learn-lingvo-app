import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyChdspvbPNDn11Dhxc0zquHBMziPph0qLc",
  authDomain: "iryna-52810.firebaseapp.com",
  databaseURL: "https://iryna-52810-default-rtdb.firebaseio.com",
  projectId: "iryna-52810",
  storageBucket: "iryna-52810.appspot.com",
  messagingSenderId: "506370688492",
  appId: "1:506370688492:web:f8e820da20e90edd076cc9",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };