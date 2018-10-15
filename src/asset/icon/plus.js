import React from 'react';
import Svg, { Path } from '../../component/svg';
const SvgPlus = props => (
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
    <Path d="M12 5v14M5 12h14" />
  </Svg>
);

export default SvgPlus;
