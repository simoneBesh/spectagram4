import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CreatePost from '../screens/CreatePost';
import SinglePostScreen from '../screens/SinglePostScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator =()=> {
  return(
    <Stack.Navigator 
    initialRouteName = "Home"
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Home" component={TabNavigator}/>
      <Stack.Screen name="SinglePostScreen" component={SinglePostScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator;