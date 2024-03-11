//import liraries
import React, { Component, useState, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Alert, Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { theme } from '../../../theme';
import { HORIZONTAL_PAD, SCR_WIDTH } from '../../../utils';
import NotificationIcon from '../../../components/svgicons/homepage/Notification';
import TopScrollItem from './modules/TopScrollItem';
import MidScrollItem from './modules/MidScrollItem';
import LatestContent from './modules/LatestContent';
import RangeSetter from './modals/RangeSetter';
import { useQuery } from 'react-query';
import { apiFactory } from '../../../services/api';
import ApiWrapper from '../../../components/widget/ApiWrapper';


// create a component
const HomePage = () => {
  const [midItemIndex, setMidItemIndex] = useState(-1);
  const [showPermitModal, setShowPermitModal] = useState(true);

  // reqct query hooks
  const {
    isLoading: trendLoading,
    error: trendError,
    isError: trendIsError,
    isFetching: trendFetching,
    refetch: trendRefresh,
    data: trendData,
  } = useQuery('trending', () => apiFactory.$_movie.getHeaderMovies());
  const extractedTrendData = trendData?.data?.results || [];


  const {
    isLoading: actorLoading,
    error: actorError,
    isError: actorIsError,
    isFetching: actorFetching,
    refetch: actorRefresh,
    data: actorData,
  } = useQuery('actors', () => apiFactory.$_movie.getFeaturedCast());
  const extractedActorData = actorData?.data?.results || [];




  const viewabilityConfig = {
    waitForInteraction: true,
    // viewAreaCoveragePercentThreshold: 10,
    minimumViewTime: 100,
  };

  // const _onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
  //   setMidItemIndex(viewableItems[0]?.index || 0);
  //   console.log(viewableItems[0]?.index || 0)
  // }, []);

  const refresh =()=>{
    actorRefresh()
    trendRefresh()
  }




  return (
    <>
      <ApiWrapper isLoading={trendLoading} isError={trendIsError} refresh={refresh}>
        <RangeSetter
          showPermitModal={showPermitModal}
          closeModal={() => setShowPermitModal(false)}
        />

        <ScrollView style={styles.container}>
          <View style={styles.header_container}>
            <View style={{ flex: 4 }}>
              <Text style={styles.top_name}>Hi, Jonathan!</Text>
              <Text style={styles.top_header}>Explore today’s</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <NotificationIcon />
            </View>
          </View>

          <FlatList
            horizontal
            scrollEnabled={true}
            snapToAlignment="start"
            decelerationRate={'fast'}
            scrollEventThrottle={16}
            renderToHardwareTextureAndroid
            snapToInterval={SCR_WIDTH - 72}
            data={extractedActorData}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item?.id}
            renderItem={({ item, index }) => {
              return <TopScrollItem item={item}/>;
            }}
          />

          <View style={{ marginVertical: 8 }}></View>

          <FlatList
            horizontal
            scrollEnabled={true}
            snapToAlignment="start"
            decelerationRate={0}
            overScrollMode={'never'}
            scrollEventThrottle={16}
            viewabilityConfig={this.viewabilityConfig}
            // onViewableItemsChanged={_onViewableItemsChanged}
            renderToHardwareTextureAndroid
            snapToInterval={300}
            data={extractedTrendData}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item?.id}
            renderItem={({ item, index }) => {
              return <MidScrollItem item={item} midItem={midItemIndex == index} />;
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 30,
              marginTop: 10,
            }}
          >
            <Text style={styles.sub_section_header}>Latest News</Text>
            <Text style={styles.sub_more} t>
              More
            </Text>
          </View>

          <View>
            {extractedTrendData.map((item, index) => {
              return <LatestContent item={item} key={item?.id} />;
            })}
          </View>
        </ScrollView>
      </ApiWrapper>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.app_background,
    paddingHorizontal: HORIZONTAL_PAD,
  },
  header_container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 24,
  },
  top_header: {
    fontFamily: 'WorkSans-SemiBold',
    // paddingVertical: 6,
    fontSize: 22,
  },
  top_name: {
    fontFamily: 'WorkSans-Regular',
    paddingVertical: 6,
    fontSize: 15,
  },
  sub_section_header: {
    fontFamily: 'WorkSans-SemiBold',
    flex: 1,
    fontSize: 28,
  },
  sub_more: {
    fontSize: 15,
    paddingRight: 10,
    fontFamily: 'WorkSans-Regular',
    color: theme.primary_blue,
  },
});

//make this component available to the app
export default HomePage;
