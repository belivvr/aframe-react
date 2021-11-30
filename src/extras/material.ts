import type { Vec2 } from '../components/types';

/**
 * Ambient occlusion map. Used to add shadows to the mesh.
 * Can either be a selector to an <img>, or an inline URL. Requires 2nd set of UVs (see below).
 */
export type AmbientOcclusionMap = string;

/**
 * The intensity of the ambient occlusion map, a number between 0 and 1.
 */
export type AmbientOcclusionMapIntensity = number;

/**
 * How many times the ambient occlusion texture repeats in the X and Y direction.
 */
export type AmbientOcclusionTextureRepeat = Vec2;

/**
 * How the ambient occlusion texture is offset in the x y direction.
 */
export type AmbientOcclusionTextureOffset = Vec2;

/**
 * Base diffuse color.
 */
export type Color = string;

/**
 * Displacement map.
 * Used to distort a mesh. Can either be a selector to an <img>, or an inline URL.
 */
export type DisplacementMap = string;

/**
 * The intensity of the displacement map effect
 */
export type DisplacementScale = number;

/**
 * The zero point of the displacement map.
 */
export type DisplacementBias = number;

/**
 * How many times the displacement texture repeats in the X and Y direction.
 */
export type DisplacementTextureRepeat = Vec2;

/**
 * How the displacement texture is offset in the x y direction.
 */
export type DisplacementTextureOffset = Vec2;

/**
 * The color of the emissive lighting component.
 * Used to make objects produce light even without other lighting in the scene.
 */
export type Emissive = string;

/**
 * Intensity of the emissive lighting component.
 */
export type EmissiveIntensity = number;

/**
 * Height of video (in pixels), if defining a video texture.
 */
export type Height = number;

/**
 * Environment cubemap texture for reflections.
 * Can be a selector to or a comma-separated list of URLs.
 */
export type EnvMap = string;

/**
 * Whether or not material is affected by fog.
 */
export type Fog = boolean;

/**
 * How metallic the material is from 0 to 1.
 */
export type Metalness = number;

/**
 * Normal map.
 * Used to add the illusion of complex detail.
 * Can either be a selector to an <img>, or an inline URL.
 */
export type NormalMap = string;

/**
 * Scale of the effect of the normal map in the X and Y directions.
 */
export type NormalScale = Vec2;

/**
 * How many times the normal texture repeats in the X and Y direction.
 */
export type NormalTextureRepeat = Vec2;

/**
 * How the normal texture is offset in the x y direction.
 */
export type NormalTextureOffset = Vec2;

/**
 * How many times a texture (defined by src) repeats in the X and Y direction.
 */
export type Repeat = Vec2;

/**
 * How rough the material is from 0 to 1.
 * A rougher material will scatter reflected light in more directions than a smooth material.
 */
export type Roughness = number;

/**
 * Environment spherical texture for reflections.
 * Can either be a selector to an <img>, or an inline URL.
 */
export type SphericalEnvMap = string;

/**
 * Width of video (in pixels), if defining a video texture.
 */
export type Width = number;

/**
 * Whether to render just the geometry edges.
 */
export type Wireframe = boolean;

/**
 * Width in px of the rendered line.
 */
export type WireframeLinewidth = number;

/**
 * Image or video texture map. Can either be a selector to an <img> or <video>, or an inline URL.
 */
export type Src = string;

interface Props {
  AmbientOcclusionMap?: AmbientOcclusionMap;
  AmbientOcclusionMapIntensity?: AmbientOcclusionMapIntensity;
  AmbientOcclusionTextureRepeat?: AmbientOcclusionTextureRepeat;
  AmbientOcclusionTextureOffset?: AmbientOcclusionTextureOffset;
  Color?: Color;
  DisplacementMap?: DisplacementMap;
  DisplacementScale?: DisplacementScale;
  DisplacementBias?: DisplacementBias;
  DisplacementTextureRepeat?: DisplacementTextureRepeat;
  DisplacementTextureOffset?: DisplacementTextureOffset;
  Emissive?: Emissive;
  EmissiveIntensity?: EmissiveIntensity;
  Height?: Height;
  EnvMap?: EnvMap;
  Fog?: Fog;
  Metalness?: Metalness;
  NormalMap?: NormalMap;
  NormalScale?: NormalScale;
  NormalTextureRepeat?: NormalTextureRepeat;
  NormalTextureOffset?: NormalTextureOffset;
  Repeat?: Repeat;
  Roughness?: Roughness;
  SphericalEnvMap?: SphericalEnvMap;
  Width?: Width;
  Wireframe?: Wireframe;
  WireframeLinewidth?: WireframeLinewidth;
  Src?: Src;
}

export const Default: Props = {
  AmbientOcclusionMapIntensity: 1,
  AmbientOcclusionTextureRepeat: { x: 1, y: 1 },
  AmbientOcclusionTextureOffset: { x: 0, y: 0 },
  Color: '#fff',
  DisplacementScale: 1,
  DisplacementBias: 0.5,
  DisplacementTextureRepeat: { x: 1, y: 1 },
  DisplacementTextureOffset: { x: 0, y: 0 },
  Emissive: '#000',
  EmissiveIntensity: 1,
  Height: 360,
  Fog: true,
  Metalness: 0,
  NormalScale: { x: 1, y: 1 },
  NormalTextureRepeat: { x: 1, y: 1 },
  NormalTextureOffset: { x: 0, y: 0 },
  Repeat: { x: 1, y: 1 },
  Roughness: 0.5,
  Width: 640,
  Wireframe: false,
  WireframeLinewidth: 2,
};
