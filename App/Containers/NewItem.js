import React from 'react';
import { Text, View, AsyncStorage, Keyboard, TextInput, Button, TouchableHighlight } from 'react-native';
import styles from '.././Styles/ScreenStyle'

class NewItem extends React.Component {

  static navigationOptions = {
    title: 'Add New Item',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerNewText,
    headerTintColor: '#fff'
  };

  state = {
    item: '',
  }

  saveItem = async () => {
    let { item } = this.state;
    let savedItems = await AsyncStorage.getItem('savedItems');
    savedItems = JSON.parse(savedItems);
    Keyboard.dismiss();
    if (item.length < 1) {
      alert("Empty Item");
      return;
    }
    savedItems.push(item);
    AsyncStorage.setItem('savedItems', JSON.stringify(savedItems))
    this.setState({ item: '' });
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="your text"
            style={styles.input}
            onChangeText={(item) => this.setState({ item })}
            underlineColorAndroid="white"
          />
        </View>
        <View style={styles.bottom}>
          <TouchableHighlight style={styles.button} onPress={this.saveItem}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default NewItem