import type { Hand, Vec3Props } from './types';
import { Vec3 } from './types';

/**
 * @see https://github.com/aframevr/aframe/blob/master/src/components/hp-mixed-reality-controls.js
 */
export interface HpMixedRealityControlsProps {
  /**
   * The hand that will be tracked (e.g., `right`, `left`).
   */
  hand?: Hand;

  /**
   * Whether the Hp Mixed Reality controller model is loaded.
   */
  model?: boolean;

  /**
   * Offset to apply to model orientation.
   */
  orientationOffset?: Vec3;
}

export class HpMixedRealityControls {
  readonly hand: Hand;

  readonly model: boolean;

  readonly orientationOffset: Vec3Props;

  constructor({
    hand = '',
    model = true,
    orientationOffset = { x: 0, y: 0, z: 0 },
  }: HpMixedRealityControlsProps) {
    this.hand = hand;
    this.model = model;
    this.orientationOffset = orientationOffset;
  }

  public toString = (): string => `hand:${this.hand};`
                                + `model:${this.model};`
                                + `orientationOffset:${new Vec3(this.orientationOffset).toString()};`;
}
