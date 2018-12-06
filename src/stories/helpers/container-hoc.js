import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 1rem;
`
export const ContainerHoc = WrappedComponent => props => {
  return (
    <Div>
      <WrappedComponent { ...props } />
    </Div>
  )
}

export const ContainerHelper = props => {
  return (
    <Div>
      { props.children }
    </Div>
  )
}