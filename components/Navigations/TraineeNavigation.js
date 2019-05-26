import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, {Component} from 'react';
import Trainers from '../Trainers/Trainers';
import GymCenters from '../GymCenters/GymCenters';
import Chat from '../Chat/Chat';
import Preference from '../Preference/Preference';

const TraineeNavigationTabs = createAppContainer(createBottomTabNavigator({
  "Trainers": Trainers,
  "Gym Centers": GymCenters,
  "Chat": Chat,
  "Preference": Preference
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = MaterialCommunityIcons;
      let iconName;
      if (routeName === 'Trainers') {
        iconName = `dumbbell`;
      } else if (routeName === 'Gym Centers') {
        iconName = `map-marker-radius`;
      } else if (routeName === 'Chat') {
        iconName = 'message'
      }
      else if (routeName === 'Preference') {
        iconName = 'account-settings'
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'orange',
    inactiveTintColor: 'gray',
  },
}
));

class TraineeNavigation extends Component {
  render() {
    return (
      <TraineeNavigationTabs />
    );
  }
}

export default TraineeNavigation;