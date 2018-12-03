import React, { memo } from 'react';

interface TextInputProps {
  label: string,
  placeholder: string,
  value: string,
}

const Vr = (props: TextInputProps) => {
  return (
    <div className="form-group">
      <label>{ props.label }</label>
      <input type="email" className="form-control" value={props.value} aria-describedby="emailHelp" placeholder={props.placeholder} />
    </div>
  )
};


export default memo(Vr);
