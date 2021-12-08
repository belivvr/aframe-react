import type { Hand, Vec3Props } from './types';
import { Vec3 } from './types';

type OculusGoControlsKeys = 'hand'
| 'buttonColor'
| 'buttonTouchedColor'
| 'buttonHighlightColor'
| 'model'
| 'orientationOffset'
| 'armModel';

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
  }: OculusGoControlsProps) {
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
    .filter((key: string) => this[key as OculusGoControlsKeys] !== undefined && this[key as OculusGoControlsKeys] !== '')
    .map((key: string) => {
      if (['orientationOffset'].includes(key)) {
        return `${key}:${new Vec3(this[key as OculusGoControlsKeys] as Vec3Props).toString()};`;
      }
      return `${key}:${this[key as OculusGoControlsKeys]};`;
    })
    .join('');
}
