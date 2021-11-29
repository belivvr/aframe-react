import type {
  Hand,
  Vec3,
  OculusTouchControllerType,
} from './types';
import { Vec3ToString } from './types';

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
  orientationOffset?: Vec3;
}

export class OculusTouchControls implements OculusTouchControlsProps {
  readonly hand: Hand;

  readonly buttonColor: string;

  readonly buttonTouchedColor: string;

  readonly buttonHighlightColor: string;

  readonly model: boolean;

  readonly orientationOffset: Vec3;

  readonly controllerType: OculusTouchControllerType;

  constructor({
    hand = 'left',
    buttonColor = '#999',
    buttonTouchedColor = '#8AB',
    buttonHighlightColor = '#2DF',
    model = true,
    controllerType = 'auto',
    orientationOffset = { x: 0, y: 0, z: 0 },
  }: OculusTouchControlsProps) {
    this.hand = hand;
    this.buttonColor = buttonColor;
    this.buttonTouchedColor = buttonTouchedColor;
    this.buttonHighlightColor = buttonHighlightColor;
    this.model = model;
    this.orientationOffset = orientationOffset;
    this.controllerType = controllerType;
  }

  public toString = (): string => `hand:${this.hand};`
                                + `buttonColor:${this.buttonColor};`
                                + `buttonTouchedColor:${this.buttonTouchedColor};`
                                + `buttonHighlightColor:${this.buttonHighlightColor};`
                                + `model:${this.model};`
                                + `orientationOffset:${Vec3ToString(this.orientationOffset)};`
                                + `controllerType:${this.controllerType};`;
}
