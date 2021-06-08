import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
 

import MemberDetail from './pages/member/MemberDetail';
import MemberUpdate from './pages/member/MemberUpdate';
import Member from './pages/member/Member';
import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MemberStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MemberScreen" component={Member} />
      <Stack.Screen name="MemberDetailScreen" component={MemberDetail} />
      <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate} />
    </Stack.Navigator>
  );
};


const ProfileStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ProfileScreen" component={Profile} />
        <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
      </Stack.Navigator>
    );
  };

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >  
{/* Tab.navigator içine initialRouteName="Member" eklediğimizde, uygulama açıldığında direk Member sayfası ekranda gözükür. */}
        <Tab.Screen name="Member" component={MemberStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
