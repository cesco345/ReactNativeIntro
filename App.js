import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return <ViewImageScreen />;
}
