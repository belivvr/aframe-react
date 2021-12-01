import React from 'react';

interface Props {
  far?: unknown;
  fov?: unknown;
  lookControlsEnabled?: unknown;
  near?: unknown;
  reverseMouseDrag?: unknown;
  wasdControlsEnabled?: unknown;
}

export default function Camera({
  far,
  fov,
  lookControlsEnabled,
  near,
  reverseMouseDrag,
  wasdControlsEnabled,
}: Props): JSX.Element {
  return (
    <a-camera
      far={far}
      fov={fov}
      look-controls-enabled={lookControlsEnabled}
      near={near}
      reverse-mouse-drag={reverseMouseDrag}
      wasd-controls-enabled={wasdControlsEnabled}
    />
  );
}
