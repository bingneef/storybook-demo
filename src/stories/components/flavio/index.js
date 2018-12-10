import React from 'react';
import { storiesOf } from '@storybook/react';

import Flavio from '../../../components/flavio/Name';
import { ContainerHoc } from '../../helpers/container-hoc';
const WrappedFlavio = ContainerHoc(Flavio);

storiesOf('Flavio', module)
  .add('Name with Bing', () => <WrappedFlavio name='Bing' />)
  .add('Name with Flavio', () => <WrappedFlavio name='Flavio' />);