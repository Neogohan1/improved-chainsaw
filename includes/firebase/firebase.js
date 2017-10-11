import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCtI0SZLIqbiLG3axO912NIN0hKbSTcRtA",
  authDomain: "reactnativefirebasetutor-7f329.firebaseapp.com",
  databaseURL: "https://reactnativefirebasetutor-7f329.firebaseio.com",
  storageBucket: "reactnativefirebasetutor-7f329.appspot.com"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
