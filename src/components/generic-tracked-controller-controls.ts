import type { Hand, Vec3 } from './types';
import { Vec3ToString } from './types';

/**
 * @see https://github.com/aframevr/aframe/blob/master/src/components/generic-tracked-controller-controls.js
 */
export interface GenericTrackedControllerControlsProps {
  /**
   * Set hand that will be tracked (i.e., `right`, `left`).
   */
  hand?: Hand;
  defaultModel?: boolean;
  defaultModelColor?: string;

  /**
   * Offset to apply to model orientation.
   */
  orientationOffset?: Vec3;
  disabled?: boolean;
}

export class GenericTrackedControllerControls implements GenericTrackedControllerControlsProps {
  readonly hand: Hand;

  readonly defaultModel: boolean;

  readonly defaultModelColor: string;

  readonly orientationOffset: Vec3;

  readonly disabled: boolean;

  constructor({
    hand = '', // This informs the degenerate arm model.
    defaultModel = true,
    defaultModelColor = 'gray',
    orientationOffset = { x: 0, y: 0, z: 0 },
    disabled = false,
  }: GenericTrackedControllerControlsProps) {
    this.hand = hand;
    this.defaultModel = defaultModel;
    this.defaultModelColor = defaultModelColor;
    this.orientationOffset = orientationOffset;
    this.disabled = disabled;
  }

  public toString = (): string => `hand:${this.hand};`
                                + `defaultModel:${this.defaultModel};`
                                + `defaultModelColor:${this.defaultModelColor};`
                                + `orientationOffset:${Vec3ToString(this.orientationOffset)};`
                                + `disabled:${this.disabled};`;
}
