import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const NotificationIcon = (props) => (
  <Svg
    width={30}
    height={27}
    viewBox="0 0 30 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_1_1105)">
      <Path
        d="M7.75 12.0002V12V8C7.75 6.07718 8.51384 4.23312 9.87348 2.87348C11.2331 1.51384 13.0772 0.75 15 0.75C16.9228 0.75 18.7669 1.51384 20.1265 2.87348C21.4862 4.23311 22.25 6.07718 22.25 8V12V12.0002C22.2501 12.4642 22.4345 12.9092 22.7627 13.2373C22.7627 13.2374 22.7627 13.2374 22.7628 13.2374L25.1768 15.6515C25.2237 15.6984 25.25 15.762 25.25 15.8283V16C25.25 16.1381 25.1381 16.25 25 16.25H5C4.86193 16.25 4.75 16.1381 4.75 16V15.8283C4.75 15.762 4.77634 15.6984 4.82322 15.6515L7.23725 13.2374C7.56546 12.9093 7.7499 12.4643 7.75 12.0002ZM17.25 20C17.25 20.5967 17.0129 21.169 16.591 21.591C16.169 22.0129 15.5967 22.25 15 22.25C14.4033 22.25 13.831 22.0129 13.409 21.591C12.9871 21.169 12.75 20.5967 12.75 20V19.75H17.25V20Z"
        stroke="#0D253C"
        strokeWidth={1.5}
        shapeRendering="crispEdges"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default NotificationIcon;
