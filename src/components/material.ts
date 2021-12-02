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
   * Texture repeat to be used.
   */
  repeat?: Vec2Props;

  /**
   * Which material to use. Defaults to the [standard material](https://aframe.io/docs/1.2.0/components/material.html#standard).
   * Can be set to the [flat material](https://aframe.io/docs/1.2.0/components/material.html#flat) or to a registered custom shader material.
   */
  shader?: MaterialShape;

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
}

export class Material implements MaterialProps {
  readonly alphaTest: number;

  readonly depthTest: boolean;

  readonly depthWrite: boolean;

  readonly flatShading: boolean;

  readonly npot: boolean;

  readonly offset: Vec2Props;

  readonly opacity: number;

  readonly repeat: Vec2Props;

  readonly shader: MaterialShape;

  readonly side: MaterialSide;

  readonly transparent: boolean;

  readonly vertexColors?: MaterialVertexColor;

  readonly visible: boolean;

  readonly blending: MaterialBlending;

  readonly dithering: boolean;

  constructor({
    alphaTest = 0.0,
    depthTest = true,
    depthWrite = true,
    flatShading = false,
    npot = false,
    offset = { x: 0, y: 0 },
    opacity = 1.0,
    repeat = { x: 1, y: 1 },
    shader = 'standard',
    side = 'front',
    transparent = false,
    vertexColors,
    visible = true,
    blending = 'normal',
    dithering = true,
  }: MaterialProps) {
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
  }

  public toString = (): string => `alphaTest:${this.alphaTest};`
                                + `depthTest:${this.depthTest};`
                                + `depthWrite:${this.depthWrite};`
                                + `flatShading:${this.flatShading};`
                                + `npot:${this.npot};`
                                + `offset:${new Vec2(this.offset).toString()};`
                                + `opacity:${this.opacity};`
                                + `repeat:${new Vec2(this.repeat).toString()};`
                                + `shader:${this.shader};`
                                + `side:${this.side};`
                                + `transparent:${this.transparent};`
                                + `${this.vertexColors ? `vertexColors:${this.vertexColors};` : ''}`
                                + `visible:${this.visible};`
                                + `blending:${this.blending};`
                                + `dithering:${this.dithering};`;
}
