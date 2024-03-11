import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const CloseIcon = (props) => (
  <Svg
    width={props.size || 40}
    height={props.size || 40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill={ props.background || "white"} />
    <G clipPath="url(#clip0_1_1568)">
      <Path
        d="M27.0711 25.9663L21.1049 20L27.0711 14.0338C27.3762 13.7287 27.3762 13.2341 27.0711 12.929C26.766 12.6239 26.2713 12.6239 25.9662 12.929L20 18.8952L14.0338 12.929C13.7287 12.6239 13.234 12.6239 12.9289 12.929C12.6238 13.2341 12.6238 13.7287 12.9289 14.0338L18.8951 20L12.9289 25.9663C12.6238 26.2714 12.6238 26.766 12.9289 27.0711C13.234 27.3762 13.7287 27.3762 14.0338 27.0711L20 21.1049L25.9662 27.0711C26.2713 27.3762 26.766 27.3762 27.0711 27.0711C27.3762 26.766 27.3762 26.2714 27.0711 25.9663Z"
        fill={props.color || "#0D253C"}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_1568">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CloseIcon;
