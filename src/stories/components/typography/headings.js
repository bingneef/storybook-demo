import React from 'react';
import { storiesOf } from '@storybook/react';

import { ContainerHelper } from '../../helpers/container-hoc';

storiesOf('Typography/headings', module)
  .add('Overview', () => (
    <ContainerHelper>
      <h1>h1. Bootstrap heading</h1>
      <h2>h2. Bootstrap heading</h2>
      <h3>h3. Bootstrap heading</h3>
      <h4>h4. Bootstrap heading</h4>
      <h5>h5. Bootstrap heading</h5>
      <h6>h6. Bootstrap heading</h6>
    </ContainerHelper>
  ))
  .add('With secondary content', () => (
    <ContainerHelper>
      <h1>h1. Bootstrap heading <small>Some small text</small></h1>
      <h2>h2. Bootstrap heading <small>Some small text</small></h2>
      <h3>h3. Bootstrap heading <small>Some small text</small></h3>
      <h4>h4. Bootstrap heading <small>Some small text</small></h4>
      <h5>h5. Bootstrap heading <small>Some small text</small></h5>
      <h6>h6. Bootstrap heading <small>Some small text</small></h6>
    </ContainerHelper>
  ));