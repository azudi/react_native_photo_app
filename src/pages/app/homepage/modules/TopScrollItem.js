//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { IMAGE_BASE_URL } from '../../../../../config';
import { theme } from '../../../../theme';
import ActorsMovies from '../modals/ActorsMovies';

// create a component
const TopScrollItem = (props) => {

 const { item } = props

 const [showActorsModal, setShowActorsModal] = useState(false)

    return (
        <View>
            <ActorsMovies
            movies={item?.known_for}
            showPermitModal={showActorsModal}
            closeModal={() => setShowActorsModal(false)}
            />
        <Pressable 
        onPress={()=> setShowActorsModal(true)}
        style={styles.container}>
            <View style={styles.inner_container}>
            <Image  
             resizeMode="cover"
             style={{width: 100, height: 100}}
             source={
                { uri: IMAGE_BASE_URL+ item?.profile_path }  ||
                require('../../../../../assets/image/app/placeholder.png') 
                
                 }
             />
            </View>
        </Pressable>
       <Text style={styles.title_text}>{item?.name || ''}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       width: 100,
       height: 100,
       marginHorizontal: 12,
       borderWidth: 2,
       borderRadius: 16,
       borderStyle: 'dashed',
       padding: 4,
       borderColor: theme.primary_blue,
    },
    inner_container: {
        width: '100%',
        height: '100%',
        borderRadius: 14,
        overflow: 'hidden'
    },
    title_text: {
        marginTop: 5,
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular'
    }
});

//make this component available to the app
export default TopScrollItem;
