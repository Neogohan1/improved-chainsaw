import React from 'react';
import { View} from 'react-native';
import Toolbar from './components/Toolbar/Toolbar';
import CustomList from './components/customListView'
import AddButton from './components/AddButton/Addbutton';
import {
  StackNavigator, TabNavigator
} from 'react-navigation';

import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/Profile';

import firebaseApp from './includes/firebase/firebase';
const styles = require('./includes/style');
//const firebaseApp = Firebase.initializeApp();

const MainScreenNavigator = TabNavigator({
  Tab1: { screen: HomeScreen },
  Tab2: { screen: ProfileScreen},
});

//test2
const App = StackNavigator({
  Home: { screen: MainScreenNavigator,
          navigationOptions: {
              title:'My Chats',
          },
        },
  Profile: { screen: ProfileScreen},
});


export default class MainApp extends React.Component {

  constructor() {
    super();

  }

//New Branch for testing FirebaseUI Auth

  render() {
    return (
<App screenProps={{tintColor: 'blue', name:"Neo"}} />

    );
  }

}
