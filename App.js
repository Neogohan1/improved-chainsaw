import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight} from 'react-native';
import Toolbar from './components/Toolbar/Toolbar';


import firebaseApp from './includes/firebase/firebase';
const styles = require('./includes/style');
//const firebaseApp = Firebase.initializeApp();

export default class App extends React.Component {
  render() {
    return (


      <View style={styles.container}>
        <Toolbar title="Item List" />
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
    this.itemsRef=this.getRef().child('items');
  }

  getRef(){
    return firebaseApp.database().ref();
  }

componentWillMount(){
  this.getItems(this.itemsRef);
}

componentDidMount(){
  this.getItems(this.itemsRef);
}

  getItems(itemsRef){
    //let items= [{title:"Item One"},{title:'Item Two'}];
    itemsRef.on('value',(snap)=>{
      let items=[];
      snap.forEach((child)=>{
        items.push({
          title:child.val().title,
          _key:child.key
        });
      });
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      });
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
