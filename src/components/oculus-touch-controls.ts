import type {
  Hand,
  Vec3Props,
  OculusTouchControllerType,
} from './types';
import { Vec3 } from './types';

type OculusTouchControlsKeys = 'hand'
| 'buttonColor'
| 'buttonTouchedColor'
| 'buttonHighlightColor'
| 'model'
| 'controllerType'
| 'orientationOffset';

/**
 * The oculus-touch-controls component interfaces with the Oculus Touch controllers (Rift, Rift S, Oculus Quest 1 and 2). It wraps the [tracked-controls component](https://aframe.io/docs/1.2.0/components/tracked-controls.html) while adding button mappings, events, and a Touch controller model.
 *
 * @see https://aframe.io/docs/1.2.0/components/oculus-touch-controls.html
 */
export interface OculusTouchControlsProps {
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
   * Whether the Touch controller model is loaded.
   */
  model?: boolean;

  /**
   * Whether the arm model is used for positional data.
   */
  controllerType?: OculusTouchControllerType;

  /**
   * Offset to apply to model orientation.
   */
  orientationOffset?: Vec3Props;
}

export class OculusTouchControls implements OculusTouchControlsProps {
  readonly hand?: Hand;

  readonly buttonColor?: string;

  readonly buttonTouchedColor?: string;

  readonly buttonHighlightColor?: string;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;

  readonly controllerType?: OculusTouchControllerType;

  constructor({
    hand,
    buttonColor,
    buttonTouchedColor,
    buttonHighlightColor,
    model,
    orientationOffset,
    controllerType,
  }: OculusTouchControlsProps) {
    this.hand = hand;
    this.buttonColor = buttonColor;
    this.buttonTouchedColor = buttonTouchedColor;
    this.buttonHighlightColor = buttonHighlightColor;
    this.model = model;
    this.orientationOffset = orientationOffset;
    this.controllerType = controllerType;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as OculusTouchControlsKeys] !== undefined && this[key as OculusTouchControlsKeys] !== '')
    .map((key: string) => {
      if (['orientationOffset'].includes(key)) {
        return `${key}:${new Vec3(this[key as OculusTouchControlsKeys] as Vec3Props).toString()};`;
      }
      return `${key}:${this[key as OculusTouchControlsKeys]};`;
    })
    .join('');
}
