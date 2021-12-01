import React from 'react';

interface Props {
  color?: unknown;
  height?: unknown;
  metalness?: unknown;
  opacity?: unknown;
  openEnded?: unknown;
  radius?: unknown;
  repeat?: unknown;
  roughness?: unknown;
  segmentsHeight?: unknown;
  segmentsRadial?: unknown;
  shader?: unknown;
  side?: unknown;
  src?: unknown;
  thetaLength?: unknown;
  thetaStart?: unknown;
  transparent?: unknown;
}

export default function CurvedImage({
  color,
  height,
  metalness,
  opacity,
  openEnded,
  radius,
  repeat,
  roughness,
  segmentsHeight,
  segmentsRadial,
  shader,
  side,
  src,
  thetaLength,
  thetaStart,
  transparent,
}: Props): JSX.Element {
  return (
    <a-curvedimage
      color={color}
      height={height}
      metalness={metalness}
      opacity={opacity}
      open-ended={openEnded}
      radius={radius}
      repeat={repeat}
      roughness={roughness}
      segments-height={segmentsHeight}
      segments-radial={segmentsRadial}
      shader={shader}
      side={side}
      src={src}
      theta-length={thetaLength}
      theta-start={thetaStart}
      transparent={transparent}
    />
  );
}
