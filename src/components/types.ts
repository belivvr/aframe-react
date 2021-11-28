export type Hand = '' | 'left' | 'right';
export type Vec3 = {
  x: number;
  y: number;
  z: number;
};

export function Vec3ToString(vec3: Vec3) {
  return `${vec3.x} ${vec3.y} ${vec3.z}`;
}
