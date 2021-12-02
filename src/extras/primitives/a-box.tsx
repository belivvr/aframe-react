import React from 'react';

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
  registeredComponents?: {
    [key: string]: unknown;
  }
}

export default function Box({
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
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-box
      ambient-occlusion-map={ambientOcclusionMap}
      ambient-occlusion-map-intensity={ambientOcclusionMapIntensity}
      ambient-occlusion-texture-offset={ambientOcclusionTextureOffset}
      ambient-occlusion-texture-repeat={ambientOcclusionTextureRepeat}
      color={color}
      depth={depth}
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
      repeat={repeat}
      roughness={roughness}
      segments-depth={segmentsDepth}
      segments-height={segmentsHeight}
      segments-width={segmentsWidth}
      spherical-env-map={sphericalEnvMap}
      src={src}
      width={width}
      wireframe={wireframe}
      wireframe-linewidth={wireframeLinewidth}
      {...registeredComponents}
    />
  );
}
