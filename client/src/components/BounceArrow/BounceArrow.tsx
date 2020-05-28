// node modules
import React from 'react';
// local modules
import { IconLink } from './Bounce.styled';

interface BounceArrowProps {
  style?: React.CSSProperties;
}

const BounceArrow = (props: BounceArrowProps) => {
  return (
    <div style={props.style}>
      <IconLink className="fa fa-arrow-down fa-2x" href="#features"></IconLink>
    </div>
  );
};

export default BounceArrow;
