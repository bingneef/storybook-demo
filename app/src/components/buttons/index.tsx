import React, { memo } from 'react';

interface ButtonProps {
  type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link',
  title: string,
  outline?: boolean,
  dataTestid?: string,
  onClick?: () => void,
}

const Button = (props: ButtonProps) => {
  const buttonClass = props.outline ? `btn-outline-${props.type}` : `btn-${props.type}`;

  return (
    <button 
      type="button" 
      onClick={(event: any) => props.onClick && props.onClick()} 
      data-testid={props.dataTestid}
      className={`btn ${buttonClass}`}
    >
      { props.title }
    </button>
  );
};


export default memo(Button);
