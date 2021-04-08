import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "./pages/Dashboard";

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.background },
        }}
      >
        <Screen name="Dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
