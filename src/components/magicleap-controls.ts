import type { Hand, Vec3Props } from './types';
import { Vec3 } from './types';

/**
 * The magicleap-controls component interfaces with the Magic Leap controller.
 * It wraps the [tracked-controls component](https://aframe.io/docs/1.2.0/components/tracked-controls.html) while adding button mappings, events, and Magic Leap controller model/
 *
 * @see https://aframe.io/docs/1.2.0/components/magicleap-controls.html#sidebar
 */
export interface MagicleapControlsProps {
  /**
   * The hand that will be tracked (e.g., `right`, `left`).
   */
  hand?: Hand;

  /**
   * Whether the Magic Leap controller model is loaded.
   */
  model?: boolean;

  /**
   * Offset to apply to model orientation.
   */
  orientationOffset?: Vec3Props;
}

export class MagicleapControls implements MagicleapControlsProps {
  readonly hand: Hand;

  readonly model: boolean;

  readonly orientationOffset: Vec3Props;

  constructor({
    hand = '',
    model = true,
    orientationOffset = { x: 0, y: 0, z: 0 },
  }: MagicleapControlsProps) {
    this.hand = hand;
    this.model = model;
    this.orientationOffset = orientationOffset;
  }

  public toString = (): string => `hand:${this.hand};`
                                + `model:${this.model};`
                                + `orientationOffset:${new Vec3(this.orientationOffset).toString()};`;
}
