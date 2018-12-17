import React, { memo } from 'react';
import ReactHtml from 'raw-html-react';
import 'aframe';

import sceneHtml from './scene.js';

interface VrProps {
  kind: string,
}

const Vr = (props: VrProps) => {
  const htmlContent:string = sceneHtml;
  return <ReactHtml html={htmlContent} />;
};


export default memo(Vr);
