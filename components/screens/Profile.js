import React from 'react';
import {View,Text,Button} from 'react-native';

export default class Profile extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.name + "'s Profile!",
    headerRight: <Button title="test" color={screenProps.tintColor} />,
    });
    //{
    //title:'Great',
    //headerRight:<View><Text>{params.name}</Text></View>
    //};

  render() {
    const {state} = this.props.navigation;

    return (
      <View>
        <Text>

        </Text>
      </View>
    );
  }
}
