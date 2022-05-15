import AppLoading from 'expo-app-loading';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Login } from './src/screens/Login';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={
      { flex: 1}
    }>
      <Login/>
      <StatusBar 
      style='light' 
      backgroundColor='transparent'
      translucent
      />
    </View>
  );
}
