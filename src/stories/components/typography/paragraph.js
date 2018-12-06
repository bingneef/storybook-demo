import React from 'react';
import { storiesOf } from '@storybook/react';

import { ContainerHelper } from '../../helpers/container-hoc';

storiesOf('Typography/paragraph', module)
  .add('Overview', () => (
    <ContainerHelper>
      <p>Some default text</p>
      <p className="lead">Some text that has lead</p>
      <p>You can use the mark tag to <mark>highlight</mark> text.</p>
      <p><del>This line of text is meant to be treated as deleted text.</del></p>
      <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
      <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
      <p><u>This line of text will render as underlined</u></p>
    </ContainerHelper>
  ));