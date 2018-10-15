import React from 'react';
import Svg, { Path } from '../../component/svg';
const SvgCancelGrey = props => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width="1em"
    height="1em"
    {...props}
  >
    <Path d="M18 6L6 18M6 6l12 12" />
  </Svg>
);

export default SvgCancelGrey;
