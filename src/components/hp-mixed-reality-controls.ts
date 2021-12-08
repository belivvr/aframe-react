import type { Hand, Vec3Props } from './types';
import { Vec3 } from './types';

type HpMixedRealityControlsKeys = 'hand'
| 'model'
| 'orientationOffset';

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
  readonly hand?: Hand;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;

  constructor({
    hand,
    model,
    orientationOffset,
  }: HpMixedRealityControlsProps) {
    this.hand = hand;
    this.model = model;
    this.orientationOffset = orientationOffset;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as HpMixedRealityControlsKeys] !== undefined && this[key as HpMixedRealityControlsKeys] !== '')
    .map((key: string) => {
      if (['orientationOffset'].includes(key)) {
        return `${key}:${new Vec3(this[key as HpMixedRealityControlsKeys] as Vec3Props).toString()};`;
      }
      return `${key}:${this[key as HpMixedRealityControlsKeys]};`;
    })
    .join('');
}
