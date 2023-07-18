import React from "react";
import { LogBox } from "react-native";
import QuesSection from "./screens/QuesSection";
import ChapterScreen from "./screens/ChapterScreen";
import ScoreCardScreen from "./screens/ScoreCardScreen";
import DescriptionScreen from "./screens/DescriptionScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChapterScreen" component={ChapterScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="DescriptionScreen" component={DescriptionScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="QuesSection" component={QuesSection} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="ScoreCardScreen" component={ScoreCardScreen} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

