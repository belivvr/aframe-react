import React from 'react';

interface Props {
  ambientOcclusionMap?: unknown;
  ambientOcclusionMapIntensity?: unknown;
  ambientOcclusionTextureOffset?: unknown;
  ambientOcclusionTextureRepeat?: unknown;
  color?: unknown;
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
  p?: unknown;
  q?: unknown;
  radius?: unknown;
  radiusTubular?: unknown;
  repeat?: unknown;
  roughness?: unknown;
  segmentsRadial?: unknown;
  segmentsTubular?: unknown;
  sphericalEnvMap?: unknown;
  src?: unknown;
  width?: unknown;
  wireframe?: unknown;
  wireframeLinewidth?: unknown;
}

export default function TorusKnot({
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
}: Props): JSX.Element {
  return (
    <a-torus-knot
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
      p={p}
      q={q}
      radius={radius}
      radius-tubular={radiusTubular}
      repeat={repeat}
      roughness={roughness}
      segments-radial={segmentsRadial}
      segments-tubular={segmentsTubular}
      spherical-env-map={sphericalEnvMap}
      src={src}
      width={width}
      wireframe={wireframe}
      wireframe-linewidth={wireframeLinewidth}
    />
  );
}
