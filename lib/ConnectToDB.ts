// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_KEY,

//   authDomain: "language-tester-71415.firebaseapp.com",

//   databaseURL: "https://language-tester-71415-default-rtdb.firebaseio.com",

//   projectId: "language-tester-71415",

//   storageBucket: "language-tester-71415.appspot.com",

//   messagingSenderId: "795735601666",

//   appId: "1:795735601666:web:98c3f6742c85df5f806d1b",
// };

// const app = initializeApp(firebaseConfig);

// console.log("connected to db");

// export const db = getFirestore(app);

// import { collection, addDoc } from "firebase/firestore";

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815,
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,

  authDomain: "language-tester-71415.firebaseapp.com",

  databaseURL: "https://language-tester-71415-default-rtdb.firebaseio.com",

  projectId: "language-tester-71415",

  storageBucket: "language-tester-71415.appspot.com",

  messagingSenderId: "795735601666",

  appId: "1:795735601666:web:98c3f6742c85df5f806d1b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
