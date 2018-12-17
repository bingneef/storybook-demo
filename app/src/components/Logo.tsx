import React, { memo } from 'react';
interface LogoProps {
  title?: string,
}

const Logo = (props: LogoProps) => {
  return (
    <span>{ props.title }</span>
  );
};


export default memo(Logo);
