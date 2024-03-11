import React, { useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import { theme } from '../../../../theme';
import CustomModal from '../../../../components/widget/CustomModal';
import RemoveIcon from '../../../../components/svgicons/RemoveIcon';
import RangeSliderView from '../../../../../src copy/hotel_booking/RangeSliderView';
import SliderView from '../../../../components/widget/SliderView';

export default function RangeSetter({ showPermitModal, closeModal }) {
  return (
    <CustomModal visible={showPermitModal}>
      <View
        style={{
          backgroundColor: 'transparent',
          width: '100%',
          height: '100%',
          borderRadius: 10,
          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            height: '50%',
            width: '100%',
            borderTopRightRadius:30,
            borderTopLeftRadius: 30,
            backgroundColor: theme.white,
          }}
        >
          <Pressable onPress={() => closeModal()} style={style.cancle_modal}>
            <RemoveIcon width={30} />
          </Pressable>
          <Text style={style.header_text}>Select the number of Images in View</Text>

          <View style={{paddingVertical: 48}}>
           <SliderView/>
        </View>



        </View>
      </View>
    </CustomModal>
  );
}

const style = StyleSheet.create({
  modal_text: {
    // fontFamily: 'RedHatDisplay-Black',
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 7,
    marginVertical: 12,
    borderRadius: 5,
    marginRight: 12,
    // fontFamily: 'RedHatDisplay-Black',
    color: 'white',
  },
  cancle_modal: {
    position: 'absolute',
    top: -10,
    right: 10,
    zIndex: 2,
    backgroundColor: theme.white,
    borderRadius: 50,
  },
  header_text: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 27,
    paddingHorizontal: 16,
    paddingTop: 16
  }
});
