import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (


      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>

        <Text>Shake your phone to open the developer menu.</Text>
      </View>

    );
  }

    async signup(email, pass) {

      try {
          await firebase.auth()
              .createUserWithEmailAndPassword(email, pass);

          console.log("Account created");

          // Navigate to the Home page, the user is auto logged in

      } catch (error) {
          console.log(error.toString())
      }

  }

    async login(email, pass) {

      try {
          await firebase.auth()
              .signInWithEmailAndPassword(email, pass);

          console.log("Logged In!");

          // Navigate to the Home page

      } catch (error) {
          console.log(error.toString())
      }

  }

    async logout() {

      try {

          await firebase.auth().signOut();

          // Navigate to login view

      } catch (error) {
          console.log(error);
      }

  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
