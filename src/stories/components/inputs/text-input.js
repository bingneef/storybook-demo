import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInput from '../../../components/inputs/text-input.tsx';

storiesOf('Inputs/text-input', module)
  .add('Simple', () => <TextInput label="Your email" />)
  .add('With placeholder', () => <TextInput label="Your email" placeholder="Enter your email" />)
  .add('With value', () => <TextInput label="Your email" value="b.steup@sping.nl" />)
  .add('Without label', () => <TextInput value="b.steup@sping.nl" />);