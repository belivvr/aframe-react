import React from 'react';

import type { Vec2Props } from '../../components';
import { Vec2 } from '../../components';
import { EntityProps, toProps } from '../../core';

interface Props {
  ambientOcclusionMap?: string;
  ambientOcclusionMapIntensity?: number;
  ambientOcclusionTextureOffset?: Vec2Props;
  ambientOcclusionTextureRepeat?: Vec2Props;
  color?: string;
  depth?: number;
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
  repeat?: Vec2Props;
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
    'ambient-occlusion-texture-offset': ambientOcclusionTextureOffset && new Vec2(ambientOcclusionTextureOffset).toString(),
    'ambient-occlusion-texture-repeat': ambientOcclusionTextureRepeat && new Vec2(ambientOcclusionTextureRepeat).toString(),
    color,
    depth,
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
    'normal-scale': normalScale,
    'normal-texture-offset': normalTextureOffset && new Vec2(normalTextureOffset).toString(),
    'normal-texture-repeat': normalTextureRepeat && new Vec2(normalTextureRepeat).toString(),
    repeat: repeat && new Vec2(repeat).toString(),
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
  const boxProps = [
    'ambientOcclusionMap',
    'ambientOcclusionMapIntensity',
    'ambientOcclusionTextureOffset',
    'ambientOcclusionTextureRepeat',
    'color',
    'depth',
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
    'repeat',
    'roughness',
    'segmentsDepth',
    'segmentsHeight',
    'segmentsWidth',
    'sphericalEnvMap',
    'src',
    'width',
    'wireframe',
    'wireframeLinewidth',
  ];

  return (
    <a-box
      {...toProps(props, boxProps)}
      {...toBoxProps(props)}
    >
      {children}
    </a-box>
  );
}
