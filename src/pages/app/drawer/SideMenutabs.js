//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerRoutes } from './navigation/DrawerRoutes';
import { theme } from '../../../theme';
import Menu from '../../../components/svgicons/drawer/Menu';
import { useNavigation } from '@react-navigation/native';
import DrawerContent from './module/DrawerContent';
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

// create a component
const AppDrawerTabs = () => {
  const navigation = useNavigation();

  return (
   <>
    <Drawer.Navigator
      drawerContent={() => (
        <View style={{ height: '100%' }}>
          <DrawerContent />
        </View>
      )}
      screenOptions={() => ({
        headerShown: false,
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: 'WorkSans-Medium',
          textTransform: 'capitalize',
          color: 'transparent',
        },
        tabBarActiveTintColor: theme.white,
        tabBarInactiveTintColor: 'black',
        // tabBarShowLabel: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer())
            }}
          >
            <Menu style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        ),
      })}
      initialRouteName="Home"
    >
      {DrawerRoutes.map((item, index) => {
        const page = item.component;
        return <Drawer.Screen key={index} name={item.name} component={page} />;
      })}
    </Drawer.Navigator>
   </>
  );
};

//make this component available to the app
export default AppDrawerTabs;

// define your styles
const styles = StyleSheet.create({
  container: {},
});
