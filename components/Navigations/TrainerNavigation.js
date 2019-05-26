import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, {Component} from 'react';
import Profile from '../TrainerProfile/Profile';
import GymCenters from '../GymCenters/GymCenters';
import Preference from '../Preference/Preference';
import Contact from '../Contact/Contact';

export const TrainerNavigation = createAppContainer(createBottomTabNavigator({
  "Profile": Profile,
  "Gym Centers": GymCenters,
  "Contact": Contact,
  "Preference": Preference
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = MaterialCommunityIcons;
      let iconName;
      if (routeName === 'Profile') {
        iconName = `account`;
      } else if (routeName === 'Gym Centers') {
        iconName = `map-marker-radius`;
      } else if (routeName === 'Contact') {
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


export default TrainerNavigation;