import React, { Component } from 'react';
import {Text, View, StyleSheet, Image ,Button}  from 'react-native';

class Gym extends Component {
  chat = () => {

  }
  manageSchedule = () => {

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.msgContainer}>
          <Image source={require('../GymCenters/FitnessWorld/1.jpg')} style={styles.profile} />
          <View style={styles.content}>
            <Text style={styles.name}>FITNESSWORLD</Text>
            <View style={styles.button}> 
              <Button title="Chat" color="orange" onPress={this.chat} />
            </View>
            <View style={styles.button}> 
              <Button title="Manage Schedule" color="orange" onPress={this.manageSchedule} style={styles.button} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  msgContainer: {
    width: '100%',
    height: 130,
    borderColor: 'orange',
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  profile: {
    width: 90,
    height: 90,
    marginRight: 10
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  content: {
    width: '68%'
  },
  button: {
    marginTop: 5
  }
})

export default Gym;