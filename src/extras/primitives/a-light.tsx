import React from 'react';

interface Props {
  angle?: unknown;
  color?: unknown;
  decay?: unknown;
  distance?: unknown;
  groundColor?: unknown;
  intensity?: unknown;
  penumbra?: unknown;
  type?: unknown;
  target?: unknown;
}

export default function Light({
  angle,
  color,
  decay,
  distance,
  groundColor,
  intensity,
  penumbra,
  type,
  target,
}: Props): JSX.Element {
  return (
    <a-light
      angle={angle}
      color={color}
      decay={decay}
      distance={distance}
      ground-color={groundColor}
      intensity={intensity}
      penumbra={penumbra}
      type={type}
      target={target}
    />
  );
}
