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

function toVideoProps({
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
 * The video primitive plays a video as a texture on a flat plane.
 *
 * @see https://aframe.io/docs/1.3.0/primitives/a-video.html
 *
 * @example
 * ```tsx
 * <Scene>
 *   <Assets>
 *     <video
 *       id="penguin-sledding"
 *       autoplay
 *       loop="true"
 *       src="penguin-sledding.mp4"
 *     />
 *   </Assets>
 *
 *   // Using the asset management system.
 *   <Video
 *     src="#penguin-sledding"
 *     width={16}
 *     height={9}
 *     position={{ x: 0, y: 0, z: -20 }}
 *   />
 *
 *   // Defining the URL inline. Not recommended but more comfortable for web developers.
 *   <Video
 *     src="airbending.mp4"
 *   />
 * </Scene>
 * ```
 */
export default function Video(props: Props & EntityProps): JSX.Element {
  const videoKeys = [
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
    <a-video
      {...toProps(props, videoKeys)}
      {...toVideoProps(props)}
    >
      {children}
    </a-video>
  );
}
