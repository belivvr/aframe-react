import React from 'react';

import { EntityProps, toProps } from '../../core';

interface Props {
  far?: number;
  fov?: number;
  lookControlsEnabled?: boolean;
  near?: number;
  reverseMouseDrag?: boolean;
  wasdControlsEnabled?: boolean;
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

/**
 * The camera primitive determines what the user sees.
 * We can change the viewport by modifying the camera entity’s position and rotation.
 *
 * @see https://aframe.io/docs/1.2.0/primitives/a-camera.html
 *
 * @example
 * ```tsx
 * <Scene>
 *   <Box />
 *   <Camera />
 * </Scene>
 * ```
 */
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
