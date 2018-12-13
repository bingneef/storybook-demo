import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../../../components/buttons/index';
import { ContainerHoc } from '../../helpers/container-hoc';

const WrappedButton = ContainerHoc(Button);

storiesOf('Button', module)
  .add('Default', () => (
    <Fragment>
      <WrappedButton title="Primary" type="primary" />
      <WrappedButton title="Secondary" type="secondary" />
      <WrappedButton title="Success" type="success" />
      <WrappedButton title="Danger" type="danger" />
      <WrappedButton title="Warning" type="warning" />
      <WrappedButton title="Info" type="info" />
      <WrappedButton title="Light" type="light" />
      <WrappedButton title="Dark" type="dark" />
      <WrappedButton title="Link" type="link" />
    </Fragment>
  ))
  .add('Outline', () => (
    <Fragment>
      <WrappedButton title="Primary" outline type="primary" />
      <WrappedButton title="Secondary" outline type="secondary" />
      <WrappedButton title="Success" outline type="success" />
      <WrappedButton title="Danger" outline type="danger" />
      <WrappedButton title="Warning" outline type="warning" />
      <WrappedButton title="Info" outline type="info" />
      <WrappedButton title="Light" outline type="light" />
      <WrappedButton title="Dark" outline type="dark" />
    </Fragment>
  ));