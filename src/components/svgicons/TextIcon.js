import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const TextIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_1422)">
      <Path d="M22.5 3.75V6H16.5V19.5H14.25V6H8.25V3.75H22.5Z" fill="white" />
      <Path d="M5.25 19.5V10.5H1.5V9H10.5V10.5H6.75V19.5H5.25Z" fill="white" />
    </G>
    <Defs>
      <ClipPath id="clip0_1_1422">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TextIcon;
