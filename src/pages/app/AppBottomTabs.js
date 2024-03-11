//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { InitialRoute, TabRoutes } from './navigation/TabRoutes';
import Ionic from 'react-native-vector-icons/Ionicons';
import { theme } from '../../theme';
import HomeIcon from '../../components/svgicons/HomeIcon';
import ArticleIcon from '../../components/svgicons/ArticleIcon';
import MenuIcon from '../../components/svgicons/MenuIcon';
import PlusIcon from '../../components/svgicons/homepage/PlusIcon';
import CloseIcon from '../../components/svgicons/homepage/CloseIcon';
import { DrawerActions } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

// create a component
const BottomTabs = ({ navigation }) => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <Tab.Navigator
      initialRouteName={InitialRoute.homepage}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.primary_blue,
        tabBarInactiveTintColor: 'black',
        // tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 0 : 0,
          height: 60,
          backgroundColor: theme.white,
        },
        tabBarIcon: ({ focused, size, color, style }) => {
          let iconName;
          if (route.name == InitialRoute.homepage) {
            iconName = <HomeIcon width={focused ? size + 15 : size + 15} />;
          } else if (route.name == InitialRoute.foofstore) {
            iconName = 
           <Pressable onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}>
             <MenuIcon width={focused ? size + 15 : size + 15} />
             </Pressable>
            ;
          } else if (route.name == InitialRoute.addnote) {
            iconName = (
              <View style={[styles.mid_button, { transform: focused ? [{ rotateZ: '0deg' }] : [{ rotateZ: '45deg' }]}]}>
               <CloseIcon
                size={60}
                color={ focused ? 'white' : 'black'}
                background = { focused ? 'black' : theme.primary_blue}
               />
              </View>
            );
          }

          return iconName;
        },
      })}
    >
      {TabRoutes.map((item, index) => {
        const { component } = item;
        return (
          <Tab.Screen key={item.name} name={item.name} component={component} />
        );
      })}
    </Tab.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mid_button: {
    // backgroundColor: theme.primary_blue,
    width: 70,
    height: 70,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    top: -20,
    borderWidth: 6,
    borderColor: theme.white,
  },
});

//make this component available to the app
export default BottomTabs;
