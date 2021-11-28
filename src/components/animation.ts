export type EaseIn = 'easeInQuad' | 'easeInCubic' | 'easeInQuart' | 'easeInQuint' | 'easeInSine' | 'easeInExpo' | 'easeInCirc' | 'easeInBack' | 'easeInElastic';
export type EaseOut = 'easeOutQuad' | 'easeOutCubic' | 'easeOutQuart' | 'easeOutQuint' | 'easeOutSine' | 'easeOutExpo' | 'easeOutCirc' | 'easeOutBack' | 'easeOutElastic';
export type EaseInOut = 'easeInOutQuad' | 'easeInOutCubic' | 'easeInOutQuart' | 'easeInOutQuint' | 'easeInOutSine' | 'easeInOutExpo' | 'easeInOutCirc' | 'easeInOutBack' | 'easeInOutElastic';
export type Others = 'linear';
export type Dir = '' | 'alternate' | 'reverse';

/**
 * @see https://aframe.io/docs/1.2.0/components/animation.html#easings
 */
export type Easing = EaseIn | EaseOut | EaseInOut | Others;

/**
 * The animation component lets us animate and tween values including:
 *
 * - Component values (e.g., `position`, `visible`)
 * - Component property values (e.g., `light.intensity`)
 *
 * We can also tween values directly for better performance
 * versus going through `.setAttribute`, such as by animating values:
 *
 * - On the object3D (e.g., `object3D.position.y`, `object3D.rotation.z`)
 * - Directly within a component
 * (e.g., `components.material.material.color`, `components.text.material.uniforms.opacity.value`),

 * @see https://aframe.io/docs/1.2.0/components/animation.html
 */
export interface AnimationProps {
  /**
   * Whether or not the animation should `autoplay`.
   * Should be specified if the animation is defined for the [`animation-timeline` component](https://www.npmjs.com/package/aframe-animation-timeline-component).
   */
  autoplay?: boolean;

  /**
   * How long (milliseconds) to wait before starting.
   */
  delay?: number;

  /**
   * Which dir to go from `from` to `to`.
   */
  dir?: Dir;

  /**
   * How long (milliseconds) each cycle of the animation is.
   */
  dur?: number;

  /**
   * Easing function of animation. To ease in, ease out, ease in and out.
   */
  easing?: Easing;

  /**
   * How much to bounce (higher is stronger).
   */
  elasticity?: number;

  /**
   * If disabled, animation will stop and startEvents will not trigger animation start.
   */
  enabled?: boolean;

  /**
   * Initial value at start of animation.
   * If not specified, the current property value of the entity will be used
   * (will be sampled on each animation start).
   * It is best to specify a `from` value when possible for stability.
   *
   * @example
   * 'red'
   * '#FFCCAA'
   * 'rgb(100, 100, 100)'
   */
  from?: string | boolean;

  /**
   * How many times the animation should repeat. If the value is `true`,
   * the animation will repeat infinitely.
   */
  loop?: boolean;

  /**
   * Property to animate. Can be a component name,
   * a dot-delimited property of a component (e.g., `material.color`), or a plain attribute.
   *
   * @example
   * 'position'
   * 'rotation'
   * 'material.color'
   * 'components.material.material.color'
   * 'light.intensity'
   * 'visible'
   * 'object3D.position.z'
   */
  property?: string;

  /**
   * Comma-separated list of events to listen to trigger a restart and play.
   * Animation will not autoplay if specified.
   * `startEvents` will **restart** the animation, use `pauseEvents` to resume it.
   * If there are other animation components on the entity animating the same property,
   * those animations will be automatically paused to not conflict.
   *
   * @example ['mouseenter']
   */
  startEvents?: string[];

  /**
   * Comma-separated list of events to listen to trigger pause. Can be resumed with `resumeEvents`.
   *
   * @example ['mouseleave']
   */
  pauseEvents?: string[];

  /**
   * Comma-separated list of events to listen to trigger resume after pausing.
   *
   * @example ['mouseenter']
   */
  resumeEvents?: string[];

  /**
   * Whether to round values.
   */
  round?: boolean;

  /**
   * Target value at end of animation.
   *
   * @example
   * 'blue'
   * '#FFCCAA'
   * 'hsl(213, 100%, 70%)'
   */
  to?: string | boolean;

  /**
   * Right now only supports `color` for tweening `isRawProperty` color XYZ/RGB vector values.
   *
   * @example 'color';
   */
  type?: string;

  /**
   * Flag to animate an arbitrary object property
   * outside of A-Frame components for better performance.
   * If set to true,
   * for example, we can set property to like `components.material.material.opacity`.
   * If `property` starts with `components` or `object3D`, this will be inferred to `true`.
   */
  isRawProperty?: boolean;
}

export class Animation implements AnimationProps {
  readonly autoplay: boolean;

  readonly delay: number;

  readonly dir: Dir;

  readonly dur: number;

  readonly easing: Easing;

  readonly elasticity: number;

  readonly enabled: boolean;

  readonly from: string | boolean;

  readonly loop: boolean;

  readonly property: string;

  readonly startEvents: string[];

  readonly pauseEvents: string[];

  readonly resumeEvents: string[];

  readonly round: boolean;

  readonly to: string | boolean;

  readonly type: string;

  readonly isRawProperty: boolean;

  constructor({
    autoplay = true,
    delay = 0,
    dir = '',
    dur = 1000,
    easing = 'easeInQuad',
    elasticity = 400,
    enabled = true,
    from = '',
    loop = false,
    property = '',
    startEvents = [],
    pauseEvents = [],
    resumeEvents = [],
    round = false,
    to = '',
    type = '',
    isRawProperty = false,
  }: AnimationProps) {
    this.autoplay = autoplay;
    this.delay = delay;
    this.dir = dir;
    this.dur = dur;
    this.easing = easing;
    this.elasticity = elasticity;
    this.enabled = enabled;
    this.from = from;
    this.loop = loop;
    this.property = property;
    this.startEvents = startEvents;
    this.pauseEvents = pauseEvents;
    this.resumeEvents = resumeEvents;
    this.round = round;
    this.to = to;
    this.type = type;
    this.isRawProperty = isRawProperty;
  }

  public toString = (): string => `autoplay:${this.autoplay};`
                                + `delay:${this.delay};`
                                + `dir:${this.dir};`
                                + `dur:${this.dur};`
                                + `easing:${this.easing};`
                                + `elasticity:${this.elasticity};`
                                + `enabled:${this.enabled};`
                                + `from:${this.from};`
                                + `loop:${Number(this.loop)};`
                                + `property:${this.property};`
                                + `startEvents:${this.startEvents};`
                                + `pauseEvents:${this.pauseEvents};`
                                + `resumeEvents:${this.resumeEvents};`
                                + `round:${this.round};`
                                + `to:${this.to};`
                                + `type:${this.type};`
                                + `isRawProperty:${this.isRawProperty};`;
}
