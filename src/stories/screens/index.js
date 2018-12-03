import React from 'react';
import { storiesOf } from '@storybook/react';

import App from '../../screens/App';
import Vr from '../../screens/Vr';
import Form from '../../screens/Form';

storiesOf('Screens/App', module).add('Default', () => <App />);
storiesOf('Screens/App', module).add('With rotating border', () => <App rotation={true} />);

storiesOf('Screens/Vr', module).add('Default', () => <Vr />);
storiesOf('Screens/Vr', module).add('Video', () => <Vr kind='video' />);

storiesOf('Screens/Form', module).add('Default', () => <Form />);