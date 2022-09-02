import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  NativeModules,
} from "react-native";

const App = () => {
  const sumOfValue = () => {
    NativeModules.Sum.sumOfValue((sum) => {
      if (sum) {
        alert(sum);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.sectionTitle}>Native Communication</Text>
        <Text style={styles.sectionTitle}>
          (Native Bridging - Android and iOS)
        </Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={sumOfValue} style={styles.button}>
          <Text style={styles.buttonText}>Get Sum</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingView: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  button: {
    width: "30%",
    height: "20%",
    backgroundColor: "pink",
    borderWidth: 2,
    borderColor: "brown",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
