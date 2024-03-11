//import liraries
import React, { Component, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import RemoveTag from '../../../../components/svgicons/homepage/RemoveTags';
import useAddTags from '../../../../services/hooks/useAddTags';
import { theme } from '../../../../theme';
import AddTagsModal from './Modals/AddTagsModal';
import { useNavigation } from '@react-navigation/native';
import { routeNames } from '../../../../navigation/names';
import addToStorage from '../../../../services/hooks/addToStorage';
import RemovetoStorage from '../../../../services/hooks/useRemoveStorage';
import { AppProvider } from '../../../../contextProviver/AppContext';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArrowRight from '../../../../components/svgicons/ArrowRight';
import { externalStyles } from '../../../../utils';
import { showToast } from '../../../../../src copy/util/action';

// create a component
const EditNote = () => {
  const { app, setApp } = useContext(AppProvider);
  const [showAddTagsModal, setShowAddTagsModal] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const [events, setEvent] = useState({
    title: '',
    label: '',
    tags: [],
    createdAt: '',
    content: '',
  });
  const { addTagsHook } = useAddTags();
  const { id } = route.params;

  useEffect(() => {
    setEvent({ ...events, tags: app.tags });
  }, [app.tags]);

  useEffect(() => {
    getSingleEventFromStrorge();
  }, []);

  const setRegisteredEvent = () => {
    let date = new Date();
    // RemovetoStorage("@event")
    // return
    let sec = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getDay()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}`;
    setEvent({ ...events, tags: app.tags, createdAt: sec });
    AddtoStorage('@event', { ...events, tags: app.tags, createdAt: sec });
    setApp({ ...app, event: [events] });
    navigation.navigate(routeNames.viewnote);
  };

  const getSingleEventFromStrorge = async () => {
    try {
      await AsyncStorage.getItem('@event').then(res => {
        setEvent(JSON.parse(res).filter((item, index) => index == id)[0]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
       <AddTagsModal
        showPermitModal={showAddTagsModal}
        closeModal={() => setShowAddTagsModal(false)}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.header_article}>
          <Pressable onPress={() => navigation.goBack(-1)}>
            <ArrowRight style={[externalStyles.rotateZ, { marginRight: 16 }]} />
          </Pressable>
          Edit Event{' '}
        </Text>

        <TextInput
          placeholder="Input Title.."
          value={events?.title}
          onChangeText={val => setEvent({ ...events, title: val })}
          style={styles.event_title}
        ></TextInput>

        <TextInput
          value={events?.label}
          placeholder="Input Label..."
          onChangeText={val => setEvent({ ...events, label: val })}
          style={styles.event_label}
        ></TextInput>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Pressable onPress={() => setShowAddTagsModal(true)}>
            <Text
              style={{
                paddingRight: 16,
                fontFamily: 'WorkSans-Medium',
                color: theme.primary_blue,
              }}
            >
              Add Tags
            </Text>
          </Pressable>
          {app.tags.map((item, index) => {
            return (
              <View style={styles.tag} key={item}>
                <Text style={styles.tag_label}>{item}</Text>
                <Pressable onPress={() => addTagsHook(item)}>
                  <RemoveTag />
                </Pressable>
              </View>
            );
          })}
        </View>

        <View style={styles.textarea_container}>
          <Text style={styles.extxarea_label}>Article Content</Text>
          <View style={styles.textarea}>
            <TextInput
              value={events.content}
              onChangeText={val => setEvent({ ...events, content: val })}
              multiline={true}
              style={{ fontFamily: 'WorkSans-Medium', fontSize: 18 }}
              placeholder="Write up an article to keep reminder on event.."
            />
          </View>
        </View>



        <Pressable
          onPress={() => {
            showToast('Coming soon...');
            console.log(app);
          }}
          style={styles.create_button}
        >
          <Text
            style={{
              color: theme.white,
              textAlign: 'center',
              fontFamily: 'WorkSans-Medium',
            }}
          >
            Proceed to Update
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingVertical: 32,
  },
  textarea: {
    width: '100%',
    height: 350,
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.primary_blue,
    borderStyle: 'dashed',
  },
  header_article: {
    fontSize: 26,
    fontFamily: 'WorkSans-SemiBold',
    marginVertical: 20,
  },
  event_title: {
    fontSize: 25,
    marginTop: 24,
    padding: 6,
    paddingVertical: 12,
    borderBottomColor: theme.borderLight,
    borderBottomWidth: 2,
    fontFamily: 'WorkSans-SemiBold',
  },
  event_label: {
    fontSize: 20,
    marginVertical: 24,
    padding: 6,
    paddingVertical: 6,
    borderBottomColor: theme.borderLight,
    borderBottomWidth: 2,
    fontFamily: 'WorkSans-Medium',
  },
  textarea_container: {
    marginTop: 32,
  },
  extxarea_label: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 16,
    paddingVertical: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.primary_blue,
    borderWidth: 2,
    alignSelf: 'flex-start',
    borderRadius: 50,
    marginVertical: 12,
    marginHorizontal: 6,
    textTransform: 'capitalize',
  },
  create_button: {
    marginVertical: 32,
    paddingVertical: 13,
    backgroundColor: theme.primary_blue,
    borderRadius: 50,
  },
  tag_label: { paddingHorizontal: 10, fontFamily: 'WorkSans-Medium' },
});

//make this component available to the app
export default EditNote;
