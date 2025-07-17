import {Link} from "expo-router";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Appearance, useColorScheme } from 'react-native';
import useTheme from "@/hooks/useTheme";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    fontSize: 22
  }
})


export default function Index() {
  const {toggleDarkMode} = useTheme();
  return (
    <View style={styles.container} >
      <Text style={styles.content}>This is the app/index.tsx screen.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text> Toggle Dark Mode </Text>
      </TouchableOpacity>
    </View>
  );
}


function MyComponent() {
  let colorScheme = useColorScheme();

  if (colorScheme === 'dark') {
    // render some dark thing
  } else {
    // render some light thing
  }
}
