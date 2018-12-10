import React, { memo } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 1rem;
`

export const ContainerHoc = (WrappedComponent: React.ComponentType) => (props:any) => {
  return (
    <Div>
      <WrappedComponent { ...props } />
    </Div>
  )
}

interface containerProps {
  children: JSX.Element[] | JSX.Element
}

export const ContainerHelper = (props: containerProps) => {
  return (
    <Div>
      { props.children }
    </Div>
  )
}