import React from 'react';
import { storiesOf } from '@storybook/react';
import { ContainerHoc } from '../helpers/container-hoc';

import { App } from '../../screens/App';
import { Overview } from '../../screens/Overview';
import Vr from '../../screens/Vr';
import Form from '../../screens/Form';
import Jumbotron from '../../screens/Jumbotron';

const WrappedJumboTron = ContainerHoc(Jumbotron);

const graphqlProps = { data: {}};
storiesOf('Screens/App', module).add('Default', () => <App {...graphqlProps} />);
storiesOf('Screens/App', module).add('Loading', () => <App data={{loading: true}} />);
storiesOf('Screens/App', module).add('With rotating border', () => <App {...graphqlProps} rotation={true} />);

storiesOf('Screens/Overview', module).add('Filled state', () => <Overview data={{ teams: [{_id: 1, name: 'Sping BV'}, {_id: 2, name: 'Bing.com'}] }} />);
storiesOf('Screens/Overview', module).add('Empty state', () => <Overview />);
storiesOf('Screens/Overview', module).add('Loading state', () => <Overview data={{loading: true}} />);

storiesOf('Screens/Vr', module).add('Default', () => <Vr />);

storiesOf('Screens/Form', module).add('Default', () => <Form />);
storiesOf('Screens/Jumbotron', module).add('Default', () => <WrappedJumboTron />);
