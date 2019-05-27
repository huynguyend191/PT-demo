import React, { Component } from 'react';
import {Text, View, StyleSheet, Image ,Button}  from 'react-native';

class Trainer extends Component {
  chat = () => {

  }
  manageSchedule = () => {

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.msgContainer}>
          <Image source={{uri: 'https://livbyaia.com/media/images/2017/11/pt-aia-9august-2017-ls-1-b23c07c79f8896e0e6518f1c928abedf.jpg'}} style={styles.profile} />
          <View style={styles.content}>
            <Text style={styles.name}>Maik Berger</Text>
            <View style={styles.button}> 
              <Button title="Chat" color="orange" onPress={this.chat} />
            </View>
            <View style={styles.button}> 
              <Button title="Manage Schedule" color="orange" onPress={this.manageSchedule} style={styles.button} />
            </View>
          </View>
        </View>
        <View style={styles.msgContainer}>
          <Image source={{uri: 'https://www.trainmag.com/wp-content/uploads/2017/10/Chris-powell-workout-hero.jpg'}} style={styles.profile} />
          <View style={styles.content}>
            <Text style={styles.name}>Chris Powell</Text>
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

export default Trainer;