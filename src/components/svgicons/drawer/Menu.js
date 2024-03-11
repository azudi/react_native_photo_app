import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const Menu = (props) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    id="magicoon-Regular"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs></Defs>
    <G id="menu-Regular">
      <Path
        id="menu-Regular-2"
        data-name="menu-Regular"
        className="cls-1"
        d="M2.25,5A.75.75,0,0,1,3,4.25H16a.75.75,0,0,1,0,1.5H3A.75.75,0,0,1,2.25,5ZM21,11.25H3a.75.75,0,0,0,0,1.5H21a.75.75,0,0,0,0-1.5Zm-9,7H3a.75.75,0,0,0,0,1.5h9a.75.75,0,0,0,0-1.5Z"
      />
    </G>
  </Svg>
);
export default Menu;
