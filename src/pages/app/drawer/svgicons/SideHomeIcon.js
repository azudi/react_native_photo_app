import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SideHomeIcon = (props) => (
  <Svg
    width="25px"
    height="25px"
    viewBox="0 0 32 32"
    id="i-home"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path fill={props.color || 'white'} d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" />
  </Svg>
);
export default SideHomeIcon;
