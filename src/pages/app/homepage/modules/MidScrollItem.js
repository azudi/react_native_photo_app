//import liraries
import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated } from 'react-native';
import { IMAGE_BASE_URL } from '../../../../../config';

// create a component
const MidScrollItem = props => {
  const { midItem, item } = props;

  //ANiMATION

  const heightAnim = useRef(new Animated.Value(200)).current;

  Animated.timing(heightAnim, {
    toValue: midItem ? 300 : 200,
    duration: 200,
    useNativeDriver: false, // <-- neccessary
  }).start();

  return (
   <View style={styles.img_shadow}>
     <ImageBackground
      resizeMode="cover"
      style={[styles.main_container, styles.img_shadow]}
      source={
        { uri: IMAGE_BASE_URL+ item?.backdrop_path }  ||
        require('../../../../../assets/image/app/placeholder.png') 
        
        }
    >
      <Animated.View style={[styles.container, { height : heightAnim}]}>
        <Text style={styles.bottom_text}>{ item?.original_title || item?.original_name || "" }</Text>
      </Animated.View>
    </ImageBackground>
   </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  main_container: {
    marginHorizontal: 20,
    overflow: 'hidden',
    borderRadius: 20,
  },
  img_shadow: {
    shadowOffset: {width: 0, height: 12},
    shadowColor: 'black',
    shadowOpacity: 0.45,
    elevation: 20,
    zIndex: 999,
    shadowRadius: 10,
    marginVertical: 20,
    // background color must be set
    backgroundColor: 'transparent', // invisible color
  },
  container: {
    width: 250,
    marginHorizontal: 12,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  bottom_text: { color: 'white', padding: 10,  fontFamily: 'WorkSans-Regular' }
});

//make this component available to the app
export default MidScrollItem;
