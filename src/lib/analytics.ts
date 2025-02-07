
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA2C_vydKpQHblBYScrUtUPSF7VrR-O4e4",
  authDomain: "internetpavilion2024.firebaseapp.com",
  projectId: "internetpavilion2024",
  storageBucket: "internetpavilion2024.appspot.com",
  messagingSenderId: "205468613342",
  appId: "1:205468613342:web:aec9cbf39a185f392e604f",
  measurementId: "G-7MTEVLDSWY"
};


const app = initializeApp(firebaseConfig);


// Create a promise that resolves with the analytics instance
const analyticsPromise = isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
    return analytics; // Resolve the promise with the analytics instance
  } else {
    console.warn("Firebase Analytics is not supported in this environment.");
    return null; // Resolve the promise with null if not supported
  }
});

export { analyticsPromise };