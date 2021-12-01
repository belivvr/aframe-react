import React from 'react';

interface Props {
  far?: unknown;
  fuse?: unknown;
  fuseTimeout?: unknown;
  interval?: unknown;
  objects?: unknown;
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
