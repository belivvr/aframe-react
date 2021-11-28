import type { Hand, Vec3 } from './types';
import { Vec3ToString } from './types';

/**
 * @see https://github.com/aframevr/aframe/blob/master/src/components/hp-mixed-reality-controls.js
 */
export interface HpMixedRealityControlsProps {
  hand?: Hand;
  model?: boolean;
  orientationOffset?: Vec3;
}

export class HpMixedRealityControls {
  readonly hand: Hand;

  readonly model: boolean;

  readonly orientationOffset: Vec3;

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
                                + `orientationOffset:${Vec3ToString(this.orientationOffset)};`;
}
