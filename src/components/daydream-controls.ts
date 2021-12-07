import type { Hand, Vec3Props } from './types';
import { Vec3 } from './types';

type DaydreamControlsKeys = | 'hand'
| 'buttonColor'
| 'buttonTouchedColor'
| 'buttonHighlightColor'
| 'model'
| 'orientationOffset'
| 'armModel';

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
  orientationOffset?: Vec3Props;

  /**
   * Whether the arm model is used for positional data.
   */
  armModel?: boolean;
}

export class DaydreamControls implements DaydreamControlsProps {
  readonly hand?: Hand;

  readonly buttonColor?: string;

  readonly buttonTouchedColor?: string;

  readonly buttonHighlightColor?: string;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;

  readonly armModel?: boolean;

  constructor({
    hand,
    buttonColor,
    buttonTouchedColor,
    buttonHighlightColor,
    model,
    orientationOffset,
    armModel,
  }: DaydreamControlsProps) {
    this.hand = hand;
    this.buttonColor = buttonColor;
    this.buttonTouchedColor = buttonTouchedColor;
    this.buttonHighlightColor = buttonHighlightColor;
    this.model = model;
    this.orientationOffset = orientationOffset;
    this.armModel = armModel;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as DaydreamControlsKeys] !== undefined && this[key as DaydreamControlsKeys] !== '')
    .map((key: string) => {
      if (['orientationOffset'].includes(key)) {
        return `${key}:${new Vec3(this[key as DaydreamControlsKeys] as Vec3Props).toString()};`;
      }
      return `${key}:${this[key as DaydreamControlsKeys]};`;
    })
    .join('');
}
