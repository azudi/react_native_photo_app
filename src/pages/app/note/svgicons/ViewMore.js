import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const ViewMore = (props) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="listViewIconTitle"
    stroke="#000000"
    strokeWidth={1}
    strokeLinecap="square"
    strokeLinejoin="miter"
    fill="none"
    color="#000000"
    {...props}
  >
    <Path d="M5 5H19" />
    <Path d="M5 19H19" />
    <Rect x={5} y={9} width={14} height={6} />
  </Svg>
);
export default ViewMore;
