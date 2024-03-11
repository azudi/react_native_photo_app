//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ArrowRight from '../../components/svgicons/ArrowRight';
import Carousel from '../../components/widget/Carousel';
import {routeNames} from '../../navigation/names';
import {theme} from '../../theme';
import {LIGHT_BR, SCR_WIDTH} from '../../utils';

// create a component
const Home = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [carouselData, setCarouselData] = useState([
    {
      id: 0,
      uri: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
      title: 'Read the article you want instantly',
      article:
        'You can read thousands of articles on Blog Club, save them in the application and share them with your loved ones.',
    }, // https://unsplash.com/photos/Jup6QMQdLnM
    {
      id: 1,
      uri: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
      title: 'Read the article you want instantly',
      article:
        'You can read thousands of articles on Blog Club, save them in the application and share them with your loved ones.',
    }, // https://unsplash.com/photos/Jup6QMQdLnM
    {
      id: 2,
      uri: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
      title: 'Read the article you want instantly',
      article:
        'You can read thousands of articles on Blog Club, save them in the application and share them with your loved ones.',
    }, // https://unsplash.com/photos/Jup6QMQdLnM
    {
      id: 3,
      uri: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
      title: 'Read the article you want instantly',
      type: 'next',
      route: routeNames.signup,
      article:
        'You can read thousands of articles on Blog Club, save them in the application and share them with your loved ones.',
    }, // https://unsplash.com/photos/Jup6QMQdLnM
  ]);

  return (
    <View style={styles.container}>
      <View style={{flex: 7}}>
        <View style={styles.images_wrapper}>
          <View>
            <Image
              width={SCR_WIDTH / 2.5}
              style={{margin: 10}}
              source={require('../../../assets/image/app/placeholder.png')}
            />
          </View>
          <View style={styles.img_shadow}>
            <Image
              width={SCR_WIDTH / 2.5}
              source={require('../../../assets/image/app/maskGroup.png')}
            />
          </View>
          <View style={styles.img_shadow}>
            <Image
              width={SCR_WIDTH / 2.5}
              style={{margin: 10}}
              source={require('../../../assets/image/app/diver_photo.png')}
            />
          </View>
          <View style={styles.img_shadow}>
            <Image
              width={SCR_WIDTH / 2.5}
              source={require('../../../assets/image/app/landscape.png')}
            />
          </View>
        </View>
      </View>

      <View style={[styles.article_section, styles.box_shadow]}>
        <ScrollView>
          <Carousel data={carouselData} index={index} />

          <View style={styles.nav_container}>
            <View style={{flex: 3, flexDirection: 'row'}}>
              {carouselData.map((item, ind) => {
                return (
                  <Pressable
                    onPress={() => {
                      setIndex(ind);
                    }}
                    key={ind}
                    style={index == ind ? styles.active : styles.paginate}
                  />
                );
              })}
            </View>
            <Pressable
              onPress={() =>  {
                if( index >= carouselData.length-1 ) return
                setIndex(index+1)
              }}
              style={{flex: 2, alignItems: 'flex-end'}} >
              <View style={styles.next_button}>
                <ArrowRight color="white" />
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.app_background,
  },
  article_section: {
    flex: 5,
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingTop: 42,
    paddingHorizontal: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  next_button: {
    backgroundColor: theme.primary_blue,
    height: 50,
    width: 70,
    borderRadius: LIGHT_BR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images_wrapper: {
    flexDirection: 'row',
    paddingTop: 10,
    flexWrap: 'wrap',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_shadow: {
    shadowOffset: {width: 0, height: -5},
    shadowColor: theme.primary_blue,
    shadowOpacity: 0.05,
    elevation: 10,
    zIndex: 999,
    shadowRadius: 20,
    // background color must be set
    backgroundColor: '#fff', // invisible color
  },
  img_shadow: {
    shadowOffset: {width: 0, height: 12},
    shadowColor: 'C4C4C4',
    shadowOpacity: 0.45,
    elevation: 20,
    zIndex: 999,
    shadowRadius: 10,
    // background color must be set
    backgroundColor: 'transparent', // invisible color
  },
  nav_container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 32,
  },
  paginate: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginRight: 7,
    backgroundColor: theme.opacity_app_background,
  },
  active: {
    width: 25,
    height: 10,
    borderRadius: 50,
    marginRight: 7,
    backgroundColor: theme.primary_blue,
  },
});

//make this component available to the app
export default Home;
