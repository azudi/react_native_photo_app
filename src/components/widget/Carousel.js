//import liraries
import React, {Component, useState, useEffect, useRef, useCallback} from 'react';
import {View, Text, Animated, StyleSheet, FlatList, Pressable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../theme';
import { SCR_WIDTH } from '../../utils';
import { useNavigation } from '@react-navigation/native';



// create a component
const Carousel = ({data, index}) => {
  const flatlist = useRef(null);
  const navigation = useNavigation();
  const [dataWithPlaceholders, setDataWithPlaceholders] = useState([]);
  const [initial, setInitial] = useState(true)
  const [scrIndex, setScrIndex] = useState(1)


  useEffect(() => {
    setDataWithPlaceholders([ ...data]);
  }, [data]);


 const onScroll = useCallback((event)=>{
  let v = 1;
  const slideSize = event.nativeEvent.layoutMeasurement.width;
  const index = event.nativeEvent.contentOffset.x / slideSize;
  const roundIndex = Math.round(index);
  console.log(roundIndex)

 })

 useEffect(()=>{
  setInitial(false)
  if(initial) return
  flatlist.current?.scrollToIndex({animated: true, index: index})

 }, [index])




  return (
    <View>
      <FlatList
        horizontal
        scrollEnabled={false}
        snapToAlignment="start"
        decelerationRate={'fast'}
        scrollEventThrottle={16}
        renderToHardwareTextureAndroid
        snapToInterval={SCR_WIDTH - 72}
        data={dataWithPlaceholders}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        ref={flatlist}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container}>
              <Text style={{fontSize: 30, fontFamily: 'WorkSans-SemiBold'}}>
                { item?.title }
              </Text>
              <Text style={{paddingVertical: 24, fontFamily: 'WorkSans-Regular'}} selectable={true}>
              { item?.article }
              </Text>
              {
                item?.type == 'next' ? 
                  <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                    <Pressable 
                    onPress={()=>{
                      navigation.navigate(item.route)
                    }}
                    style={{ borderRadius: 10, overflow: 'hidden'}}>
                      <Text style={styles.next_button}>Next</Text>
                    </Pressable> 
                  </View>  : null
              }
            </View>
          );
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: SCR_WIDTH - 64,
    marginHorizontal: 0,
    marginHorizontal: 32,
    // backgroundColor: 'red',
  },
  next_button: {
    color: theme.white,
    backgroundColor: theme.primary_blue,
    width: 150,
    fontSize: 16,
    paddingVertical: 12,
    textAlign: 'center',
    fontFamily: 'WorkSans-Medium'
  }
});

//make this component available to the app
export default Carousel;
