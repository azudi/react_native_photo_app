//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageIcon from '../../../../components/svgicons/ImageIcon';
import { theme } from '../../../../theme';
import LogOut from '../svgicons/LogOut';
import SidePhotoImage from '../svgicons/SidePhotoImage';
import SideNoteIcon from '../svgicons/SideNoteIcon';
import SideWriteIcon from '../svgicons/SideWriteIcon';
import SideHomeIcon from '../svgicons/SideHomeIcon';
import { routeNames } from '../../../../navigation/names';
import { useNavigation } from '@react-navigation/native';



// create a component
const DrawerContent = () => {
  const [isActiveTab, setIsActive] = useState(1);
  const navigation = useNavigation()
  const [sideItem, setSideItem] = useState([
    {
      name: 'Home',
      component: SideHomeIcon,
      route: routeNames.landing
    },
    {
      name: 'Photo',
      component: SidePhotoImage,
      route: routeNames.sections
    },
    {
      name: 'Note',
      component: SideNoteIcon,
      route: routeNames.sections
    },
    {
      name: 'Adjust Note',
      component: SideWriteIcon,
      route: routeNames.sections
    },
  ]);

  return (
    <View style={{ height: '100%' }}>
      <View style={{ flex: 11 }}>
        <ScrollView style={styles.container}>
          <View style={styles.side_image}>
            <Image
              style={{ width: 100, height: 100, borderRadius: 180 }}
              width={100}
              height={100}
              source={require('../../../../../assets/image/app/maskGroup.png')}
            />
          </View>

          <View style={{ marginVertical: 20 }}></View>

          {sideItem.map((item, index) => {
            let Component = item.component;
            return (
              <TouchableOpacity key={index} onPress={() => {
                setIsActive(index)
                navigation.navigate(item.route)
              }}>
                <View
                  key={index}
                  style={
                    isActiveTab == index
                      ? styles.active_side_item
                      : styles.side_item
                  }
                >
                  <Component
                    style={{ marginRight: 10 }}
                    color={isActiveTab == index ? 'white' : 'black'}
                  />
                  <Text
                    style={
                      isActiveTab == index
                        ? styles.active_side_text
                        : styles.side_text
                    }
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          padding: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text>Sign Out</Text>
        <LogOut />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  side_image: {
    width: 110,
    height: 110,
    borderRadius: 180,
    backgroundColor: theme.app_background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  side_item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 10,
    marginVertical: 7,
    shadowColor: "#939191",
  },
  active_side_text: {
    fontFamily: 'WorkSans-Medium',
    color: 'white',
    fontSize: 20,
  },
  active_side_item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.dark_background,
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginVertical: 7
  },
  side_text: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 20,
  },
});

//make this component available to the app
export default DrawerContent;
