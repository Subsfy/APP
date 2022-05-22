import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

export function MockedNavigator({ component, params = {} }) {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="MockedScreen"
          component={ component }
          initialParams={ params }
        />
      </Navigator>
    </NavigationContainer>
  );
};
