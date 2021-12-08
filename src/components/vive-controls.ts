import type { Hand, Vec3Props } from './types';
import { Vec3 } from './types';

type ViveControlsKeys = 'hand'
| 'buttonColor'
| 'buttonHighlightColor'
| 'model'
| 'orientationOffset';

/**
 * The vive-controls component interfaces with the HTC Vive controllers/wands.
 * It wraps the [tracked-controls component](https://aframe.io/docs/1.2.0/components/tracked-controls.html) while adding button mappings, events,
 * and a Vive controller model that highlights the pressed buttons
 * (trigger, grip, menu, system) and trackpad.
 *
 * @see https://aframe.io/docs/1.2.0/components/vive-controls.html
 */
export interface ViveControlsProps {
  /**
   * The hand that will be tracked (i.e., right, left).
   */
  hand?: Hand;

  /**
   * Button colors when not pressed.
   */
  buttonColor?: string;

  /**
   * Button colors when pressed and active.
   */
  buttonHighlightColor?: string;

  /**
   * Whether the Vive controller model is loaded.
   */
  model?: boolean;

  /**
   * Offset to apply to model orientation.
   */
  orientationOffset?: Vec3Props;
}

export class ViveControls {
  readonly hand?: Hand;

  readonly buttonColor?: string;

  readonly buttonHighlightColor?: string;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;

  constructor({
    hand,
    buttonColor,
    buttonHighlightColor,
    model,
    orientationOffset,
  }: ViveControlsProps) {
    this.hand = hand;
    this.buttonColor = buttonColor;
    this.buttonHighlightColor = buttonHighlightColor;
    this.model = model;
    this.orientationOffset = orientationOffset;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as ViveControlsKeys] !== undefined && this[key as ViveControlsKeys] !== '')
    .map((key: string) => {
      if (['orientationOffset'].includes(key)) {
        return `${key}:${new Vec3(this[key as ViveControlsKeys] as Vec3Props).toString()};`;
      }
      return `${key}:${this[key as ViveControlsKeys]};`;
    })
    .join('');
}
