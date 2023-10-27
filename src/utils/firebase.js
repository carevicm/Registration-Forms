import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeuCeOSK0b9b57JSIyx2GqKEX9D_c66DU",
  authDomain: "registration-forms-861cb.firebaseapp.com",
  projectId: "registration-forms-861cb",
  storageBucket: "registration-forms-861cb.appspot.com",
  messagingSenderId: "846724027718",
  appId: "1:846724027718:web:95a9a3ebcefd36216a0147",
  measurementId: "G-EZ29ZVK2CL",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
