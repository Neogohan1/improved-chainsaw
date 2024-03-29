'use strict'
import {StatusBar,Platform} from 'react-native';
let React = require('react-native');
let {StyleSheet}=React;
const constants = {
  actionColor:'#3cb371'
}

let myStyles = StyleSheet.create({
  container:{
    backgroundColor: '#000000',
    flex:1
  },
  listview:{
    flex:1,
  },
  li:{
    backgroundColor:'#edd',
    borderBottomColor:'#eee',
    borderColor:'transparent',
    borderWidth:1,
    paddingLeft:16,
    paddingTop:14,
    paddingBottom:16,

  },
  liContainer:{
    flex:2

  },
  liText:{
    color:'#121',
    fontSize:15,
  },

statusBar:{
  height: Platform.OS === 'ios' ? 20:StatusBar.currentHeight,
  backgroundColor:'coral',
},

navbar: {
  alignItems:'center',
  backgroundColor:'#fff',
  borderBottomColor:'#eee',
  borderColor:'transparent',
  borderWidth:1,
  justifyContent:'center',
  height:44,
  flexDirection:'row'
},
navbarTitle:{
  color:'#444',
  fontSize:16,
  fontWeight:"500"
},
toolbar:{
  backgroundColor:'#fff',
  height:22,
},
center:{
  textAlign:'center',
},
actionText:{
  color:'#fff',
  fontSize:16,
  textAlign:'center',
},
action:{
  backgroundColor:constants.actionColor,
  borderColor:'transparent',
  borderWidth:1,
  paddingLeft:16,
  paddingTop: 14,
  paddingBottom:16,
},

});

module.exports = myStyles;
