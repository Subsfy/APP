import AppLoading from 'expo-app-loading';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';

import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
