import React, { Component } from 'react';
import {Text, View, StyleSheet}  from 'react-native';

class Preference extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Setup Profile</Text>
        <Text>Training Schedule</Text>
        <Text>Manage Following/ Follower</Text>
        <Text>Subscribe to Gold member</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Preference;