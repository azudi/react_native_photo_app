//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { G, Path, Defs } from "react-native-svg";

// create a component
const PlusIcon = (props) => {

    const { color } = props

  return (
    <Svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M21.2188 11.7188H12.7812V3.28125C12.7812 2.84977 12.4315 2.5 12 2.5C11.5685 2.5 11.2188 2.84977 11.2188 3.28125V11.7188H2.78125C2.34977 11.7188 2 12.0685 2 12.5C2 12.9315 2.34977 13.2812 2.78125 13.2812H11.2188V21.7188C11.2188 22.1502 11.5685 22.5 12 22.5C12.4315 22.5 12.7812 22.1502 12.7812 21.7188V13.2812H21.2188C21.6502 13.2812 22 12.9315 22 12.5C22 12.0685 21.6502 11.7188 21.2188 11.7188Z"
        fill={ color || '#8FE6FF' }
      />
    </Svg>
  );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default PlusIcon;
