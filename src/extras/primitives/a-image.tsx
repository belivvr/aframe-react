import React from 'react';

interface Props {
  color?: unknown;
  height?: unknown;
  metalness?: unknown;
  opacity?: unknown;
  repeat?: unknown;
  roughness?: unknown;
  segmentsHeight?: unknown;
  segmentsWidth?: unknown;
  shader?: unknown;
  side?: unknown;
  src?: unknown;
  transparent?: unknown;
  width?: unknown;
}

export default function Image({
  color,
  height,
  metalness,
  opacity,
  repeat,
  roughness,
  segmentsHeight,
  segmentsWidth,
  shader,
  side,
  src,
  transparent,
  width,
}: Props): JSX.Element {
  return (
    <a-image
      color={color}
      height={height}
      metalness={metalness}
      opacity={opacity}
      repeat={repeat}
      roughness={roughness}
      segments-height={segmentsHeight}
      segments-width={segmentsWidth}
      shader={shader}
      side={side}
      src={src}
      transparent={transparent}
      width={width}
    />
  );
}
