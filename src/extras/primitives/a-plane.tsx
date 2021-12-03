import React from 'react';

import type { Vec2Props } from '../../components';
import type { EntityProps } from '../../core';
import { Vec2 } from '../../components';
import { toProps } from '../../core';

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
  repeat?: Vec2Props;
  roughness?: number;
  segmentsHeight?: number;
  segmentsWidth?: number;
  sphericalEnvMap?: string;
  src?: string;
  width?: number;
  wireframe?: boolean;
  wireframeLinewidth?: number;
}

function toPlaneProps({
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
  repeat,
  roughness,
  segmentsHeight,
  segmentsWidth,
  sphericalEnvMap,
  src,
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
    repeat: repeat && new Vec2(repeat).toString(),
    roughness,
    'segments-height': segmentsHeight,
    'segments-width': segmentsWidth,
    'spherical-env-map': sphericalEnvMap,
    src,
    width,
    wireframe,
    'wireframe-linewidth': wireframeLinewidth,
  };
}

/**
 * The plane primitive creates flat surfaces using the [geometry](https://aframe.io/docs/1.2.0/components/geometry.html) component with the type set to `plane`.
 *
 * @see https://aframe.io/docs/1.2.0/primitives/a-plane.html
 *
 * @example
 * ```tsx
 * <Scene>
 *   <Assets>
 *     <img id="ground" src="ground.jpg" />
 *   </Assets>
 *
 *   // Basic plane.
 *   <Plane
 *     color="#CCC"
 *     height={20}
 *     width={20}
 *   />
 *
 *   // Textured plane parallel to ground.
 *   <Plane
 *     src="#ground"
 *     height={100}
 *     width={100}
 *     rotation={{ x: -90, y: 0, z: 0 }}
 *   />
 * </Scene>
 * ```
 */
export default function Plane(props: Props & EntityProps): JSX.Element {
  const planeKeys = [
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
    'repeat',
    'roughness',
    'segmentsHeight',
    'segmentsWidth',
    'sphericalEnvMap',
    'src',
    'width',
    'wireframe',
    'wireframeLinewidth',
  ];

  const { children } = props;

  return (
    <a-plane
      {...toProps(props, planeKeys)}
      {...toPlaneProps(props)}
    >
      {children}
    </a-plane>
  );
}
