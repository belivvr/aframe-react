export type Hand = '' | 'left' | 'right';
export type HandModelStyle = 'lowPoly' | 'highPoly' | 'toon';
export type Vec2 = {
  x: number;
  y: number;
};
export type Vec3 = {
  x: number;
  y: number;
  z: number;
};

/**
 * @see https://aframe.io/docs/1.2.0/components/geometry.html#built-in-geometries
 */
export type Geometries = 'box' | 'circle' | 'cone' | 'cylinder' | 'dodecahedron' | 'octahedron' | 'plane' | 'ring' | 'sphere' | 'tetrahedron' | 'torus' | 'torusKnot' | 'triangle';
export type ModelStyle = 'dots' | 'mesh';
export type LayerType = 'quad' | 'monocubemap' | 'stereocubemap';
export type LightColor = 'ambient' | 'directional' | 'hemisphere' | 'point' | 'spot';
export type LightType = LightColor | 'probe';
export type MaterialShape = 'standard' | 'plat';
export type MaterialSide = 'front' | 'back' | 'double';
export type MaterialVertexColor = 'face' | 'vertex';
export type MaterialBlending = 'none' | 'normal' | 'additive' | 'subtractive' | 'multiply';
export type OculusTouchControllerType = 'auto' | 'oculus-touch' | 'oculus-touch-v2' | 'oculus-touch-v3';
export type SoundDistanceModel = 'linear' | 'inverse' | 'exponential';
export type TextAlign = 'left' | 'right' | 'center';
export type TextAnchor = 'left' | 'right' | 'center' | 'align';
export type TextBaseline = 'top' | 'center' | 'bottom';
export type TextSide = 'front' | 'back' | 'double';
export type TextWhiteSpace = 'normal' | 'pre' | 'nowrap';
export type Shader = 'portal' | 'flat' | 'ios10hls' | 'msdf' | 'sdf' | 'standard';
export type WASDAxis = 'x' | 'y' | 'z';

export function Vec2ToString(vec2: Vec2) {
  return `${vec2.x} ${vec2.y}`;
}

export function Vec3ToString(vec3: Vec3) {
  return `${vec3.x} ${vec3.y} ${vec3.z}`;
}
