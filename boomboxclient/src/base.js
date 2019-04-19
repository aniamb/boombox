import firebase from 'firebase/app'
import 'firebase/database'
//import Rebase from 're-base'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyD2-jP3vyKiZDGWu3IsiKTaagdx0R5wjDo",
    authDomain: "boombox-1c217.firebaseapp.com",
    databaseURL: "https://boombox-1c217.firebaseio.com",
    projectId: "boombox-1c217",
    storageBucket: "",
    messagingSenderId: "129261596427"
  };
//   const app =
firebase.initializeApp(config);
  export default firebase
  //export default Rebase.createClass(app.database())
