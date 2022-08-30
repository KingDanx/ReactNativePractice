import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  const logCat = () => {
    console.log("cat");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableNativeFeedback onLongPress={() => console.log("doggie")}>
        <View
          style={{ backgroundColor: "blue", width: 200, height: 70 }}
        ></View>
      </TouchableNativeFeedback>
      <Image
        fadeDuration={3000}
        blurRadius={5}
        source={{
          height: 200,
          width: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      {/*view is like a div*/}
      <Button onPress={logCat} title="cat"></Button>
      <Text style={{ color: "black" }}>
        Open up App.js to start working on bour ass!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
