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
  repeat?: Vec2Props;
  roughness?: number;
  segmentsHeight?: number;
  segmentsWidth?: number;
  shader?: Shader;
  side?: MaterialSide;
  src?: string;
  transparent?: boolean;
  width?: number;
}

function toImageProps({
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
}: Props): Object {
  return {
    color,
    height,
    metalness,
    opacity,
    repeat: repeat && new Vec2(repeat).toString(),
    roughness,
    'segments-height': segmentsHeight,
    'segments-width': segmentsWidth,
    shader,
    side,
    src,
    transparent,
    width,
  };
}

/**
 * The image primitive shows an image on a flat plane.
 *
 * @see https://aframe.io/docs/1.3.0/primitives/a-image.html
 *
 * @example
 * ```tsx
 * <Scene>
 *   <Assets>
 *     <img id="my-image" src="image.png" />
 *   </Assets>
 *
 *   // Using the asset management system.
 *   <Image src="#my-image" />
 *
 *   // Defining the URL inline. Not recommended but more comfortable for web developers.
 *   <Image src="another-image.png" />
 * </Scene>
 * ```
 */
export default function Image(props: Props & EntityProps): JSX.Element {
  const imageKeys = [
    'color',
    'height',
    'metalness',
    'opacity',
    'repeat',
    'roughness',
    'segmentsHeight',
    'segmentsWidth',
    'shader',
    'side',
    'src',
    'transparent',
    'width',
  ];

  const { children } = props;

  return (
    <a-image
      {...toProps(props, imageKeys)}
      {...toImageProps(props)}
    >
      {children}
    </a-image>
  );
}
