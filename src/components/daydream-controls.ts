import type { Hand, Vec3 } from './types';
import { Vec3ToString } from './types';

/**
 * The daydream-controls component interfaces with the Google Daydream controllers.
 * It wraps the [tracked-controls component](https://aframe.io/docs/1.2.0/components/tracked-controls.html) while adding button mappings, events,
 * and a Daydream controller model that highlights the touched and/or pressed buttons (trackpad).
 *
 * As a first time set up, to use the Daydream controller on Chrome for Android enable both `WebVR` and `Gamepad Extensions` experiments in `chrome://flags` and relaunch the browser.
 *
 * Then, open your web app, enter VR mode and place the phone inside the headset.
 * It can occassionally take a few seconds before the controller can be used.

 * @see https://aframe.io/docs/1.2.0/components/daydream-controls.html
 */
export interface DaydreamControlsProps {
  /**
   * Set hand that will be tracked (i.e., `right`, `left`).
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
   * Whether the Daydream controller model is loaded.
   */
  model?: boolean;

  /**
   * Offset to apply to model orientation.
   */
  orientationOffset?: Vec3;

  /**
   * Whether the arm model is used for positional data.
   */
  armModel?: boolean;
}

export class DaydreamControls implements DaydreamControlsProps {
  readonly hand: Hand;

  readonly buttonColor: string;

  readonly buttonTouchedColor: string;

  readonly buttonHighlightColor: string;

  readonly model: boolean;

  readonly orientationOffset: Vec3;

  readonly armModel: boolean;

  constructor({
    hand = '', // This informs the degenerate arm model.
    buttonColor = '#000000',
    buttonTouchedColor = '#777777',
    buttonHighlightColor = '#FFFFFF',
    model = true,
    orientationOffset = { x: 0, y: 0, z: 0 },
    armModel = true,
  }: DaydreamControlsProps) {
    this.hand = hand;
    this.buttonColor = buttonColor;
    this.buttonTouchedColor = buttonTouchedColor;
    this.buttonHighlightColor = buttonHighlightColor;
    this.model = model;
    this.orientationOffset = orientationOffset;
    this.armModel = armModel;
  }

  public toString = (): string => `hand:${this.hand};`
                                + `buttonColor:${this.buttonColor};`
                                + `buttonTouchedColor:${this.buttonTouchedColor};`
                                + `buttonHighlightColor:${this.buttonHighlightColor};`
                                + `model:${this.model};`
                                + `orientationOffset:${Vec3ToString(this.orientationOffset)};`
                                + `armModel:${this.armModel};`;
}
