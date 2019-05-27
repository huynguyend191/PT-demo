import React, { Component } from 'react';
import {Text, View, StyleSheet, Image}  from 'react-native';

class TraineePreference extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={require('../../assets/addphoto.png')} style={styles.img} />
          <View>
            <Text style={styles.text}>Setup basic info</Text>
          </View>
        </View>
        <Text style={styles.text}>Manage Following</Text>
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
    padding: 10
  },
  content: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderColor: 'orange',
    borderRadius: 10,
    borderWidth: 2
  },
  img: {
    width: 90,
    height: 90,
    marginRight: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center'
  }
})

export default TraineePreference;