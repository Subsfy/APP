import AppLoading from 'expo-app-loading';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackNavigatorDTO } from './src/models/StackNavigatorDTO';
import { Login } from './src/screens/Login';
import { Home } from './src/screens/Home';

const Stack = createNativeStackNavigator<StackNavigatorDTO>();

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={ { headerShown: false } }/>
          <Stack.Screen name="Home" component={Home} options={ { headerShown: false } }/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
