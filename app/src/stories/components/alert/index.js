import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Alert from '../../../components/alert/index.tsx';
import { ContainerHoc } from '../../helpers/container-hoc';

const WrappedAlert = ContainerHoc(Alert);

storiesOf('Alert', module)
  .add('Default', () => (
    <Fragment>
      <WrappedAlert content="Success" type="success" />
      <WrappedAlert content="Info" type="info" />
      <WrappedAlert content="Warning" type="warning" />
      <WrappedAlert content="Danger" type="danger" />
    </Fragment>
  ))
  .add('With title', () => (
    <Fragment>
      <WrappedAlert title="Success" content="Some other content" type="success" />
      <WrappedAlert title="Info" content="Some other content" type="info" />
      <WrappedAlert title="Warning" content="Some other content" type="warning" />
      <WrappedAlert title="Danger" content="Some other content" type="danger" />
    </Fragment>
  ));