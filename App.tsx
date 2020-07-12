import React from "react";
import { StyleSheet, View } from "react-native";
import HomePage from "./features/home-page";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import SlidesPage from "./features/slides-page";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "", headerStyle: { backgroundColor: "#6ca6c1" } }}
        />
        <Stack.Screen name="Slides" component={SlidesPage} />
      </Stack.Navigator>
      <StatusBar translucent={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
  },
});
