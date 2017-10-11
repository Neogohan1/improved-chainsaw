import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight,Modal, TextInput} from 'react-native';
import Toolbar from './Toolbar/Toolbar';
import AddButton from './AddButton/Addbutton';
import firebaseApp from '../includes/firebase/firebase';
const styles = require('../includes/style');


export default class CustomList extends React.Component {
  addItem(){
    this.setModalVisible(true);
  }



  render() {
    return (


      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Toolbar title="Add Item" />
            <TextInput
              value={this.state.text}
              placeholder="Add Item"
              onChangeText={(value)=> this.setState({text:value})}
            />
            <TouchableHighlight onPress={() => {
              this.itemsRef.push({title:this.state.text})
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Save Item</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Cancel</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
        <AddButton onPress={this.addItem.bind(this)} title="Add Item" />
      </View>

    );
  }



  pressRow(item){
    this.itemsRef.child(item._key).remove();
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
  setModalVisible(visible){
    this.setState({modalVisible:visible});
  }

  constructor() {
    super();
    console.ignoredYellowBox = [
    'Setting a timer'
    ];
    let ds =  new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state={
      itemDataSource:ds,
      modalVisible:false,
      text:"",
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
}
