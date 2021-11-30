import React from 'react';

interface Props {
  far?: number;
  fuse?: boolean;
  fuseTimeout?: number;
  interval?: number;
  objects?: number;
}

export default function Cursor({
  far,
  fuse,
  fuseTimeout,
  interval,
  objects,
}: Props): JSX.Element {
  return (
    <a-cursor
      far={far}
      fuse={fuse}
      fuse-timeout={fuseTimeout}
      interval={interval}
      objects={objects}
    />
  );
}
