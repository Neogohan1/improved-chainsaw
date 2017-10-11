import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

const styles = require('../../includes/style');

export default class Toolbar extends React.Component {
  render() {
    return (


      <View>
        <View style={styles.statusBar}>
          <StatusBar
          backgroundColor="coral"
          barStyle="light-content"
          />
        </View>
        <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>
      </View>

    );
  }

}
