import React from 'react';
import Svg, { Path } from '../../component/svg';
const SvgBack = props => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFF"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width="1em"
    height="1em"
    {...props}
  >
    <Path d="M15 18l-6-6 6-6" />
  </Svg>
);

export default SvgBack;
