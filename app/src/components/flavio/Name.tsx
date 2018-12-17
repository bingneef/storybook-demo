import React, { memo, useState, Fragment } from 'react';
interface NameProps {
  name: string,
}

const Name = (props: NameProps) => {
  const [name, setName] = useState(props.name);
  
  function handleChange(event: React.FormEvent<HTMLInputElement>):void {
    setName(event.currentTarget.value);
  }

  return (
    <Fragment>
      <span>{props.name} {name}</span>
      <input onChange={handleChange} value={name} />
    </Fragment>
  );
};


export default memo(Name);
