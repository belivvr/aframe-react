export type Hand = '' | 'left' | 'right';
export type HandModelStyle = 'lowPoly' | 'highPoly' | 'toon';

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

export type { Vec2Props } from './Vec2';
export type { Vec3Props } from './Vec3';
export { Vec2 } from './Vec2';
export { Vec3 } from './Vec3';
