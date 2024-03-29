import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const SideNoteIcon = (props) => (
  <Svg
    width="25px"
    height="25px"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs></Defs>
    <G data-name="26. Clipboard" id="_26._Clipboard">
      <Path
        fill={props.color || 'white'}
        className="cls-1"
        d="M25,32H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4H8A1,1,0,0,1,8,6H7A1,1,0,0,0,6,7V29a1,1,0,0,0,1,1H25a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0V29A3,3,0,0,1,25,32Z"
      />
      <Path
        fill={props.color || 'white'}
        className="cls-1"
        d="M27,13a1,1,0,0,1-1-1V7a1,1,0,0,0-1-1H20a1,1,0,0,1,0-2h5a3,3,0,0,1,3,3v5A1,1,0,0,1,27,13Z"
      />
      <Path
        fill={props.color || 'white'}
        className="cls-1"
        d="M19,8H13a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2V6A2,2,0,0,1,19,8ZM13,4V6h6V4Z"
      />
      <Path
        fill={props.color || 'white'}
        className="cls-1"
        d="M16,4a1,1,0,0,1-1-1V1a1,1,0,0,1,2,0V3A1,1,0,0,1,16,4Z"
      />
      <Path
        fill={props.color || 'white'}
        className="cls-1"
        d="M13,17H9a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v4A1,1,0,0,1,13,17Zm-3-2h2V13H10Z"
      />
      <Path
        fill={props.color || 'white'}
        className="cls-1"
        d="M13,26H9a1,1,0,0,1-1-1V21a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v4A1,1,0,0,1,13,26Zm-3-2h2V22H10Z"
      />
      <Path fill={props.color || 'white'} className="cls-2" d="M23,15H17a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" />
      <Path fill={props.color || 'white'} className="cls-2" d="M23,24H17a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" />
    </G>
  </Svg>
);
export default SideNoteIcon;
