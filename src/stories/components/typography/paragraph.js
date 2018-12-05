import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Typography/paragraph', module)
  .add('Overview', () => (
    <Fragment>
      <div className="component-section">
        <p>Some default text</p>
      </div>
      <div className="component-section">
        <p className="lead">Some text that has lead</p>
      </div>
      <div className="component-section">
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
      </div>
      <div className="component-section">
        <del>This line of text is meant to be treated as deleted text.</del>
      </div>
      <div className="component-section">
        <s>This line of text is meant to be treated as no longer accurate.</s>
      </div>
      <div className="component-section">
        <ins>This line of text is meant to be treated as an addition to the document.</ins>
      </div>
      <div className="component-section">
        <u>This line of text will render as underlined</u>
      </div>
    </Fragment>
  ));