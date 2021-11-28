export type Hand = '' | 'left' | 'right';
export type HandModelStyle = 'lowPoly' | 'highPoly' | 'toon';
export type Vec3 = {
  x: number;
  y: number;
  z: number;
};

/**
 * @see https://aframe.io/docs/1.2.0/components/geometry.html#built-in-geometries
 */
export type Geometries = 'box' | 'circle' | 'cone' | 'cylinder' | 'dodecahedron' | 'octahedron' | 'plane' | 'ring' | 'sphere' | 'tetrahedron' | 'torus' | 'torusKnot' | 'triangle';

export function Vec3ToString(vec3: Vec3) {
  return `${vec3.x} ${vec3.y} ${vec3.z}`;
}
