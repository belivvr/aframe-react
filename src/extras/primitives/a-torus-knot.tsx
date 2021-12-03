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
  p?: number;
  q?: number;
  radius?: number;
  radiusTubular?: number;
  repeat?: Vec2Props;
  roughness?: number;
  segmentsRadial?: number;
  segmentsTubular?: number;
  sphericalEnvMap?: string;
  src?: string;
  width?: number;
  wireframe?: boolean;
  wireframeLinewidth?: number;
}

function toTorusKnotProps({
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
  p,
  q,
  radius,
  radiusTubular,
  repeat,
  roughness,
  segmentsRadial,
  segmentsTubular,
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
    p,
    q,
    radius,
    'radius-tubular': radiusTubular,
    repeat: repeat && new Vec2(repeat).toString(),
    roughness,
    'segments-radial': segmentsRadial,
    'segments-tubular': segmentsTubular,
    'spherical-env-map': sphericalEnvMap,
    src,
    width,
    wireframe,
    'wireframe-linewidth': wireframeLinewidth,
  };
}

/**
 * The torus knot primitive creates pretzel shapes using the [geometry](https://aframe.io/docs/1.2.0/components/geometry.html) component with the type set to `torusKnot`.
 *
 * @see https://aframe.io/docs/1.2.0/primitives/a-torus-knot.html
 *
 * @example
 * ```tsx
 * <TorusKnot
 *   color="#B84A39"
 *   arc={180}
 *   p={2}
 *   q={7}
 *   radius={5}
 *   radius-tubular={0.1}
 * />
 * ```
 */
export default function TorusKnot(props: Props & EntityProps): JSX.Element {
  const torusKnotKeys = [
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
    'p',
    'q',
    'radius',
    'radiusTubular',
    'repeat',
    'roughness',
    'segmentsRadial',
    'segmentsTubular',
    'sphericalEnvMap',
    'src',
    'width',
    'wireframe',
    'wireframeLinewidth',
  ];

  const { children } = props;

  return (
    <a-torus-knot
      {...toProps(props, torusKnotKeys)}
      {...toTorusKnotProps(props)}
    >
      {children}
    </a-torus-knot>
  );
}
