import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDsPzc5ab2nTimYgB8g7qrasC4G2TCqPQ0",
  authDomain: "e-library-4dcf0.firebaseapp.com",
  projectId: "e-library-4dcf0",
  storageBucket: "e-library-4dcf0.appspot.com",
  messagingSenderId: "15065184051",
  appId: "1:15065184051:web:7ba9f6beee9c9438023046"
};
if( !firebase.apps.length ){
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
