import React from 'react';

interface Props {
  id?: string;
  className?: string;
  far?: number;
  fov?: number;
  lookControlsEnabled?: boolean;
  near?: number;
  reverseMouseDrag?: boolean;
  wasdControlsEnabled?: boolean;
}

export default function Camera({
  id,
  className,
  far,
  fov,
  lookControlsEnabled,
  near,
  reverseMouseDrag,
  wasdControlsEnabled,
}: Props): JSX.Element {
  return (
    <a-camera
      id={id}
      className={className}
      far={far}
      fov={fov}
      look-controls-enabled={lookControlsEnabled}
      near={near}
      reverse-mouse-drag={reverseMouseDrag}
      wasd-controls-enabled={wasdControlsEnabled}
    />
  );
}
