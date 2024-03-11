//import liraries
import React, { Component, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import RemoveTag from '../../../../components/svgicons/homepage/RemoveTags';
import useAddTostorage from '../../../../services/hooks/addToStorage';
import { AppProvider } from '../../../../contextProviver/AppContext';
import useAddTags from '../../../../services/hooks/useAddTags';
import { theme } from '../../../../theme';
import AddTags from './modals/AddTags';
import { useNavigation } from '@react-navigation/native';
import { routeNames } from '../../../../navigation/names';
import AddtoStorage from '../../../../services/hooks/addToStorage';
import RemovetoStorage from '../../../../services/hooks/useRemoveStorage';
import ImageIcon from '../../../../components/svgicons/ImageIcon';
import LinkIcon from '../../../../components/svgicons/LinkIcon';
import TextIcon from '../../../../components/svgicons/TextIcon';
import AlignIcon from '../../../../components/svgicons/AlignIcon';
import PlayIcon from '../../../../components/svgicons/PlayIcon';
import CloseIcon from '../../../../components/svgicons/homepage/CloseIcon';
import { useToast } from '../../../../services/hooks/useToast';


// create a component
const AddNote = () => {
  const { app, setApp } = useContext(AppProvider);
  const [showAddTagsModal, setShowAddTagsModal] = useState(false);
  const navigation = useNavigation()
  const { createToast } = useToast()
  const [events, setEvent] = useState({
    title: '',
    label: '',
    tags: [],
    createdAt: "",
    content: '',
  });
  const { addTagsHook } = useAddTags();

  useEffect(() => {
    setEvent({ ...events, tags: app.tags });
  }, [app.tags]);


  useEffect(()=>{
    AddtoStorage("@event", events)
  }, [app.event])


  const setRegisteredEvent =()=>{
    let date = new Date()
    // RemovetoStorage("@event")
    // return
    let sec = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getDay()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}` 
    if(!sec) return
    setEvent({ ...events, tags: app.tags, createdAt: sec });
    AddtoStorage("@event", { ...events, tags: app.tags, createdAt: sec })
    setApp({...app, event: [events]})
    navigation.navigate(routeNames.viewnote)
  }

  return (
    <View>
      <AddTags
        showPermitModal={showAddTagsModal}
        closeModal={() => setShowAddTagsModal(false)}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.header_article}>New Event</Text>

        <TextInput
          placeholder="Input Title.."
          onChangeText={val => setEvent({ ...events, title: val })}
          style={styles.event_title}
        ></TextInput>

        <TextInput
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
              onChangeText={val => setEvent({ ...events, content: val })}
              multiline={true}
              style={{ fontFamily: 'WorkSans-Medium', fontSize: 18 }}
              placeholder="Write up an article to keep reminder on event.."
            />
          </View>
        </View>




     
        <View style={styles.tools}>
          <CloseIcon
           size={55}
           color={'black'}
           background = {'white'}
           style={{marginRight: '5%'}}
          />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center'}}>
             
             <Pressable onPress={()=> createToast({msg: 'Image In Progress', action: true, status: 'danger'}) }>
             <ImageIcon/>
              </Pressable>
              <Pressable onPress={()=> createToast({msg: 'Link In Progress', action: true, status: 'danger'}) }> 
              <LinkIcon/>
              </Pressable>
              <Pressable onPress={()=> createToast({msg: 'Movie In Progress', action: true, status: 'danger'}) }>
              <PlayIcon/>
              </Pressable>
              <Pressable onPress={()=> createToast({msg: 'Text In Progress', action: true, status: 'danger'}) }>
              <TextIcon/>
              </Pressable>
              <Pressable onPress={()=> createToast({msg: 'Align In Progress', action: true, status: 'danger'}) }>
              <AlignIcon/>
              </Pressable>
            </View>
        </View>




        <Pressable
        onPress={()=> {
            setRegisteredEvent()
            console.log(app)
        }}
        style={styles.create_button}>
          <Text
            style={{
              color: theme.dark_background,
              textAlign: 'center',
              fontFamily: 'WorkSans-Medium',
            }}
          >
            Create Event
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
    height: 250,
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
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: theme.dark_background,
    borderStyle: 'dashed',
    borderRadius: 50,
  },
  tools: {
    backgroundColor: theme.dark_background,
    marginVertical: 32,
    padding: 4,
    paddingHorizontal: 4,
    paddingRight: 18,
    borderRadius: 50,
    flexDirection: 'row',
  },
  tag_label: { paddingHorizontal: 10, fontFamily: 'WorkSans-Medium' },
});

//make this component available to the app
export default AddNote;
