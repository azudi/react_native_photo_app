import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */
const SideWriteIcon = (props) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <G
      id="text-edit"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <G id="edit"  fill={props.color || 'white'}>
        <Path
          d="M5,20 L19,20 C19.5522847,20 20,20.4477153 20,21 C20,21.5522847 19.5522847,22 19,22 L5,22 C4.44771525,22 4,21.5522847 4,21 C4,20.4477153 4.44771525,20 5,20 Z M4,15 C4,15 7.33323693,11.6666667 13.9997108,5 L17,8 C10.3333333,14.6666667 7,18 7,18 C6.34392558,18 5.34392558,18 4,18 C4,16.6105922 4,15.6105922 4,15 Z M15,4 L16.9997108,2 L20,5 L17.9989741,7.00102587 L15,4 Z"
          id="Shape"
        />
      </G>
    </G>
  </Svg>
);
export default SideWriteIcon;
