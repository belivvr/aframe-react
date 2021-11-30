import React from 'react';

import type {
  AmbientOcclusionMap,
  AmbientOcclusionMapIntensity,
  AmbientOcclusionTextureOffset,
  AmbientOcclusionTextureRepeat,
  Color,
  DisplacementBias,
  DisplacementMap,
  DisplacementScale,
  DisplacementTextureOffset,
  DisplacementTextureRepeat,
  EnvMap,
  Fog,
  Metalness,
  NormalMap,
  NormalScale,
  NormalTextureOffset,
  NormalTextureRepeat,
  Repeat,
  Roughness,
  SphericalEnvMap,
  Src,
  Wireframe,
  WireframeLinewidth,
} from '../material';
import type { Box as BoxGeometry } from '../geometry';

type Props = BoxGeometry & {
  id?: string;
  className?: string;
} & {
  ambientOcclusionMap?: AmbientOcclusionMap,
  ambientOcclusionMapIntensity?: AmbientOcclusionMapIntensity,
  ambientOcclusionTextureOffset?: AmbientOcclusionTextureOffset,
  ambientOcclusionTextureRepeat?: AmbientOcclusionTextureRepeat,
  color?: Color,
  displacementBias?: DisplacementBias,
  displacementMap?: DisplacementMap,
  displacementScale?: DisplacementScale,
  displacementTextureOffset?: DisplacementTextureOffset,
  displacementTextureRepeat?: DisplacementTextureRepeat,
  envMap?: EnvMap,
  fog?: Fog,
  metalness?: Metalness,
  normalMap?: NormalMap,
  normalScale?: NormalScale,
  normalTextureOffset?: NormalTextureOffset,
  normalTextureRepeat?: NormalTextureRepeat,
  repeat?: Repeat,
  roughness?: Roughness,
  sphericalEnvMap?: SphericalEnvMap,
  src?: Src,
  wireframe?: Wireframe,
  wireframeLinewidth?: WireframeLinewidth,
};

export default function Box({
  id,
  className,
  width,
  height,
  depth,
  segmentsDepth,
  segmentsHeight,
  segmentsWidth,
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
  metalness,
  normalMap,
  normalScale,
  normalTextureOffset,
  normalTextureRepeat,
  repeat,
  roughness,
  sphericalEnvMap,
  src,
  wireframe,
  wireframeLinewidth,
}: Props): JSX.Element {
  return (
    <a-box
      id={id}
      className={className}
      width={width}
      height={height}
      depth={depth}
      segments-depth={segmentsDepth}
      segments-height={segmentsHeight}
      segments-width={segmentsWidth}
      ambient-occlusion-map={ambientOcclusionMap}
      ambient-occlusion-map-intensity={ambientOcclusionMapIntensity}
      ambient-occlusion-texture-offset={ambientOcclusionTextureOffset}
      ambient-occlusion-texture-repeat={ambientOcclusionTextureRepeat}
      color={color}
      displacement-bias={displacementBias}
      displacement-map={displacementMap}
      displacement-scale={displacementScale}
      displacement-texture-offset={displacementTextureOffset}
      displacement-texture-repeat={displacementTextureRepeat}
      env-map={envMap}
      fog={fog}
      metalness={metalness}
      normal-map={normalMap}
      normal-scale={normalScale}
      normal-texture-offset={normalTextureOffset}
      normal-texture-repeat={normalTextureRepeat}
      repeat={repeat}
      roughness={roughness}
      spherical-env-map={sphericalEnvMap}
      src={src}
      wireframe={wireframe}
      wireframe-linewidth={wireframeLinewidth}
    />
  );
}
