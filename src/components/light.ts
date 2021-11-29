import type { LightType, LightColor } from './types';

/**
 * The light component defines the entity as a source of light.
 * Light affects all materials that have not specified a flat shading model with `shader: flat`.
 * Note that lights are computationally expensive we should limit number of lights in a scene.
 *
 * @see https://aframe.io/docs/1.2.0/components/light.html
 */
export interface LightProps {
  /**
   * When type in ['spot']
   *
   * Maximum extent of spot light from its direction (in degrees).
   */
  angle?: number;

  /**
   * When type in ['ambient', 'directional', 'hemisphere', 'point', 'spot']
   *
   * - **Basic**: Light color.
   * - **Hemisphere**: Light color from above.
   */
  color?: LightColor;

  /**
   * When type in ['probe']
   */
  envMap?: string;

  /**
   * When type in ['hemisphere']
   *
   * Light color from below.
   */
  groundColor?: number;

  /**
   * When type in ['point', 'spot']
   *
   * Amount the light dims along the distance of the light.
   */
  decay?: number;

  /**
   * When type in ['point', 'spot']
   *
   * Distance where intensity becomes 0.
   * If distance is 0, then the point light does not decay with distance.
   */
  distance?: number;

  /**
   * When any type
   *
   * Light strength.
   */
  intensity?: number;

  /**
   * When type in ['spot']
   *
   * Percent of the spotlight cone that is attenuated due to penumbra.
   */
  penumbra?: number;

  /**
   * One of `ambient`, `directional`, `hemisphere`, `point`, `spot`.
   */
  type?: LightType;

  /**
   * When type in ['spot', 'directional']
   *
   * element the spot should point to.
   * set to null to transform spotlight by orientation, pointing to it’s -Z axis.
   *
   * @example
   * '#directionaltarget'
   */
  target?: string;

  /**
   * When type in ['point', 'spot', 'directional']
   *
   * Whether this light casts shadows on the scene.
   */
  castShadow?: boolean

  /**
   * When castShadow is true
   *
   * Offset depth when deciding whether a surface is in shadow.
   * Tiny adjustments here (in the order of +/-0.0001) may reduce artifacts in shadows.
   */;
  shadowBias?: number;

  /**
   * When castShadow is true
   *
   * Far plane of shadow camera frustum.
   */
  shadowCameraFar?: number;

  /**
   * When castShadow is true
   *
   * Shadow camera’s FOV.
   */
  shadowCameraFov?: number;

  /**
   * When castShadow is true
   *
   * Near plane of shadow camera frustum.
   */
  shadowCameraNear?: number;

  /**
   * When castShadow is true
   *
   * Top plane of shadow camera frustum.
   */
  shadowCameraTop?: number;

  /**
   * When castShadow is true
   *
   * Right plane of shadow camera frustum.
   */
  shadowCameraRight?: number;

  /**
   * When castShadow is true
   *
   * Bottom plane of shadow camera frustum.
   */
  shadowCameraBottom?: number;

  /**
   * When castShadow is true
   *
   * Left plane of shadow camera frustum.
   */
  shadowCameraLeft?: number;

  /**
   * When castShadow is true
   *
   * Displays a visual aid showing the shadow camera’s position and frustum.
   * This is the light’s view of the scene, used to project shadows.
   */
  shadowCameraVisible?: boolean;

  /**
   * When castShadow is true
   *
   * Shadow map’s vertical resolution.
   * Larger shadow maps display more crisp shadows, at the cost of performance.
   */
  shadowMapHeight?: number;

  /**
   * When castShadow is true
   *
   * Shadow map’s horizontal resolution.
   */
  shadowMapWidth?: number;

  /**
   * When castShadow is true
   */
  shadowRadius?: number;
}

export class Light implements LightProps {
  readonly angle?: number;

  readonly color?: LightColor;

  readonly envMap?: string;

  readonly groundColor?: number;

  readonly decay?: number;

  readonly distance?: number;

  readonly intensity?: number;

  readonly penumbra?: number;

  readonly type?: LightType;

  readonly target?: string;

  readonly castShadow?: boolean;

  readonly shadowBias?: number;

  readonly shadowCameraFar?: number;

  readonly shadowCameraFov?: number;

  readonly shadowCameraNear?: number;

  readonly shadowCameraTop?: number;

  readonly shadowCameraRight?: number;

  readonly shadowCameraBottom?: number;

  readonly shadowCameraLeft?: number;

  readonly shadowCameraVisible?: boolean;

  readonly shadowMapHeight?: number;

  readonly shadowMapWidth?: number;

  readonly shadowRadius?: number;

  constructor({
    angle = 60,
    color,
    envMap,
    groundColor,
    decay = 1,
    distance = 0.0,
    intensity = 1.0,
    penumbra = 0,
    type = 'directional',
    target,
    castShadow = false,
    shadowBias = 0,
    shadowCameraFar = 500,
    shadowCameraFov = 90,
    shadowCameraNear = 0,
    shadowCameraTop = 5,
    shadowCameraRight = 5,
    shadowCameraBottom = -5,
    shadowCameraLeft = -5,
    shadowCameraVisible = false,
    shadowMapHeight = 512,
    shadowMapWidth = 512,
    shadowRadius = 1,
  }: LightProps) {
    this.angle = angle;
    this.color = color;
    this.envMap = envMap;
    this.groundColor = groundColor;
    this.decay = decay;
    this.distance = distance;
    this.intensity = intensity;
    this.penumbra = penumbra;
    this.type = type;
    this.target = target;
    this.castShadow = castShadow;
    this.shadowBias = shadowBias;
    this.shadowCameraFar = shadowCameraFar;
    this.shadowCameraFov = shadowCameraFov;
    this.shadowCameraNear = shadowCameraNear;
    this.shadowCameraTop = shadowCameraTop;
    this.shadowCameraRight = shadowCameraRight;
    this.shadowCameraBottom = shadowCameraBottom;
    this.shadowCameraLeft = shadowCameraLeft;
    this.shadowCameraVisible = shadowCameraVisible;
    this.shadowMapHeight = shadowMapHeight;
    this.shadowMapWidth = shadowMapWidth;
    this.shadowRadius = shadowRadius;
  }

  public toString = (): string => `angle:${this.angle};`
                                + `${this.color ? `color:${this.color};` : ''}`
                                + `${this.envMap ? `envMap:${this.envMap};` : ''}`
                                + `${this.groundColor ? `groundColor:${this.groundColor};` : ''}`
                                + `decay:${this.decay};`
                                + `distance:${this.distance};`
                                + `intensity:${this.intensity};`
                                + `penumbra:${this.penumbra};`
                                + `type:${this.type};`
                                + `${this.target ? `target:${this.target};` : ''}`
                                + `castShadow:${this.castShadow};`
                                + `shadowBias:${this.shadowBias};`
                                + `shadowCameraFar:${this.shadowCameraFar};`
                                + `shadowCameraFov:${this.shadowCameraFov};`
                                + `shadowCameraNear:${this.shadowCameraNear};`
                                + `shadowCameraTop:${this.shadowCameraTop};`
                                + `shadowCameraRight:${this.shadowCameraRight};`
                                + `shadowCameraBottom:${this.shadowCameraBottom};`
                                + `shadowCameraLeft:${this.shadowCameraLeft};`
                                + `shadowCameraVisible:${this.shadowCameraVisible};`
                                + `shadowMapHeight:${this.shadowMapHeight};`
                                + `shadowMapWidth:${this.shadowMapWidth};`
                                + `shadowRadius:${this.shadowRadius};`;
}
