import type { Hand, Vec3Props } from './types';
import { Vec3 } from './types';

type GearvrControlsKeys = 'hand'
| 'buttonColor'
| 'buttonTouchedColor'
| 'buttonHighlightColor'
| 'model'
| 'orientationOffset'
| 'armModel';

/**
 * The gearvr-controls component interfaces with the Samsung/Oculus Gear VR controllers.
 * It wraps the [tracked-controls component](https://aframe.io/docs/1.2.0/components/tracked-controls.html) while adding button mappings, events,
 * and a Gear VR controller model that highlights the touched and/or pressed buttons
 * (trackpad, trigger).
 *
 * @see https://aframe.io/docs/1.2.0/components/gearvr-controls.html
 */
export interface GearvrControlsProps {
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

export class GearvrControls implements GearvrControlsProps {
  readonly hand?: Hand;

  readonly buttonColor?: string;

  readonly buttonTouchedColor?: string;

  readonly buttonHighlightColor?: string;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;

  readonly armModel?: boolean;

  constructor({
    hand, // This informs the degenerate arm model.
    buttonColor,
    buttonTouchedColor,
    buttonHighlightColor,
    model,
    orientationOffset,
    armModel,
  }: GearvrControlsProps) {
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
    .filter((key: string) => this[key as GearvrControlsKeys] !== undefined && this[key as GearvrControlsKeys] !== '')
    .map((key: string) => {
      if (['orientationOffset'].includes(key)) {
        return `${key}:${new Vec3(this[key as GearvrControlsKeys] as Vec3Props).toString()};`;
      }
      return `${key}:${this[key as GearvrControlsKeys]};`;
    })
    .join('');
}
