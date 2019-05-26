import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import TraineeNavigation from './components/Navigations/TraineeNavigation';
import SignIn from './components/Authentication/SignIn';
import TrainerNavigation from './components/Navigations/TrainerNavigation';
console.disableYellowBox = true;

export default class App extends React.Component {

  state = {
    user: null
  }

  setUser = (role) => {
    this.setState({user: role})
  }

  render() {
    let display = (
      <SignIn setUser={this.setUser} />
    );
    if (this.state.user) {
      const user =  this.state.user;
      if (user === 'trainee') {
        display = <TraineeNavigation />
      } else if (user === 'trainer') {
        display = <TrainerNavigation />
      }
    }
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {display}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
