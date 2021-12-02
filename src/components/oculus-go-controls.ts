import type { Hand, Vec3Props } from './types';
import { Vec3 } from './types';

/**
 * The oculus-go-controls component interfaces with the Oculus Go controllers. It wraps the [tracked-controls component](https://aframe.io/docs/1.2.0/components/tracked-controls.html) while adding button mappings, events, and an Oculus Go controller model that highlights the touched and/or pressed buttons (trackpad, trigger).
 *
 * @see https://aframe.io/docs/1.2.0/components/oculus-go-controls.html
 */
export interface OculusGoControlsProps {
  /**
   * The hand that will be tracked (e.g., `right`, `left`).
   */
  hand?: Hand;

  /**
   * Button colors when not pressed.
   */
  buttonColor?: string;

  /**
   * Button colors when touched.
   */
  buttonTouchedColor?: string;

  /**
   * Button colors when pressed and active.
   */
  buttonHighlightColor?: string;

  /**
   * Whether the Oculus Go controller model is loaded.
   */
  model?: boolean;

  /**
   * Offset to apply to model orientation.
   */
  orientationOffset?: Vec3Props;

  /**
   * Whether the arm model is used for positional data.
   */
  armModel?: boolean;
}

export class OculusGoControls implements OculusGoControlsProps {
  readonly hand?: Hand;

  readonly buttonColor: string;

  readonly buttonTouchedColor: string;

  readonly buttonHighlightColor: string;

  readonly model: boolean;

  readonly orientationOffset: Vec3Props;

  readonly armModel: boolean;

  constructor({
    hand,
    buttonColor = '#FFFFFF',
    buttonTouchedColor = '#BBBBBB',
    buttonHighlightColor = '#7A7A7A',
    model = true,
    orientationOffset = { x: 0, y: 0, z: 0 },
    armModel = true,
  }: OculusGoControlsProps) {
    this.hand = hand;
    this.buttonColor = buttonColor;
    this.buttonTouchedColor = buttonTouchedColor;
    this.buttonHighlightColor = buttonHighlightColor;
    this.model = model;
    this.orientationOffset = orientationOffset;
    this.armModel = armModel;
  }

  public toString = (): string => `${this.hand ? `hand:${this.hand};` : ''}`
                                + `buttonColor:${this.buttonColor};`
                                + `buttonTouchedColor:${this.buttonTouchedColor};`
                                + `buttonHighlightColor:${this.buttonHighlightColor};`
                                + `model:${this.model};`
                                + `orientationOffset:${new Vec3(this.orientationOffset).toString()};`
                                + `armModel:${this.armModel};`;
}
