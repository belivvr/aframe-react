import type { WASDAxis } from './types';

/**
 * The wasd-controls component controls an entity with the WASD or arrow keyboard keys.
 * The wasd-controls component is commonly attached to an entity with the [camera component](https://aframe.io/docs/1.2.0/components/camera.html).
 *
 * @see https://aframe.io/docs/1.2.0/components/wasd-controls.html
 */
export interface WASDControlsProps {
  /**
   * How fast the entity accelerates when holding the keys.
   */
  acceleration?: number;

  /**
   * Axis that the A and D keys act upon.
   */
  adAxis?: WASDAxis;

  adEnabled?: boolean;

  /**
   * Whether the axis that the A and D keys act upon are inverted.
   */
  adInverted?: boolean;

  /**
   * Whether the WASD controls are enabled.
   */
  enabled?: boolean;

  /**
   * Whether or not movement is restricted to the entity’s initial plane.
   */
  fly?: boolean;

  /**
   * Axis that the W and S keys act upon.
   */
  wsAxis?: WASDAxis;

  wsEnabled?: boolean;

  /**
   * Whether the axis that the W and S keys act upon are inverted.
   */
  wsInverted?: boolean;
}

export class WASDControls implements WASDControlsProps {
  readonly acceleration: number;

  readonly adAxis: WASDAxis;

  readonly adEnabled: boolean;

  readonly adInverted: boolean;

  readonly enabled: boolean;

  readonly fly: boolean;

  readonly wsAxis: WASDAxis;

  readonly wsEnabled: boolean;

  readonly wsInverted: boolean;

  constructor({
    acceleration = 65,
    adAxis = 'x',
    adEnabled = true,
    adInverted = false,
    enabled = true,
    fly = false,
    wsAxis = 'z',
    wsEnabled = true,
    wsInverted = false,
  }: WASDControlsProps) {
    this.acceleration = acceleration;
    this.adAxis = adAxis;
    this.adEnabled = adEnabled;
    this.adInverted = adInverted;
    this.enabled = enabled;
    this.fly = fly;
    this.wsAxis = wsAxis;
    this.wsEnabled = wsEnabled;
    this.wsInverted = wsInverted;
  }

  public toString = () => `acceleration:${this.acceleration};`
                        + `adAxis:${this.adAxis};`
                        + `adEnabled:${this.adEnabled};`
                        + `adInverted:${this.adInverted};`
                        + `enabled:${this.enabled};`
                        + `fly:${this.fly};`
                        + `wsAxis:${this.wsAxis};`
                        + `wsEnabled:${this.wsEnabled};`
                        + `wsInverted:${this.wsInverted};`;
}
