import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { Provider } from "react-redux";
import { Routes } from "./src/routes";
import { store } from "./src/redux/store";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();

      await Font.loadAsync({
        Inter_500Medium,
      });

      setAppIsReady(true);
    })();
  }, []);

  useLayoutEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </NativeBaseProvider>
  );
}
