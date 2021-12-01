import React from 'react';

interface Props {
  color?: unknown;
  metalness?: unknown;
  opacity?: unknown;
  phiLength?: unknown;
  phiStart?: unknown;
  radius?: unknown;
  repeat?: unknown;
  roughness?: unknown;
  segmentsHeight?: unknown;
  segmentsWidth?: unknown;
  shader?: unknown;
  side?: unknown;
  src?: unknown;
  thetaLength?: unknown;
  thetaStart?: unknown;
  transparent?: unknown;
}

export default function Sky({
  color,
  metalness,
  opacity,
  phiLength,
  phiStart,
  radius,
  repeat,
  roughness,
  segmentsHeight,
  segmentsWidth,
  shader,
  side,
  src,
  thetaLength,
  thetaStart,
  transparent,
}: Props): JSX.Element {
  return (
    <a-sky
      color={color}
      metalness={metalness}
      opacity={opacity}
      phi-length={phiLength}
      phi-start={phiStart}
      radius={radius}
      repeat={repeat}
      roughness={roughness}
      segments-height={segmentsHeight}
      segments-width={segmentsWidth}
      shader={shader}
      side={side}
      src={src}
      theta-length={thetaLength}
      theta-start={thetaStart}
      transparent={transparent}
    />
  );
}
