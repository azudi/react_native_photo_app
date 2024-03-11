import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { theme } from '../../theme';

const SliderView: React.FC = () => {
  const [distValue, setDistValue] = useState(50.0);


  return (
    <>
    <Slider
      containerStyle={{ marginHorizontal: 16, marginBottom: 12 }}
      trackStyle={{ height: 6 }}
      thumbStyle={styles.thumbStyle}
      step={1}
      minimumValue={0}
      maximumValue={100}
      thumbTintColor={theme.primary_blue}
      minimumTrackTintColor='rgb(136, 132, 227)'
      maximumTrackTintColor={'rgba(230,234,241, 1)'}
      animateTransitions
      animationType="spring"
      value={distValue}
      onValueChange={(value : any) => setDistValue(value[0])}
    />

   <View style={{flexDirection: 'row', paddingHorizontal: 16, alignItems: 'center'}}>
   <Text style={styles.titleText}>Images Per Display</Text>
    <Text style={styles.thumbText}>
      {distValue}
      </Text>
   </View>
    </>
  );
};

const styles = StyleSheet.create({
  thumbStyle: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 7.49,
  },
  titleText: {
    fontFamily: 'WorkSans-Regular',

  },
  thumbText: { width: 170, textAlign: 'center' , fontFamily: 'WorkSans-Medium', fontSize: 35},
});

export default SliderView;
