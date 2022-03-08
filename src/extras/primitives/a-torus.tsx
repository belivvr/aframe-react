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
  arc?: number;
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

function toTorusProps({
  ambientOcclusionMap,
  ambientOcclusionMapIntensity,
  ambientOcclusionTextureOffset,
  ambientOcclusionTextureRepeat,
  arc,
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
    arc,
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
 * The torus primitive creates donut or tube shapes using the [geometry](https://aframe.io/docs/1.3.0/components/geometry.html) component with the type set to `torus`.
 *
 * @see https://aframe.io/docs/1.3.0/primitives/a-torus.html
 *
 * @example
 * ```tsx
 * <Torus
 *   color="#43A367"
 *   arc={270}
 *   radius={5}
 *   radius-tubular={0.1}
 * />
 * ```
 */
export default function Torus(props: Props & EntityProps): JSX.Element {
  const torusKeys = [
    'ambientOcclusionMap',
    'ambientOcclusionMapIntensity',
    'ambientOcclusionTextureOffset',
    'ambientOcclusionTextureRepeat',
    'arc',
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
    <a-torus
      {...toProps(props, torusKeys)}
      {...toTorusProps(props)}
    >
      {children}
    </a-torus>
  );
}
