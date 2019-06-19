import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import LoginScreen from './android/pages/Login.js';
import HomeScreen from './android/pages/Home.js';
import DetailsScreen from './android/pages/detial.js';



const RootStack = createStackNavigator(

  {
    Login: LoginScreen,
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
