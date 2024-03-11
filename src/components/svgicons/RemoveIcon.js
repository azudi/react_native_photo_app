import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const RemoveIcon = (props) => (
  <Svg
    width={props.width || 24}
    height={props.width || 24}
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="removeIconTitle"
    stroke="#8884e3"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    color="#8884e3"
    {...props}
  >
    <Path d="M17,12 L7,12" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);
export default RemoveIcon;
