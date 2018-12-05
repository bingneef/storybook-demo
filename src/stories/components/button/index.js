import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../../../components/buttons/index.tsx';

storiesOf('Button/default', module)
  .add('Default', () => (
    <Fragment>
      <div className="component-section">
        <Button title="Default" type="default" />
      </div>
      <div className="component-section">
        <Button title="Primary" type="primary" />
      </div>
      <div className="component-section">
        <Button title="Success" type="success" />
      </div>
      <div className="component-section">
        <Button title="Info" type="info" />
      </div>
      <div className="component-section">
        <Button title="Warning" type="warning" />
      </div>
      <div className="component-section">
        <Button title="Danger" type="danger" />
      </div>
      <div className="component-section">
        <Button title="Link" type="link" />
      </div>
    </Fragment>
  ));