import React from 'react';

import type {
  Color,
  Metalness,
  Repeat,
  Roughness,
  Src,
} from '../material';
import type { Cylinder as CylinderGeometry } from '../geometry';

type Props = CylinderGeometry & {
  color?: Color;
  metalness?: Metalness;
  opacity?: number;
  repeat?: Repeat;
  roughness?: Roughness;
  shader?: string;
  side?: string;
  src?: Src;
  transparent?: boolean;
};

export default function CurvedImage({
  color,
  metalness,
  opacity,
  repeat,
  roughness,
  shader,
  side,
  src,
  transparent,
  height,
  openEnded,
  radius,
  segmentsHeight,
  segmentsRadial,
  thetaLength,
  thetaStart,
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
