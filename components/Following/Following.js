import { createMaterialTopTabNavigator } from 'react-navigation';
import Trainer from './Trainer';
import Gym from './Gym';

const Following = createMaterialTopTabNavigator({
  Trainer: Trainer,
  Gym: Gym,
},
{ 
  tabBarOptions: {
    style: {
      backgroundColor: 'orange',
      height: 40
    },
    indicatorStyle: {
      borderBottomColor: 'white',
      borderBottomWidth: 2,
    },
}}
);

export default Following;