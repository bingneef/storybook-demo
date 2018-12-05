import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Typography/headings', module)
  .add('Overview', () => (
    <Fragment>
      <div className="component-section">
        <h1>h1. Bootstrap heading</h1>
      </div>
      <div className="component-section">
        <h2>h2. Bootstrap heading</h2>
      </div>
      <div className="component-section">
        <h3>h3. Bootstrap heading</h3>
      </div>
      <div className="component-section">
        <h4>h4. Bootstrap heading</h4>
      </div>
      <div className="component-section">
        <h5>h5. Bootstrap heading</h5>
      </div>
      <div className="component-section">
        <h6>h6. Bootstrap heading</h6>
      </div>
    </Fragment>
  ))
  .add('With secondary content', () => (
    <Fragment>
      <div className="component-section">
        <h1>h1. Bootstrap heading <small>Some small text</small></h1>
      </div>
      <div className="component-section">
        <h2>h2. Bootstrap heading <small>Some small text</small></h2>
      </div>
      <div className="component-section">
        <h3>h3. Bootstrap heading <small>Some small text</small></h3>
      </div>
      <div className="component-section">
        <h4>h4. Bootstrap heading <small>Some small text</small></h4>
      </div>
      <div className="component-section">
        <h5>h5. Bootstrap heading <small>Some small text</small></h5>
      </div>
      <div className="component-section">
        <h6>h6. Bootstrap heading <small>Some small text</small></h6>
      </div>
    </Fragment>
  ));