import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyCtI0SZLIqbiLG3axO912NIN0hKbSTcRtA",
            authDomain: "reactnativefirebasetutor-7f329.firebaseapp.com",
            databaseURL: "https://reactnativefirebasetutor-7f329.firebaseio.com",
            storageBucket: "reactnativefirebasetutor-7f329.appspot.com"
        });
    }

}

module.exports = Firebase;
