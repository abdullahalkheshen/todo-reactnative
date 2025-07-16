import {Link} from "expo-router";
import {StyleSheet, Text, View } from "react-native";

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
  return (
    <View style={styles.container} >
      <Text style={styles.content}>This is the app/index.tsx screen.</Text>
      <Text>Text</Text>
    </View>
  );
}

