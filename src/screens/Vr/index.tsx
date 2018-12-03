import React, { memo } from 'react';
import ReactHtml from 'raw-html-react';
import 'aframe';

import sceneHtml from './scene.js';
import videoHtml from './video.js';

interface VrProps {
  kind: string,
}

const Vr = (props: VrProps) => {
  const htmlContent:any = props.kind == 'video' ? videoHtml : sceneHtml;
  return <ReactHtml html={htmlContent} />;
};


export default memo(Vr);
