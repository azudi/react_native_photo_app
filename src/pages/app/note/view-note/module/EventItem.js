//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { IMAGE_BASE_URL } from '../../../../../../config';
import { theme } from '../../../../../theme';
import EventCheck from '../../svgicons/EventCheck';
import ViewMore from '../../svgicons/ViewMore';
import { useNavigation } from '@react-navigation/native';
import { routeNames } from '../../../../../navigation/names';

// create a component
const EventItem = (props) => {

     const { item, color, id, isColumn } = props
     const navigation = useNavigation()

     const truncateText = (val)=>{
        if(val?.length > 200 ){
            return val?.substring(0, 197) + "..."
        }
        return val
     }

    return (
        <View style={[styles.image_latest, styles.img_shadow]}>
          { isColumn ? <EventCheck style={{marginRight: 16}}/> : null }
        <View style={styles.latest_article}>
          <Text style={styles.latest_img_text}>{ truncateText(item?.content) }</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
          <View style={{backgroundColor: color()[1], padding: 4, paddingHorizontal: 8, borderRadius: 50}}>
             <Text style={[styles.title_, { color: color()[0]}]}>Marketing</Text>
            </View>
            <Pressable onPress={()=> navigation.navigate(routeNames.add, { id })}>
                <ViewMore style={{opacity: 0.65}}/>
            </Pressable>
          </View>
        </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    image_latest:{
        flexDirection: 'row',
        flexWrap: 'wrap',
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
        paddingVertical: 3,
        fontFamily: 'WorkSans-SemiBold',
        fontSize: 15,
        width: '100%',
        textTransform: 'capitalize'
      },
      img_shadow: {
        shadowOffset: {width: 0, height: 12},
        shadowColor: '#ccc',
        shadowOpacity: 1,
        elevation: 20,
        zIndex: 999,
        shadowRadius: 10,
        padding: 10,
        borderRadius: 20,
        // background color must be set
        backgroundColor: theme.white, // invisible color
      },
      title_: {
        textTransform: "uppercase",
        fontFamily: 'WorkSans-Medium',
      },
      data_: {
        paddingRight: 10,
      }
});

//make this component available to the app
export default EventItem;
