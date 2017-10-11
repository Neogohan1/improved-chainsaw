import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight,Modal, TextInput} from 'react-native';
import Toolbar from './components/Toolbar/Toolbar';
import CustomList from './components/customListView'
import AddButton from './components/AddButton/Addbutton';

import firebaseui from 'firebaseui';
import firebaseApp from './includes/firebase/firebase';
const styles = require('./includes/style');
//const firebaseApp = Firebase.initializeApp();

export default class App extends React.Component {

  constructor() {
    super();

  }

//New Branch for testing FirebaseUI Auth

  render() {
    return (


      <View style={styles.container}>
        <Toolbar title="Item List" />

      </View>

    );
  }

}
