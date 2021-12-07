import type {
  Vec2Props,
  MaterialShape,
  MaterialSide,
  MaterialVertexColor,
  MaterialBlending,
} from './types';
import { Vec2 } from './types';

/**
 * The material component gives appearance to an entity.
 * We can define properties such as color, opacity, or texture.
 * This is often paired with the [geometry component](https://aframe.io/docs/1.2.0/components/geometry.html) which provides shape.
 *
 * We can register custom materials to extend the material component
 * to provide a wide range of visual effects.
 *
 * @see https://aframe.io/docs/1.2.0/components/material.html
 */
export interface MaterialProps {
  /**
   * Alpha test threshold for transparency.
   */
  alphaTest?: number;

  /**
   * Whether depth testing is enabled when rendering the material.
   */
  depthTest?: boolean;

  depthWrite?: boolean;

  /**
   * Use `THREE.FlatShading` rather than `THREE.StandardShading`.
   */
  flatShading?: boolean;

  /**
   * Use settings for non-power-of-two (NPOT) texture.
   */
  npot?: boolean;

  /**
   * Texture offset to be used.
   */
  offset?: Vec2Props;

  /**
   * Extent of transparency.
   * If the `transparent` property is not true,
   * then the material will remain opaque and `opacity` will only affect color.
   */
  opacity?: number;

  /**
   * standard, flat
   *
   * Texture repeat to be used.
   */
  repeat?: Vec2Props;

  /**
   * Which material to use. Defaults to the [standard material](https://aframe.io/docs/1.2.0/components/material.html#standard).
   * Can be set to the [flat material](https://aframe.io/docs/1.2.0/components/material.html#flat) or to a registered custom shader material.
   */
  shader?: MaterialShape | string;

  /**
   * Which sides of the mesh to render. Can be one of `front`, `back`, or `double`.
   */
  side?: MaterialSide;

  /**
   * Whether material is transparent.
   * Transparent entities are rendered after non-transparent entities.
   */
  transparent?: boolean;

  /**
   * Whether to use vertex or face colors to shade the material.
   * Can be one of `none`, `vertex`, or `face`.
   */
  vertexColors?: MaterialVertexColor;

  /**
   * Whether material is visible. Raycasters will ignore invisible materials.
   */
  visible?: boolean;

  /**
   * The blending mode for the material’s RGB and Alpha sent to the WebGLRenderer.
   * Can be one of `none`, `normal`, `additive`, `subtractive` or `multiply`.
   */
  blending?: MaterialBlending;

  /**
   * Whether material is dithered with noise.
   * Removes banding from gradients like ones produced by lighting.
   */
  dithering?: boolean;

  /**
   * standard
   *
   * Ambient occlusion map.
   * Used to add shadows to the mesh.
   * Can either be a selector to an <img>, or an inline URL.
   * Requires 2nd set of UVs (see below).
   */
  ambientOcclusionMap?: string;

  /**
   * standard
   *
   * The intensity of the ambient occlusion map, a number between 0 and 1.
   */
  ambientOcclusionMapIntensity?: number;

  /**
   * standard
   *
   * How many times the ambient occlusion texture repeats in the X and Y direction.
   */
  ambientOcclusionTextureRepeat?: Vec2Props;

  /**
   * standard
   *
   * How the ambient occlusion texture is offset in the x y direction.
   */
  ambientOcclusionTextureOffset?: Vec2Props;

  /**
   * standard, flat
   *
   * Base diffuse color.
   */
  color?: string;

  /**
   * standard
   *
   * Displacement map. Used to distort a mesh.
   * Can either be a selector to an <img>, or an inline URL.
   */
  displacementMap?: string;

  /**
   * standard
   *
   * The intensity of the displacement map effect
   */
  displacementScale?: number;

  /**
   * standard
   *
   * The zero point of the displacement map.
   */
  displacementBias?: number;

  /**
   * standard
   *
   * How many times the displacement texture repeats in the X and Y direction.
   */
  displacementTextureRepeat?: Vec2Props;

  /**
   * standard
   *
   * How the displacement texture is offset in the x y direction.
   */
  displacementTextureOffset?: Vec2Props;

  /**
   * standard
   *
   * The color of the emissive lighting component.
   * Used to make objects produce light even without other lighting in the scene.
   */
  emissive?: string;

  /**
   * standard
   *
   * Intensity of the emissive lighting component.
   */
  emissiveIntensity?: number;

  /**
   * standard, flat
   *
   * Height of video (in pixels), if defining a video texture.
   */
  height?: number;

  /**
   * standard
   *
   * Environment cubemap texture for reflections.
   * Can be a selector to or a comma-separated list of URLs.
   */
  envMap?: string;

  /**
   * standard, flat
   *
   * Whether or not material is affected by fog.
   */
  fog?: boolean;

  /**
   * standard
   *
   * How metallic the material is from 0 to 1.
   */
  metalness?: number;

  /**
   * standard
   *
   * Normal map.
   * Used to add the illusion of complex detail.
   * Can either be a selector to an <img>, or an inline URL.
   */
  normalMap?: string;

  /**
   * standard
   *
   * Scale of the effect of the normal map in the X and Y directions.
   */
  normalScale?: Vec2Props;

  /**
   * standard
   *
   * How many times the normal texture repeats in the X and Y direction.
   */
  normalTextureRepeat?: Vec2Props;

  /**
   * standard
   *
   * How the normal texture is offset in the x y direction.
   */
  normalTextureOffset?: Vec2Props;

  /**
   * standard
   *
   * How rough the material is from 0 to 1.
   * A rougher material will scatter reflected light in more directions than a smooth material.0.5
   */
  roughness?: number;

  /**
   * standard
   *
   * Environment spherical texture for reflections.
   * Can either be a selector to an <img>, or an inline URL.
   */
  sphericalEnvMap?: string;

  /**
   * standard, flat
   *
   * Width of video (in pixels), if defining a video texture.
   */
  width?: number;

  /**
   * standard, flat
   *
   * Whether to render just the geometry edges.
   */
  wireframe?: boolean;

  /**
   * standard, flat
   *
   * Width in px of the rendered line.
   */
  wireframeLinewidth?: number;

  /**
   * standard, flat
   *
   * Image or video texture map. Can either be a selector to an <img> or <video>, or an inline URL.
   */
  src?: string;

  [key: string]: unknown;
}

export class Material implements MaterialProps {
  readonly alphaTest?: number;

  readonly depthTest?: boolean;

  readonly depthWrite?: boolean;

  readonly flatShading?: boolean;

  readonly npot?: boolean;

  readonly offset?: Vec2Props;

  readonly opacity?: number;

  readonly repeat?: Vec2Props;

  readonly shader?: MaterialShape | string;

  readonly side?: MaterialSide;

  readonly transparent?: boolean;

  readonly vertexColors?: MaterialVertexColor;

  readonly visible?: boolean;

  readonly blending?: MaterialBlending;

  readonly dithering?: boolean;

  readonly ambientOcclusionMap?: string;

  readonly ambientOcclusionMapIntensity?: number;

  readonly ambientOcclusionTextureRepeat?: Vec2Props;

  readonly ambientOcclusionTextureOffset?: Vec2Props;

  readonly color?: string;

  readonly displacementMap?: string;

  readonly displacementScale?: number;

  readonly displacementBias?: number;

  readonly displacementTextureRepeat?: Vec2Props;

  readonly displacementTextureOffset?: Vec2Props;

  readonly emissive?: string;

  readonly emissiveIntensity?: number;

  readonly height?: number;

  readonly envMap?: string;

  readonly fog?: boolean;

  readonly metalness?: number;

  readonly normalMap?: string;

  readonly normalScale?: Vec2Props;

  readonly normalTextureRepeat?: Vec2Props;

  readonly normalTextureOffset?: Vec2Props;

  readonly roughness?: number;

  readonly sphericalEnvMap?: string;

  readonly width?: number;

  readonly wireframe?: boolean;

  readonly wireframeLinewidth?: number;

  readonly src?: string;

  readonly extraProps?: string;

  [key: string]: unknown;

  constructor(props: MaterialProps) {
    const defaultKeys = [
      'alphaTest',
      'depthTest',
      'depthWrite',
      'flatShading',
      'npot',
      'offset',
      'opacity',
      'repeat',
      'shader',
      'side',
      'transparent',
      'vertexColors',
      'visible',
      'blending',
      'dithering',
      'ambientOcclusionMap',
      'ambientOcclusionMapIntensity',
      'ambientOcclusionTextureRepeat',
      'ambientOcclusionTextureOffset',
      'color',
      'displacementMap',
      'displacementScale',
      'displacementBias',
      'displacementTextureRepeat',
      'displacementTextureOffset',
      'emissive',
      'emissiveIntensity',
      'height',
      'envMap',
      'fog',
      'metalness',
      'normalMap',
      'normalScale',
      'normalTextureRepeat',
      'normalTextureOffset',
      'roughness',
      'sphericalEnvMap',
      'width',
      'wireframe',
      'wireframeLinewidth',
      'src',
    ];

    const {
      alphaTest,
      depthTest,
      depthWrite,
      flatShading,
      npot,
      offset,
      opacity,
      repeat,
      shader,
      side,
      transparent,
      vertexColors,
      visible,
      blending,
      dithering,
      ambientOcclusionMap,
      ambientOcclusionMapIntensity,
      ambientOcclusionTextureRepeat,
      ambientOcclusionTextureOffset,
      color,
      displacementMap,
      displacementScale,
      displacementBias,
      displacementTextureRepeat,
      displacementTextureOffset,
      emissive,
      emissiveIntensity,
      height,
      envMap,
      fog,
      metalness,
      normalMap,
      normalScale,
      normalTextureRepeat,
      normalTextureOffset,
      roughness,
      sphericalEnvMap,
      width,
      wireframe,
      wireframeLinewidth,
      src,
    } = props;

    this.alphaTest = alphaTest;
    this.depthTest = depthTest;
    this.depthWrite = depthWrite;
    this.flatShading = flatShading;
    this.npot = npot;
    this.offset = offset;
    this.opacity = opacity;
    this.repeat = repeat;
    this.shader = shader;
    this.side = side;
    this.transparent = transparent;
    this.vertexColors = vertexColors;
    this.visible = visible;
    this.blending = blending;
    this.dithering = dithering;
    this.ambientOcclusionMap = ambientOcclusionMap;
    this.ambientOcclusionMapIntensity = ambientOcclusionMapIntensity;
    this.ambientOcclusionTextureRepeat = ambientOcclusionTextureRepeat;
    this.ambientOcclusionTextureOffset = ambientOcclusionTextureOffset;
    this.color = color;
    this.displacementMap = displacementMap;
    this.displacementScale = displacementScale;
    this.displacementBias = displacementBias;
    this.displacementTextureRepeat = displacementTextureRepeat;
    this.displacementTextureOffset = displacementTextureOffset;
    this.emissive = emissive;
    this.emissiveIntensity = emissiveIntensity;
    this.height = height;
    this.envMap = envMap;
    this.fog = fog;
    this.metalness = metalness;
    this.normalMap = normalMap;
    this.normalScale = normalScale;
    this.normalTextureRepeat = normalTextureRepeat;
    this.normalTextureOffset = normalTextureOffset;
    this.roughness = roughness;
    this.sphericalEnvMap = sphericalEnvMap;
    this.width = width;
    this.wireframe = wireframe;
    this.wireframeLinewidth = wireframeLinewidth;
    this.src = src;

    this.extraProps = Object.keys(props)
      .filter((prop) => !defaultKeys.includes(prop))
      .map((prop) => `${prop}:${props[prop]};`)
      .join('');
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key] !== undefined && this[key] !== '')
    .map((key: string) => {
      if ([
        'offset',
        'repeat',
        'ambientOcclusionTextureRepeat',
        'ambientOcclusionTextureOffset',
        'displacementTextureRepeat',
        'displacementTextureOffset',
        'normalScale',
        'normalTextureRepeat',
        'normalTextureOffset',
      ].includes(key)) {
        return `${key}:${new Vec2(this[key] as Vec2Props).toString()};`;
      }
      return `${key}:${this[key]};`;
    })
    .join('');
}
