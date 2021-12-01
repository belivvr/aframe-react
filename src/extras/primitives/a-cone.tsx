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
  openEnded?: unknown;
  radiusBottom?: unknown;
  radiusTop?: unknown;
  repeat?: unknown;
  roughness?: unknown;
  segmentsHeight?: unknown;
  segmentsRadial?: unknown;
  sphericalEnvMap?: unknown;
  src?: unknown;
  thetaLength?: unknown;
  thetaStart?: unknown;
  width?: unknown;
  wireframe?: unknown;
  wireframeLinewidth?: unknown;
}

export default function Cone({
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
  openEnded,
  radiusBottom,
  radiusTop,
  repeat,
  roughness,
  segmentsHeight,
  segmentsRadial,
  sphericalEnvMap,
  src,
  thetaLength,
  thetaStart,
  width,
  wireframe,
  wireframeLinewidth,
}: Props): JSX.Element {
  return (
    <a-cone
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
      open-ended={openEnded}
      radius-bottom={radiusBottom}
      radius-top={radiusTop}
      repeat={repeat}
      roughness={roughness}
      segments-height={segmentsHeight}
      segments-radial={segmentsRadial}
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
