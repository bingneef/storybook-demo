import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInput from '../../../components/inputs/text-input.tsx';
import { ContainerHoc } from '../../helpers/container-hoc';

const WrappedTextInput = ContainerHoc(TextInput);

storiesOf('Inputs/text-input', module)
  .add('Simple', () => <WrappedTextInput label="Your email" />)
  .add('With placeholder', () => <WrappedTextInput label="Your email" placeholder="Enter your email" />)
  .add('With value', () => <WrappedTextInput label="Your email" value="b.steup@sping.nl" />)
  .add('Without label', () => <WrappedTextInput value="b.steup@sping.nl" />);