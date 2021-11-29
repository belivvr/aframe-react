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

export function Vec2ToString(vec2: Vec2) {
  return `${vec2.x} ${vec2.y}`;
}

export function Vec3ToString(vec3: Vec3) {
  return `${vec3.x} ${vec3.y} ${vec3.z}`;
}
