import React from 'react';

import type { EntityProps } from '../../core';
import { toProps } from '../../core';

interface Props {
  autoplay?: boolean;
  crossOrigin?: string;
  loop?: boolean;
  radius?: number;
  segmentsHeight?: number;
  segmentsWidth?: number;
}

function toVideoSphereProps({
  autoplay,
  crossOrigin,
  loop,
  radius,
  segmentsHeight,
  segmentsWidth,
}: Props): Object {
  return {
    autoplay,
    crossOrigin,
    loop,
    radius,
    'segments-height': segmentsHeight,
    'segments-width': segmentsWidth,
  };
}

/**
 * The videosphere primitive plays 360° videos in the background of the scene.
 * Videospheres are a large sphere with the video texture mapped to the inside.
 *
 * @see https://aframe.io/docs/1.2.0/primitives/a-videosphere.html
 *
 * @example
 * ```tsx
 * <Scene>
 *   <Assets>
 *     <video
 *       id="antarctica"
 *       autoplay
 *       loop={true}
 *       src="antarctica.mp4"
 *     />
 *   </Assets>
 *
 *   // Using the asset management system.
 *   <VideoSphere src="#antarctica" />
 *
 *   // Defining the URL inline. Not recommended but more comfortable for web developers.
 *   <VideoSphere src="africa.mp4" />
 * </Scene>
 * ```
 */
export default function VideoSphere(props: Props & EntityProps): JSX.Element {
  const videoSphereKeys = [
    'autoplay',
    'crossOrigin',
    'loop',
    'radius',
    'segmentsHeight',
    'segmentsWidth',
  ];

  const { children } = props;

  return (
    <a-videosphere
      {...toProps(props, videoSphereKeys)}
      {...toVideoSphereProps(props)}
    >
      {children}
    </a-videosphere>
  );
}
