import React from 'react';

import type { Vec2 } from '../../components';
import { Vec2ToString } from '../../components';
import { EntityProps, toProps } from '../../core';

interface Props {
  ambientOcclusionMap?: string;
  ambientOcclusionMapIntensity?: number;
  ambientOcclusionTextureOffset?: Vec2;
  ambientOcclusionTextureRepeat?: Vec2;
  color?: string;
  depth?: number;
  displacementBias?: number;
  displacementMap?: string;
  displacementScale?: number;
  displacementTextureOffset?: Vec2;
  displacementTextureRepeat?: Vec2;
  envMap?: string;
  fog?: boolean;
  height?: number;
  metalness?: number;
  normalMap?: string;
  normalScale?: Vec2;
  normalTextureOffset?: Vec2;
  normalTextureRepeat?: Vec2;
  repeat?: Vec2;
  roughness?: number;
  segmentsDepth?: number;
  segmentsHeight?: number;
  segmentsWidth?: number;
  sphericalEnvMap?: string;
  src?: string;
  width?: number;
  wireframe?: boolean;
  wireframeLinewidth?: number;
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
    'ambient-occlusion-texture-offset': ambientOcclusionTextureOffset && Vec2ToString(ambientOcclusionTextureOffset),
    'ambient-occlusion-texture-repeat': ambientOcclusionTextureRepeat && Vec2ToString(ambientOcclusionTextureRepeat),
    color,
    depth,
    'displacement-bias': displacementBias,
    'displacement-map': displacementMap,
    'displacement-scale': displacementScale,
    'displacement-texture-offset': displacementTextureOffset && Vec2ToString(displacementTextureOffset),
    'displacement-texture-repeat': displacementTextureRepeat && Vec2ToString(displacementTextureRepeat),
    'env-map': envMap,
    fog,
    height,
    metalness,
    'normal-map': normalMap,
    'normal-scale': normalScale,
    'normal-texture-offset': normalTextureOffset && Vec2ToString(normalTextureOffset),
    'normal-texture-repeat': normalTextureRepeat && Vec2ToString(normalTextureRepeat),
    repeat: repeat && Vec2ToString(repeat),
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

/**
 * The box primitive creates shapes such as boxes, cubes, or walls.
 *
 * @see https://aframe.io/docs/1.2.0/primitives/a-box.html
 *
 * @example
 *
 * ```tsx
 * <Assets>
 *   <img id="texture" src="texture.png" />
 * </Assets>
 *
 * // Basic box.
 * <Box color="tomato" depth={2} height={4} width={0.5} />
 *
 * // Textured box.
 * <Box src="#texture" />
 * ```
 */
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
