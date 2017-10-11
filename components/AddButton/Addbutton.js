import React from 'react';
import { StyleSheet, Text, View,StatusBar, TouchableHighlight} from 'react-native';


const styles = require('../../includes/style');
const constants = styles.constants;

export default class AddButton extends React.Component {
  render() {
    return (
      <View style={styles.action}>
<TouchableHighlight
  underlayColor='#24ce84'
  onPress={this.props.onPress}
  >
    <Text style={styles.actionText}>{this.props.title}</Text>

</TouchableHighlight>
      </View>

    );
  }

}
