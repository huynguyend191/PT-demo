import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, {Component} from 'react';
import Trainers from '../Trainers/Trainers';
import GymCenters from '../GymCenters/GymCenters';
import Following from '../Following/Following';
import Preference from '../Preference/TraineePreference';

const TraineeNavigation = createAppContainer(createBottomTabNavigator({
  "Trainers": Trainers,
  "Gym Centers": GymCenters,
  "Following": Following,
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
      } else if (routeName === 'Following') {
        iconName = 'account-group'
      }
      else if (routeName === 'Preference') {
        iconName = 'settings'
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

export default TraineeNavigation;

