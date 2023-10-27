
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBdVNoRzjLTGLVd5V_FAstDal0dNteV6Ao",
  authDomain: "registration-forms-d9d10.firebaseapp.com",
  projectId: "registration-forms-d9d10",
  storageBucket: "registration-forms-d9d10.appspot.com",
  messagingSenderId: "632876373043",
  appId: "1:632876373043:web:62cd27b0727112c82bbf46",
  measurementId: "G-3P8BQ2BTGZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
