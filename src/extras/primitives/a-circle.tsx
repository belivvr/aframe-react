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
  Height,
  Metalness,
  NormalMap,
  NormalScale,
  NormalTextureOffset,
  NormalTextureRepeat,
  Repeat,
  Roughness,
  SphericalEnvMap,
  Src,
  Width,
  Wireframe,
  WireframeLinewidth,
} from '../material';
import type { Circle as CircleGeometry } from '../geometry';

type Props = CircleGeometry & {
  id?: string;
  className?: string;
  ambientOcclusionMap?: AmbientOcclusionMap;
  ambientOcclusionMapIntensity?: AmbientOcclusionMapIntensity;
  ambientOcclusionTextureOffset?: AmbientOcclusionTextureOffset;
  ambientOcclusionTextureRepeat?: AmbientOcclusionTextureRepeat;
  color?: Color;
  displacementBias?: DisplacementBias;
  displacementMap?: DisplacementMap;
  displacementScale?: DisplacementScale;
  displacementTextureOffset?: DisplacementTextureOffset;
  displacementTextureRepeat?: DisplacementTextureRepeat;
  envMap?: EnvMap;
  fog?: Fog;
  height?: Height;
  metalness?: Metalness;
  normalMap?: NormalMap;
  normalScale?: NormalScale;
  normalTextureOffset?: NormalTextureOffset;
  normalTextureRepeat?: NormalTextureRepeat;
  repeat?: Repeat;
  roughness?: Roughness;
  sphericalEnvMap?: SphericalEnvMap;
  src?: Src;
  width?: Width;
  wireframe?: Wireframe;
  wireframeLinewidth?: WireframeLinewidth;
};

export default function Circle({
  id,
  className,
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
}: Props): JSX.Element {
  return (
    <a-circle
      id={id}
      className={className}
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
      height={height}
      metalness={metalness}
      normal-map={normalMap}
      normal-scale={normalScale}
      normal-texture-offset={normalTextureOffset}
      normal-texture-repeat={normalTextureRepeat}
      radius={radius}
      repeat={repeat}
      roughness={roughness}
      segments={segments}
      spherical-env-map={sphericalEnvMap}
      src={src}
      theta-length={thetaLength}
      theta-start={thetaStart}
      width={width}
      wireframe={wireframe}
      wireframe-linewidth={wireframeLinewidth}
    />
  );
}
