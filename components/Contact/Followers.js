import React, { Component } from 'react';
import {Text, View, StyleSheet, Image ,Button}  from 'react-native';

class Followers extends Component {
  chat = () => {

  }
  manageSchedule = () => {

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.msgContainer}>
          <Image source={{uri: 'https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png'}} style={styles.profile} />
          <View style={styles.content}>
            <Text style={styles.name}>Văn Đức Hưng</Text>
            <View style={styles.button}> 
              <Button title="Chat" color="orange" onPress={this.chat} />
            </View>
            <View style={styles.button}> 
              <Button title="View Schedule" color="orange" onPress={this.manageSchedule} style={styles.button} />
            </View>
          </View>
        </View>
        <View style={styles.msgContainer}>
          <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7FFrxhGko3hUyRhuXBo8cpFfx_cdN5z6syFiBHJBJNUyl2SFf'}} style={styles.profile} />
          <View style={styles.content}>
            <Text style={styles.name}>Đặng Đình Lâm</Text>
            <View style={styles.button}> 
              <Button title="Chat" color="orange" onPress={this.chat} />
            </View>
            <View style={styles.button}> 
              <Button title="View Schedule" color="orange" onPress={this.manageSchedule} style={styles.button} />
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

export default Followers;