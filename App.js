
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FullScreenVideoPreloader from './components/Preloader'; 
import Welcome from './components/Welcome'; 
import Login from './components/Login';
import Register from './components/Register';
import FarmerDashboard from './components/FarmerDashboard';
import Setting from './components/Setting';
import Profile from './components/Profile';
import Notifications from './components/Notification';
import Search from './components/Search';
import Post from './components/Post';
import ProductDetails from './components/ProductDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preloader" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Preloader" component={FullScreenVideoPreloader} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="FarmerDashboard" component={FarmerDashboard} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
