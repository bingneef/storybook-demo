import React, { memo } from 'react';
import './index.sass';

interface alertProps {
  type: 'success' | 'info' | 'warning' | 'danger',
  title?: string,
  content: string,
}

const alert = (props: alertProps) => {
  return (
    <div className={`alert alert-${props.type}`} role="alert">
      {props.title && (<strong className='Alert-title'>{props.title}</strong>)}
      {props.content}
    </div>
  );
};


export default memo(alert);
