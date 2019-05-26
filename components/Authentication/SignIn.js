import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Picker, Button } from 'react-native';


class SignIn extends Component {
  state = {
    email: null,
    password: null,
    role: 'trainee',
  }
  onSignIn = () => {
    this.props.setUser(this.state.role);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://www.ansell.co.uk/images/personal--business-insurance/gym--fitness-centre-insurance/gym--fitness-centre-insurance-900x500.jpg'}} style={styles.thumbnail} />
        <Text style={styles.title}>PERSONAL TRAINER</Text>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput style={styles.input} value={this.state.email} onChangeText={(text) => this.setState({email: text})} />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput style={styles.input} value={this.state.password}  onChangeText={(text) => this.setState({password: text})}/>
        <Text style={styles.inputLabel}>Role</Text>
        <View style={styles.rolePicker}>
          <Picker
            selectedValue={this.state.role}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({role: itemValue})
            }>
            <Picker.Item label="Trainee" value="trainee" />
            <Picker.Item label="Trainer" value="trainer" />
            <Picker.Item label="Gym center" value="gymcenter" />
          </Picker>
        </View>
        <Button title="Join Now" color="orange" onPress={this.onSignIn}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
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
  thumbnail: {
    height: 180,
    width: 300
  }, 
  rolePicker: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5,
    width: '80%',
    padding: 3,
    marginBottom: 15,
    height: 40,
    justifyContent: 'center', 
  },
  inputLabel: {
    marginBottom: 2,
    fontWeight: 'bold'
  }
});

export default SignIn;