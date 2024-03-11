//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Arrowright from '../../../../../components/svgicons/drawer/ArrowRight';
import { theme } from '../../../../../theme';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { routeNames } from '../../../../../navigation/names';

// create a component
const DrawerHomePage = () => {
const [text, setText] = useState(``)
const navigation = useNavigation()

 useEffect(()=>{
    let typetext = `This one got an incredible amount of backlash the last time I said it,
    so I’m going to say it again: a man’s sexuality is never, ever your
    responsibility, under any circumstances. Whether it’s the fifth date
    or your twentieth year of marriage, the correct determining factor for
    whether or not you have sex with your partner isn’t whether you ought
    to “take care of him” or “put out” because it’s been a while or he’s
    really horny.`
    let index = 0
    let sumtext = ""
    let interval = setInterval(() => {
        if(index == typetext.length) clearInterval(interval)
        sumtext = sumtext + typetext.charAt(index)
        setText(sumtext)
        index++
    }, 50);
 }, [])


  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <Text style={{paddingHorizontal: 20,    fontFamily: 'WorkSans-Medium', fontSize: 17, textAlign: 'center'}}>
          { text }
        </Text>
      </View>
      <View style={styles.bottom_container}>
      <TouchableOpacity onPress={()=> navigation.navigate(routeNames.landing)}>
        <View style={styles.ball_round}>
            <Arrowright />
        </View>
        </TouchableOpacity> 
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball_round: {
    backgroundColor: theme.dark_background,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

//make this component available to the app
export default DrawerHomePage;
