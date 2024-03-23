import {createBottomTabNavigator} from 'react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab=createBottomTabNavigator();

const BottomTab=()=>{
 return(
  <Tab.Navigator 
   screenOptions={({route})=>({
      tabBarIcon: ({ focused, color, size }) => {
       let iconName;
       if(route.name=="feed"){
         iconName=focused? 'book' : 'book-outline';
       }
       else if(route.name=="createpost")
       {
        iconName=focused? 'create' : 'create-outline';
       }
       return(
         <Ionicons name={iconName} size={size} color={color}/>
       )
      },
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
  })}
  >
  <Tab.Screen name="feed" component={Feed}/>
   <Tab.Screen name="createpost" component={CreatePost}/>
  </Tab.Navigator>
 )
}

export default BottomTab;