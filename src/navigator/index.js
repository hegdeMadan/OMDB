import * as React from 'react';
import 'react-native-gesture-handler';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { moderateScale } from 'react-native-size-matters';
import { screens } from './constants';
import { HomeIcon, ProfileIcon } from './tabBarIcons';
import Profile from '../profile/profile';
import Home from '../dashbooard/home';
import MovieDetails from '../dashbooard/movieDetails';
import { colors, spaces } from '../theme'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileAndSignin = () => (
  <Stack.Navigator initialRouteName={screens.profile} headerMode='none'>
    <Stack.Screen name={screens.profile} component={Profile} />
  </Stack.Navigator>
)

const TabBar = () => (
  <Tab.Navigator
    initialRouteName={screens.home}
    tabBarOptions={{
      showLabel: false,
      style: {
        height: moderateScale(spaces.height.tabBar)
      }
    }}
  >
    <Tab.Screen
      name={screens.home}
      component={Home}
      options={{
        tabBarIcon: HomeIcon,
      }}
    />
    <Tab.Screen
      name={screens.profile}
      component={ProfileAndSignin}
      options={{
        tabBarIcon: ProfileIcon,
      }}
    />
  </Tab.Navigator>
);

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.backgroundColor} barStyle='dark-content' />
      <Stack.Navigator
        initialRouteName={screens.dashboard}
        // headerMode='none'
      >
        <Stack.Screen options={{ header: () => <View /> }} name={screens.dashboard} component={TabBar} />
        <Stack.Screen options={{ title: "Movie Details" }} name={screens.movieDetails} component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
