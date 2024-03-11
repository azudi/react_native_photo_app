import React, { useContext, useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import { theme } from '../../../../../theme';
import CustomModal from '../../../../../components/widget/CustomModal';
import RemoveIcon from '../../../../../components/svgicons/RemoveIcon';
import { tagLabel } from '../../AddNote/constant/tags';
import { AppProvider } from '../../../../../contextProviver/AppContext';
import useAddTags from '../../../../../services/hooks/useAddTags';

export default function AddTagsModal({ showPermitModal, closeModal }) {
  const { app, setApp } = useContext(AppProvider);
  const [tags, setTags] = useState([]);
  const { addTagsHook, isContainInTags } = useAddTags()


  useEffect(() => {
    console.log("tags",tagLabel)
  }, []);

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
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            backgroundColor: theme.white,
          }}
        >
          <Pressable onPress={() => closeModal()} style={style.cancle_modal}>
            <RemoveIcon width={30} />
          </Pressable>
          <Text style={style.header_text}>Select the Tags</Text>

          <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
            <ScrollView style={{ height: '85%' }}>
              { tagLabel.map((item, index) => {
                return (
                  <Pressable
                  key={item}
                    style={[
                      style.tag_select,
                      {
                        backgroundColor: isContainInTags(item)
                          ? theme.primary_blue
                          : theme.app_background,
                      },
                    ]}
                    onPress={() => {
                      addtags(item);
                      console.log(app);
                    }}
                  >
                    <Text
                      style={{
                        paddingLeft: 12,
                        fontFamily: 'WorkSans-Medium',
                        fontSize: 17,
                        marginVertical: 14,
                        color: isContainInTags(item) ? theme.white : 'black',
                      }}
                    >
                    { item }
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
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
    paddingTop: 16,
  },
  tag_select: {
    flexDirection: 'row',
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginVertical: 6,
    borderRadius: 50,
  },
});
