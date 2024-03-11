import * as React from "react";
import Svg, { Path } from "react-native-svg";
const LogOut = (props) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14 4L18 4C19.1046 4 20 4.89543 20 6V12V14M20 18C20 19.1046 19.1046 20 18 20H14M15 12L3 12L7 16M7 8L6 9"
      stroke="red"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LogOut;
