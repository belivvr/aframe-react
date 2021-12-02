import React from 'react';

import { EntityProps, toProps } from '../../core';

interface Props {
  ambientOcclusionMap?: unknown;
  ambientOcclusionMapIntensity?: unknown;
  ambientOcclusionTextureOffset?: unknown;
  ambientOcclusionTextureRepeat?: unknown;
  color?: unknown;
  depth?: unknown;
  displacementBias?: unknown;
  displacementMap?: unknown;
  displacementScale?: unknown;
  displacementTextureOffset?: unknown;
  displacementTextureRepeat?: unknown;
  envMap?: unknown;
  fog?: unknown;
  height?: unknown;
  metalness?: unknown;
  normalMap?: unknown;
  normalScale?: unknown;
  normalTextureOffset?: unknown;
  normalTextureRepeat?: unknown;
  repeat?: unknown;
  roughness?: unknown;
  segmentsDepth?: unknown;
  segmentsHeight?: unknown;
  segmentsWidth?: unknown;
  sphericalEnvMap?: unknown;
  src?: unknown;
  width?: unknown;
  wireframe?: unknown;
  wireframeLinewidth?: unknown;
}

function toBoxProps({
  ambientOcclusionMap,
  ambientOcclusionMapIntensity,
  ambientOcclusionTextureOffset,
  ambientOcclusionTextureRepeat,
  color,
  depth,
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
  segmentsDepth,
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
    'ambient-occlusion-texture-offset': ambientOcclusionTextureOffset,
    'ambient-occlusion-texture-repeat': ambientOcclusionTextureRepeat,
    color,
    depth,
    'displacement-bias': displacementBias,
    'displacement-map': displacementMap,
    'displacement-scale': displacementScale,
    'displacement-texture-offset': displacementTextureOffset,
    'displacement-texture-repeat': displacementTextureRepeat,
    'env-map': envMap,
    fog,
    height,
    metalness,
    'normal-map': normalMap,
    'normal-scale': normalScale,
    'normal-texture-offset': normalTextureOffset,
    'normal-texture-repeat': normalTextureRepeat,
    repeat,
    roughness,
    'segments-depth': segmentsDepth,
    'segments-height': segmentsHeight,
    'segments-width': segmentsWidth,
    'spherical-env-map': sphericalEnvMap,
    src,
    width,
    wireframe,
    'wireframe-linewidth': wireframeLinewidth,
  };
}

export default function Box(props: Props & EntityProps): JSX.Element {
  const { children } = props;

  return (
    <a-box
      {...toProps(props)}
      {...toBoxProps(props)}
    >
      {children}
    </a-box>
  );
}
