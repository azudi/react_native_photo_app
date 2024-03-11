import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const AlignIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_1415)">
      <Path d="M19.5 4.5H9V6H19.5V4.5Z" fill="white" />
      <Path d="M16.5 9H9V10.5H16.5V9Z" fill="white" />
      <Path d="M19.5 13.5H9V15H19.5V13.5Z" fill="white" />
      <Path d="M16.5 18H9V19.5H16.5V18Z" fill="white" />
      <Path d="M6 3H4.5V21H6V3Z" fill="white" />
    </G>
    <Defs>
      <ClipPath id="clip0_1_1415">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default AlignIcon;
