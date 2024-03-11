import React, { useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import { theme } from '../../../../theme';
import CustomModal from '../../../../components/widget/CustomModal';
import RemoveIcon from '../../../../components/svgicons/RemoveIcon';
import RangeSliderView from '../../../../../src copy/hotel_booking/RangeSliderView';
import SliderView from '../../../../components/widget/SliderView';
import { IMAGE_BASE_URL } from '../../../../../config';

export default function ActorsMovies({ movies, showPermitModal, closeModal }) {

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
            height: '75%',
            width: '100%',
            borderTopRightRadius:30,
            borderTopLeftRadius: 30,
            backgroundColor: theme.white,
          }}
        >
          <Pressable onPress={() => closeModal()} style={style.cancle_modal}>
            <RemoveIcon width={30} />
          </Pressable>

          <ScrollView style={{ marginTop: 16, paddingHorizontal: 32, }}>
            <Text style={style.header}>featured in other movies</Text>

            <View style={style.divider}></View>

            {movies.map((item, index) => {
              return (
                <View key={item?.id} style={style.movie}>
                  <Image
                    resizeMode="cover"
                    style={{ width: '100%', height: 400, borderRadius: 10 }}
                    source={
                      {
                        uri: IMAGE_BASE_URL + item?.poster_path
                      } ||
                        require('../../../../../assets/image/app/placeholder.png')
                       
                    }
                  />
                  <Text style={style.title}>
                    {item?.title || item?.original_name}
                  </Text>
                  <Text style={style.overview}>{item?.overview}</Text>

                  <View
                    style={{
                      paddingTop: 8,
                    }}
                  >
                    <View style={style.list}>
                    <Text style={{opacity: 0.5}}>Country: </Text>
                    <Text style={style.prop_text}>  {item?.origin_country?.length
                        ? item?.origin_country[0]
                        : ''}</Text>
                    </View>


                    <View style={style.list}>
                     <Text style={{opacity: 0.5}}>Rating: </Text>
                         <Text style={style.prop_text}>  {item?.vote_average} / 10</Text>
                    </View>


                    <View style={style.list}>
                        <Text style={{opacity: 0.5}}>Realeased date: </Text>
                        <Text style={style.prop_text}> { item?.first_air_date}</Text>
                    </View>


                    <View style={style.list}>
                    <Text style={{opacity: 0.5}}>Media type: </Text>
                        <Text style={style.prop_text}> { item?.media_type}</Text>
                    </View>


                    <View style={style.list}>
                    <Text style={{opacity: 0.5}}>Vote Recieved: </Text>
                        <Text style={style.prop_text}>{ item?.vote_count}</Text>
                    </View>


                  </View>
                </View>
              );
            })}
          </ScrollView>
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

  movie: {
    paddingVertical: 7,
    marginVertical: 12,
  },
  cancle_modal: {
    position: 'absolute',
    top: -10,
    right: 10,
    zIndex: 2,
    backgroundColor: theme.white,
    borderRadius: 50,
  },
  title: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 20,
    paddingTop: 6,
  },
  overview: {
    fontFamily: 'WorkSans-Regular',
    paddingTop: 6,
  },
  header: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 27,
    paddingTop: 6,
    textTransform: 'capitalize',
  },
  divider: {
    padding: 0,
    width: '100%',
    marginVertical: 8,
    borderWidth: 1,
    borderStyle: 'dashed'
  },
  list:{justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 4},
  prop_text:{textTransform: 'capitalize', fontFamily: 'WorkSans-Bold'}
});
