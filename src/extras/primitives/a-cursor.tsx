import React from 'react';

import type { EntityProps } from '../../core';
import { toProps } from '../../core';

interface Props {
  far?: number;
  fuse?: boolean;
  fuseTimeout?: number;
  interval?: number;
  objects?: number;
}

function toCursorProps({
  far,
  fuse,
  fuseTimeout,
  interval,
  objects,
}: Props): Object {
  return {
    far,
    fuse,
    'fuse-timeout': fuseTimeout,
    interval,
    objects,
  };
}

/**
 * The cursor primitive is a reticle that allows for clicking and
 * basic interactivity with a scene on devices that do not have a hand controller.
 * The default appearance is a ring geometry. The cursor is usually placed as a child of the camera.
 *
 * Read the [cursor component documentation](https://aframe.io/docs/1.2.0/components/cursor.html) for detailed information about how the cursor works and how to use the cursor.
 *
 * @see https://aframe.io/docs/1.2.0/primitives/a-cursor.html
 *
 * @example
 * ```tsx
 * <Scene>
 *   <Camera>
 *     <Cursor />
 *   </Camera>
 *   <Box />
 * </Scene>
 * ```
 */
export default function Cursor(props: Props & EntityProps): JSX.Element {
  const cursorKeys = [
    'far',
    'fuse',
    'fuseTimeout',
    'interval',
    'objects',
  ];

  const { children } = props;
  return (
    <a-cursor
      {...toProps(props, cursorKeys)}
      {...toCursorProps(props)}
    >
      {children}
    </a-cursor>
  );
}
