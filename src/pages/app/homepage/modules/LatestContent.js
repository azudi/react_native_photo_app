//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IMAGE_BASE_URL } from '../../../../../config';
import { theme } from '../../../../theme';

// create a component
const LatestContent = (props) => {

     const { item } = props

     const truncateText = (val)=>{
        if(val.length > 120 ){
            return val.substring(0, 97) + "..."
        }
        return val
     }

    return (
        <View style={[styles.image_latest, styles.img_shadow]}>
        <Image
        resizeMode="cover"
        style={[styles.image]}
        source={
          { uri: IMAGE_BASE_URL+ item?.backdrop_path } ||
          require('../../../../../assets/image/app/placeholder.png')
       
          }
        />
        <View style={styles.latest_article}>
          <Text style={styles.latest_img_header}>{ item?.original_title || item?.original_name || "" }</Text>
          <Text style={styles.latest_img_text}>{ truncateText(item?.overview) || ""}</Text>
        </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    image_latest:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 7,
        width: '100%'
      },
      latest_article: {
        flex: 1
      },
      image: {
        width: 120,
        height: 130,
        borderRadius: 20,
        marginRight: 16
      },
      latest_img_header: {
        color: theme.primary_blue,
        fontSize: 20,
        width: '100%',
        fontFamily: 'WorkSans-SemiBold',
      },
      latest_img_text: {
        paddingVertical: 7,
        fontFamily: 'WorkSans-Regular',
        fontSize: 15,
        width: '100%'
      },
      img_shadow: {
        shadowOffset: {width: 0, height: 12},
        shadowColor: '#eee',
        shadowOpacity: 1,
        elevation: 20,
        zIndex: 999,
        shadowRadius: 10,
        padding: 10,
        borderRadius: 20,
        // background color must be set
        backgroundColor: theme.white, // invisible color
      }
});

//make this component available to the app
export default LatestContent;
