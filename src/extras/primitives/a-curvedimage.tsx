import React from 'react';

import type { MaterialSide, Shader, Vec2Props } from '../../components';
import type { EntityProps } from '../../core';
import { Vec2 } from '../../components';
import { toProps } from '../../core';

interface Props {
  color?: string;
  height?: number;
  metalness?: number;
  opacity?: number;
  openEnded?: boolean;
  radius?: number;
  repeat?: Vec2Props;
  roughness?: number;
  segmentsHeight?: number;
  segmentsRadial?: number;
  shader?: Shader;
  side?: MaterialSide;
  src?: string;
  thetaLength?: number;
  thetaStart?: number;
  transparent?: boolean;
}

function toCurvedImageProps({
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
}: Props): Object {
  return {
    color,
    height,
    metalness,
    opacity,
    'open-ended': openEnded,
    radius,
    repeat: repeat && new Vec2(repeat).toString(),
    roughness,
    'segments-height': segmentsHeight,
    'segments-radial': segmentsRadial,
    shader,
    side,
    src,
    'theta-length': thetaLength,
    'theta-start': thetaStart,
    transparent,
  };
}

/**
 * The curved image primitive creates images that bend around the user.
 * Curved images arranged around the camera can be pleasing for legibility since
 * each pixel sits at the same distance from the user.
 * They can be a better choice than angled flat planes for complex layouts because
 * they ensure a smooth surface rather than a series of awkward seams between planes.
 *
 * Under the hood, a curved image is a double-sided open-ended cylinder with
 * textures mapped to the inside of the cylinder.
 *
 * @see https://aframe.io/docs/1.3.0/primitives/a-curvedimage.html
 *
 * @example
 * ```tsx
 * <Scene>
 *   <Assets>
 *     <img id="my-image" src="image.png" />
 *   </Assets>
 *
 *   // Using the asset management system.
 *   <CurvedImage
 *     src="#my-image"
 *     height={3.0}
 *     radius={5.7}
 *     theta-length={72}
 *     rotation={{
 *       x: 0,
 *       y: 100,
 *       z: 0,
 *     }}
 *     scale={{
 *       x: 0.8,
 *       y: 0.8,
 *       z: 0.8,
 *     }}
 *   />
 *
 *   // Defining the URL inline. Not recommended but more comfortable for web developers.
 *   <CurvedImage src="another-image.png" />
 * </Scene>
 * ```
 */
export default function CurvedImage(props: Props & EntityProps): JSX.Element {
  const curvedImageKeys = [
    'color',
    'height',
    'metalness',
    'opacity',
    'openEnded',
    'radius',
    'repeat',
    'roughness',
    'segmentsHeight',
    'segmentsRadial',
    'shader',
    'side',
    'src',
    'thetaLength',
    'thetaStart',
    'transparent',
  ];

  const { children } = props;

  return (
    <a-curvedimage
      {...toProps(props, curvedImageKeys)}
      {...toCurvedImageProps(props)}
    >
      {children}
    </a-curvedimage>
  );
}
