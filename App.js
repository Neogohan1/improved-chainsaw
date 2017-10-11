import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight} from 'react-native';
import Toolbar from './components/Toolbar/Toolbar';

const styles = require('./includes/style');

export default class App extends React.Component {
  render() {
    return (


      <View style={styles.container}>
        <Toolbar title="Main Toolbar" />
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
      </View>

    );
  }

  pressRow(item){
    console.log(item);
  }

  renderRow(item){
    return (
      <TouchableHighlight onPress={()=> {
        this.pressRow(item);
      }}>
        <View style={styles.li}>
          <Text style={styles.liText}>
            {item.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  constructor() {
    super();
    let ds =  new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state={
      itemDataSource:ds
    }
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);

  }

componentWillMount(){
  this.getItems();
}

componentDidMount(){
  this.getItems();
}

  getItems(){
    let items= [{title:"Item One"},{title:'Item Two'}];
    this.setState({
      itemDataSource: this.state.itemDataSource.cloneWithRows(items)
    });
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
