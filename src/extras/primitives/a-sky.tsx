import React from 'react';

import type { MaterialSide, Shader, Vec2Props } from '../../components';
import type { EntityProps } from '../../core';
import { Vec2 } from '../../components';
import { toProps } from '../../core';

interface Props {
  color?: string;
  metalness?: number;
  opacity?: number;
  phiLength?: number;
  phiStart?: number;
  radius?: number;
  repeat?: Vec2Props;
  roughness?: number;
  segmentsHeight?: number;
  segmentsWidth?: number;
  shader?: Shader;
  side?: MaterialSide;
  src?: string;
  thetaLength?: number;
  thetaStart?: number;
  transparent?: boolean;
}

function toSkyProps({
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
}: Props): Object {
  return {
    color,
    metalness,
    opacity,
    'phi-length': phiLength,
    'phi-start': phiStart,
    radius,
    repeat: repeat && new Vec2(repeat).toString(),
    roughness,
    'segments-height': segmentsHeight,
    'segments-width': segmentsWidth,
    shader,
    side,
    src,
    'theta-length': thetaLength,
    'theta-start': thetaStart,
    transparent,
  };
}

/**
 * The sky primitive adds a background color or 360° image to a scene.
 * A sky is a large sphere with a color or texture mapped to the inside.
 *
 * @see https://aframe.io/docs/1.3.0/primitives/a-sky.html
 *
 * @example
 * An equirectangular image as a background:
 *
 * ```tsx
 * <Scene>
 *   <Assets>
 *     <img id="sky" src="sky.png" />
 *   </Assets>
 *   <Sky src="#sky" />
 * </Scene>
 * ```
 *
 * A plain color as a background:
 *
 * ```tsx
 * <Sky color="#6EBAA7" />
 * ```
 */
export default function Sky(props: Props & EntityProps): JSX.Element {
  const skyKeys = [
    'color',
    'metalness',
    'opacity',
    'phiLength',
    'phiStart',
    'radius',
    'repeat',
    'roughness',
    'segmentsHeight',
    'segmentsWidth',
    'shader',
    'side',
    'src',
    'thetaLength',
    'thetaStart',
    'transparent',
  ];

  const { children } = props;

  return (
    <a-sky
      {...toProps(props, skyKeys)}
      {...toSkyProps(props)}
    >
      {children}
    </a-sky>
  );
}
