import AppLoading from 'expo-app-loading';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';
import { Provider } from 'react-redux';
import { Routes } from './src/routes';
import { store } from './src/redux/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </NativeBaseProvider>
  );
}
