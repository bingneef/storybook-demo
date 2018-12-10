import React from 'react';
import { storiesOf } from '@storybook/react';
import { ContainerHoc } from '../helpers/container-hoc';

import App from '../../screens/App';
import Vr from '../../screens/Vr';
import Form from '../../screens/Form';
import Jumbotron from '../../screens/Jumbotron';

const WrappedJumboTron = ContainerHoc(Jumbotron);

storiesOf('Screens/App', module).add('Default', () => <App />);
storiesOf('Screens/App', module).add('With rotating border', () => <App rotation={true} />);

storiesOf('Screens/Vr', module).add('Default', () => <Vr />);

storiesOf('Screens/Form', module).add('Default', () => <Form />);
storiesOf('Screens/Jumbotron', module).add('Default', () => <WrappedJumboTron />);