import React, { memo } from 'react';
import ReactHtml from 'raw-html-react';
import 'aframe';

import sceneHtml from './scene.js';
import videoHtml from './video.js';

interface VrProps {
  kind: string,
}

const Vr = (props: VrProps) => {
  let htmlContent:string = sceneHtml;
  switch (props.kind) {
    case 'video':
      htmlContent = videoHtml;
      break;
  }

  return <ReactHtml html={htmlContent} />;
};


export default memo(Vr);
