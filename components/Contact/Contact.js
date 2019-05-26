import { createMaterialTopTabNavigator } from 'react-navigation';
import Followers from './Followers';
import Gym from './Gym';


const Contact = createMaterialTopTabNavigator({
  Trainee: Followers,
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

export default Contact;