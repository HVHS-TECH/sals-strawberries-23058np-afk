  const firebaseConfig = {
  apiKey: "AIzaSyA-MkqS7-Mr2EvNSt1OwDG_dqueWXA0omI",
  authDomain: "nicholas-phang-12comp.firebaseapp.com",
  databaseURL: "https://nicholas-phang-12comp-default-rtdb.firebaseio.com",
  projectId: "nicholas-phang-12comp",
  storageBucket: "nicholas-phang-12comp.firebasestorage.app",
  messagingSenderId: "489064754346",
  appId: "1:489064754346:web:a7c74234a252962ef434d3"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);