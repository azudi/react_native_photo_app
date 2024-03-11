import * as React from "react";
import Svg, { G, Path, Circle, Defs, ClipPath, Rect } from "react-native-svg";
const RemoveTag = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_1473)">
      <Path
        d="M16.714 15.9773L12.7366 11.9999L16.714 8.02239C16.9174 7.81899 16.9174 7.48923 16.714 7.28582C16.5106 7.08242 16.1809 7.08242 15.9775 7.28582L12 11.2633L8.02252 7.28582C7.81912 7.08242 7.48936 7.08242 7.28595 7.28582C7.08255 7.48923 7.08255 7.81899 7.28595 8.02239L11.2634 11.9999L7.28595 15.9773C7.08255 16.1807 7.08255 16.5105 7.28595 16.7139C7.48936 16.9173 7.81912 16.9173 8.02252 16.7139L12 12.7364L15.9775 16.7139C16.1809 16.9173 16.5106 16.9173 16.714 16.7139C16.9174 16.5105 16.9174 16.1807 16.714 15.9773Z"
        fill="#376AED"
      />
    </G>
    <Circle cx={12} cy={12} r={12} fill="#376AED" fillOpacity={0.15} />
    <Defs>
      <ClipPath id="clip0_1_1473">
        <Rect width={16} height={16} fill="white" transform="translate(4 4)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default RemoveTag;
