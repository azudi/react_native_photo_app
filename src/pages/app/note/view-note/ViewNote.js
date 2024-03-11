//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ArrowRight from '../../../../components/svgicons/ArrowRight';
import GridIcon from '../../../../components/svgicons/homepage/GridIcon';
import TableIcon from '../../../../components/svgicons/homepage/TableIcon';
import { theme } from '../../../../theme';
import { getRandomColor } from './functions/GenerateRgb';
import EventItem from './module/EventItem';
import { useNavigation } from '@react-navigation/native';
import { routeNames } from '../../../../navigation/names';
import { externalStyles } from '../../../../utils';

// create a component
const ViewNote = () => {
  const [event, setEvent] = useState([]);
  const [isColumn, setIsColumn] = useState(true)
  const navigation = useNavigation();

  useEffect(() => {
    getEventFromStrorge();
  }, []);

  const getEventFromStrorge = async () => {
    try {
      await AsyncStorage.getItem('@event').then(res => {
        setEvent(JSON.parse(res));
      });
    } catch (error) {
      //
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 16,
          marginHorizontal: 24,
        }}
      >
        <Text style={styles.header}>
          <Pressable onPress={() => navigation.goBack(-1)}>
            <ArrowRight style={[externalStyles.rotateZ, { marginRight: 16 }]} />
          </Pressable>
          My Events ({event?.length ? event.length : ''})
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Pressable
          onPress={()=>{
            setIsColumn(false)
          }}
          >
            <GridIcon style={{ marginRight: 15 }} /></Pressable>
            
          <Pressable
          onPress={()=>{
            setIsColumn(true)
          }}
          >
            <TableIcon />
          </Pressable>
        </View>
      </View>

      <View style={styles.event_body}>
        <ScrollView style={styles.scroll_body}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {(event || []).map((item, index) => {
            return (
              <>
                <View style={{width: isColumn ? '98%' : '47%'}}>
                <EventItem
                  isColumn={isColumn}
                  key={index}
                  id={index}
                  color={getRandomColor}
                  item={item}
                />
                </View>
              </>
            );
          }, [])}
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    fontSize: 25,
    fontFamily: 'WorkSans-SemiBold',
  },
  event_body: {
    backgroundColor: theme.white,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingBottom: 32,
  },
  scroll_body: {
    padding: 16,
    paddingHorizontal: 24,
  },
});

//make this component available to the app
export default ViewNote;
