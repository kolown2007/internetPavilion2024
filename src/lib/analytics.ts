
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported} from "firebase/analytics";

const firebaseConfig = //replace firebase config here


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