import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, Button}  from 'react-native';

class Profile extends Component {
  upload = () => {

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SETUP YOUR PROFILE</Text>
        <Text style={styles.inputLabel}>Fullname</Text>
        <TextInput style={styles.input} onChangeText={(text) => this.setState({fullname: text})} />
        <Text style={styles.inputLabel}>Date of birth</Text>
        <TextInput style={styles.input} onChangeText={(text) => this.setState({date: text})}/>
        <Text style={styles.inputLabel}>Contact</Text>
        <TextInput style={styles.input} onChangeText={(text) => this.setState({contact: text})}/>
        <Text style={styles.inputLabel}>Location</Text>
        <TextInput style={styles.input} onChangeText={(text) => this.setState({location: text})}/>
        <Text style={styles.inputLabel}>Price</Text>
        <TextInput style={styles.input} onChangeText={(text) => this.setState({price: text})}/>
        <Text style={styles.inputLabel}>Schedule</Text>
        <TextInput style={styles.input} onChangeText={(text) => this.setState({schedule: text})}/>
        <Text style={styles.inputLabel}>Profile Image</Text>
        <Button title="Upload" onPress={this.upload} color="orange" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'orange',
    marginBottom: 40,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5,
    width: '80%',
    padding: 3,
    marginBottom: 5,
    height: 40
  },
  inputLabel: {
    marginBottom: 2,
    fontWeight: 'bold'
  }
});

export default Profile;