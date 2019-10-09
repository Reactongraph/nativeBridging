import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  NativeModules,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  sumOfValue = () => {
    NativeModules.Sum.sumOfValue((error, sum) => {
        if(sum){
            alert(sum);
        }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headingView}>
          <Text style={styles.sectionTitle}>Native Communication</Text>
          <Text style={styles.sectionTitle}>
            (Native Bridging - Android and iOS)
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={this.sumOfValue} style={styles.button}>
            <Text style={styles.buttonText}>Get Sum</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingView: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    width: '30%',
    height: '20%',
    backgroundColor: 'pink',
    borderWidth: 2,
    borderColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
