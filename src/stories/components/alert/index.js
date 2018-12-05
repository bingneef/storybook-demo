import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Alert from '../../../components/alert/index.tsx';

storiesOf('Alert', module)
  .add('Default', () => (
    <Fragment>
      <div className="component-section">
        <Alert content="Success" type="success" />
      </div>
      <div className="component-section">
        <Alert content="Info" type="info" />
      </div>
      <div className="component-section">
        <Alert content="Warning" type="warning" />
      </div>
      <div className="component-section">
        <Alert content="Danger" type="danger" />
      </div>
    </Fragment>
  ))
  .add('With title', () => (
    <Fragment>
      <div className="component-section">
        <Alert title="Success" content="Some other content" type="success" />
      </div>
      <div className="component-section">
        <Alert title="Info" content="Some other content" type="info" />
      </div>
      <div className="component-section">
        <Alert title="Warning" content="Some other content" type="warning" />
      </div>
      <div className="component-section">
        <Alert title="Danger" content="Some other content" type="danger" />
      </div>
    </Fragment>
  ));