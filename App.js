import React from 'react';
import { Text, View, AsyncStorage, Keyboard, TextInput, Button } from 'react-native';
import styles from './App/Styles/ScreenStyle'
import HomeScreen from './App/Containers/HomeScreen'
import NewItem from './App/Containers/NewItem'
import { createStackNavigator } from 'react-navigation'


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    New: NewItem,
  },
  {
    initialRouteName: 'Home',
  }
);

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <RootStack />
    )
  }
}

export default App