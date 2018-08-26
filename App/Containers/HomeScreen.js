import React from 'react';
import { Text, View, AsyncStorage, Keyboard, TextInput, Button, TouchableHighlight } from 'react-native';
import styles from '.././Styles/ScreenStyle'
import { NavigationEvents } from "react-navigation";

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Title goes here',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerText,
    headerTintColor: '#fff',
  };

  state = {
    savedItems: [],
  }

  getItems = async () => {
    let savedItems = await AsyncStorage.getItem('savedItems');
    savedItems = JSON.parse(savedItems);
    this.setState({ savedItems });
  }

  goToNew = () => {
    this.props.navigation.navigate('New')
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={() => {
            this.getItems();
          }}
        />
        <View style={styles.list}>
          {this.state.savedItems && this.state.savedItems.map((item, i) => {
            return (
              <Text key={i} style={styles.text}>{item}</Text>
            )
          })}
        </View>
        <View style={styles.bottom}>
          <TouchableHighlight style={styles.button} onPress={this.goToNew}>
            <Text style={styles.buttonText}>add new Item +</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default HomeScreen