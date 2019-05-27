import React, { Component } from 'react';
import {Text, View, StyleSheet}  from 'react-native';

class TrainerPreference extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Manage Following/ Follower</Text>
        <Text style={styles.text}>Subscribe to membership</Text>
        <Text style={styles.text}>Notification setting</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center'
  }
})

export default TrainerPreference;