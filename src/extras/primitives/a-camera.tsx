import React from 'react';

import { EntityProps, toProps } from '../../core';

interface Props {
  far?: unknown;
  fov?: unknown;
  lookControlsEnabled?: unknown;
  near?: unknown;
  reverseMouseDrag?: unknown;
  wasdControlsEnabled?: unknown;
}

function toCameraProps({
  far,
  fov,
  lookControlsEnabled,
  near,
  reverseMouseDrag,
  wasdControlsEnabled,
}: Props): Object {
  return {
    far,
    fov,
    'look-controls-enabled': lookControlsEnabled,
    near,
    'reverse-mouse-drag': reverseMouseDrag,
    'wasd-controls-enabled': wasdControlsEnabled,
  };
}

export default function Camera(props: Props & EntityProps): JSX.Element {
  const cameraKeys = [
    'far',
    'fov',
    'lookControlsEnabled',
    'near',
    'reverseMouseDrag',
    'wasdControlsEnabled',
  ];
  const { children } = props;

  return (
    <a-camera
      {...toProps(props, cameraKeys)}
      {...toCameraProps(props)}
    >
      {children}
    </a-camera>
  );
}
