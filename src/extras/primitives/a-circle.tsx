import React from 'react';

import type { EntityProps } from '../../core';
import type { Vec2Props } from '../../components';
import { toProps } from '../../core';
import { Vec2 } from '../../components';

interface Props {
  ambientOcclusionMap?: string;
  ambientOcclusionMapIntensity?: number;
  ambientOcclusionTextureOffset?: Vec2Props;
  ambientOcclusionTextureRepeat?: Vec2Props;
  color?: string;
  displacementBias?: number;
  displacementMap?: string;
  displacementScale?: number;
  displacementTextureOffset?: Vec2Props;
  displacementTextureRepeat?: Vec2Props;
  envMap?: string;
  fog?: boolean;
  height?: number;
  metalness?: number;
  normalMap?: string;
  normalScale?: Vec2Props;
  normalTextureOffset?: Vec2Props;
  normalTextureRepeat?: Vec2Props;
  radius?: number;
  repeat?: Vec2Props;
  roughness?: number;
  segments?: number;
  sphericalEnvMap?: string;
  src?: string;
  thetaLength?: number;
  thetaStart?: number;
  width?: number;
  wireframe?: boolean;
  wireframeLinewidth?: number;
}

function toCircleProps({
  ambientOcclusionMap,
  ambientOcclusionMapIntensity,
  ambientOcclusionTextureOffset,
  ambientOcclusionTextureRepeat,
  color,
  displacementBias,
  displacementMap,
  displacementScale,
  displacementTextureOffset,
  displacementTextureRepeat,
  envMap,
  fog,
  height,
  metalness,
  normalMap,
  normalScale,
  normalTextureOffset,
  normalTextureRepeat,
  radius,
  repeat,
  roughness,
  segments,
  sphericalEnvMap,
  src,
  thetaLength,
  thetaStart,
  width,
  wireframe,
  wireframeLinewidth,
}: Props): Object {
  return {
    'ambient-occlusion-map': ambientOcclusionMap,
    'ambient-occlusion-map-intensity': ambientOcclusionMapIntensity,
    'ambient-occlusion-texture-offset': ambientOcclusionTextureOffset && new Vec2(ambientOcclusionTextureOffset).toString(),
    'ambient-occlusion-texture-repeat': ambientOcclusionTextureRepeat && new Vec2(ambientOcclusionTextureRepeat).toString(),
    color,
    'displacement-bias': displacementBias,
    'displacement-map': displacementMap,
    'displacement-scale': displacementScale,
    'displacement-texture-offset': displacementTextureOffset && new Vec2(displacementTextureOffset).toString(),
    'displacement-texture-repeat': displacementTextureRepeat && new Vec2(displacementTextureRepeat).toString(),
    'env-map': envMap,
    fog,
    height,
    metalness,
    'normal-map': normalMap,
    'normal-scale': normalScale && new Vec2(normalScale).toString(),
    'normal-texture-offset': normalTextureOffset && new Vec2(normalTextureOffset).toString(),
    'normal-texture-repeat': normalTextureRepeat && new Vec2(normalTextureRepeat).toString(),
    radius,
    repeat: repeat && new Vec2(repeat).toString(),
    roughness,
    segments,
    'spherical-env-map': sphericalEnvMap,
    src,
    'theta-length': thetaLength,
    'theta-start': thetaStart,
    width,
    wireframe,
    'wireframe-linewidth': wireframeLinewidth,
  };
}

/**
 * The circle primitive creates circles surfaces using the [geometry](https://aframe.io/docs/1.2.0/components/geometry.html) component with the type set to `circle`.
 *
 * @see https://aframe.io/docs/1.2.0/primitives/a-circle.html
 *
 * @example
 * ```tsx
 * <Scene>
 *   <Assets>
 *     <img id="platform" src="platform.jpg" />
 *   </Assets>
 *
 *   // Basic circle.
 *   <Circle color="#CCC" radius="20" />
 *
 *   // Textured circle parallel to ground.
 *   <Circle src="#platform" radius="50" rotation="-90 0 0" />
 * </Scene>
 * ```
 */
export default function Circle(props: Props & EntityProps): JSX.Element {
  const circleKeys = [
    'ambientOcclusionMap',
    'ambientOcclusionMapIntensity',
    'ambientOcclusionTextureOffset',
    'ambientOcclusionTextureRepeat',
    'color',
    'displacementBias',
    'displacementMap',
    'displacementScale',
    'displacementTextureOffset',
    'displacementTextureRepeat',
    'envMap',
    'fog',
    'height',
    'metalness',
    'normalMap',
    'normalScale',
    'normalTextureOffset',
    'normalTextureRepeat',
    'radius',
    'repeat',
    'roughness',
    'segments',
    'sphericalEnvMap',
    'src',
    'thetaLength',
    'thetaStart',
    'width',
    'wireframe',
    'wireframeLinewidth',
  ];

  const { children } = props;

  return (
    <a-circle
      {...toProps(props, circleKeys)}
      {...toCircleProps(props)}
    >
      {children}
    </a-circle>
  );
}
