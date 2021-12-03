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
  phiLength?: number;
  phiStart?: number;
  radius?: number;
  repeat?: Vec2Props;
  roughness?: number;
  segmentsHeight?: number;
  segmentsWidth?: number;
  sphericalEnvMap?: string;
  src?: string;
  thetaLength?: number;
  thetaStart?: number;
  width?: number;
  wireframe?: boolean;
  wireframeLinewidth?: number;
}

function toSphereProps({
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
  phiLength,
  phiStart,
  radius,
  repeat,
  roughness,
  segmentsHeight,
  segmentsWidth,
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
    'phi-length': phiLength,
    'phi-start': phiStart,
    radius,
    repeat: repeat && new Vec2(repeat).toString(),
    roughness,
    'segments-height': segmentsHeight,
    'segments-width': segmentsWidth,
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
 * The sphere primitive creates a spherical or polyhedron shapes.
 * It wraps an entity that prescribes the [geometry component](https://aframe.io/docs/1.2.0/components/geometry.html) with its geometric primitive set to `sphere`.
 *
 * @see https://aframe.io/docs/1.2.0/primitives/a-sphere.html
 *
 * @example
 * ```tsx
 * <Sphere color="yellow" radius={5} />
 * ```
 */
export default function Sphere(props: Props & EntityProps): JSX.Element {
  const sphereKeys = [
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
    'phiLength',
    'phiStart',
    'radius',
    'repeat',
    'roughness',
    'segmentsHeight',
    'segmentsWidth',
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
    <a-sphere
      {...toProps(props, sphereKeys)}
      {...toSphereProps(props)}
    >
      {children}
    </a-sphere>
  );
}
