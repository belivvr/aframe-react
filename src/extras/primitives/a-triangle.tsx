import React from 'react';

import {
  Vec2Props,
  Vec3,
  Vec3Props,
  Vec2,
} from '../../components';
import type { EntityProps } from '../../core';
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
  sphericalEnvMap?: string;
  src?: string;
  vertexA?: Vec3Props;
  vertexB?: Vec3Props;
  vertexC?: Vec3Props;
  width?: number;
  wireframe?: boolean;
  wireframeLinewidth?: number;
}

function toTriangleProps({
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
  sphericalEnvMap,
  src,
  vertexA,
  vertexB,
  vertexC,
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
    'spherical-env-map': sphericalEnvMap,
    src,
    'vertex-a': vertexA && new Vec3(vertexA).toString(),
    'vertex-b': vertexB && new Vec3(vertexB).toString(),
    'vertex-c': vertexC && new Vec3(vertexC).toString(),
    width,
    wireframe,
    'wireframe-linewidth': wireframeLinewidth,
  };
}

/**
 * The triangle primitive creates triangle surfaces using the [geometry](https://aframe.io/docs/1.2.0/components/geometry.html) component with the type set to `triangle`.
 *
 * @see https://aframe.io/docs/1.2.0/primitives/a-triangle.html
 *
 * @example
 * ```tsx
 * <Scene>
 *   <Assets>
 *     <img id="platform" src="https://i.imgur.com/mYmmbrp.jpg" />
 *   </Assets>
 *
 *   // Basic triangle.
 *   <Triangle
 *     color="#CCC"
 *     vertex-c={{ x: 1, y: -1, z: 0 }}
 *   />
 *
 *   // Textured triangle parallel to ground.
 *   <Triangle
 *     src="#platform"
 *     rotation="{{ x: -90, y: 0, z: 0 }}
 *   />
 * </Scene>
 * ```
 */
export default function Triangle(props: Props & EntityProps): JSX.Element {
  const triangleKeys = [
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
    'sphericalEnvMap',
    'src',
    'vertexA',
    'vertexB',
    'vertexC',
    'width',
    'wireframe',
    'wireframeLinewidth',
  ];

  const { children } = props;

  return (
    <a-triangle
      {...toProps(props, triangleKeys)}
      {...toTriangleProps(props)}
    >
      {children}
    </a-triangle>
  );
}
