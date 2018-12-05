import React, { memo } from 'react';

interface ButtonProps {
  type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link',
  title: string,
  onClick?: () => void,
}

const Button = (props: ButtonProps) => {
  return (
    <button 
      type="button" 
      onClick={(event: any) => props.onClick && props.onClick()} 
      className={`btn btn-${props.type}`}
    >
      { props.title }
    </button>
  );
};


export default memo(Button);
