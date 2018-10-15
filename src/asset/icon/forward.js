import React from 'react';
import Svg, { Path } from '../../component/svg';
const SvgForward = props => (
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
    <Path d="M9 18l6-6-6-6" />
  </Svg>
);

export default SvgForward;
