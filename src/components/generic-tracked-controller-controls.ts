import type { Hand, Vec3Props } from './types';
import { Vec3 } from './types';

type GenericTrackedControllerControlsKeys = 'hand'
| 'defaultModel'
| 'defaultModelColor'
| 'orientationOffset'
| 'disabled';

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
  orientationOffset?: Vec3Props;
  disabled?: boolean;
}

export class GenericTrackedControllerControls implements GenericTrackedControllerControlsProps {
  readonly hand?: Hand;

  readonly defaultModel?: boolean;

  readonly defaultModelColor?: string;

  readonly orientationOffset?: Vec3Props;

  readonly disabled?: boolean;

  constructor({
    hand, // This informs the degenerate arm model.
    defaultModel,
    defaultModelColor,
    orientationOffset,
    disabled,
  }: GenericTrackedControllerControlsProps) {
    this.hand = hand;
    this.defaultModel = defaultModel;
    this.defaultModelColor = defaultModelColor;
    this.orientationOffset = orientationOffset;
    this.disabled = disabled;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as GenericTrackedControllerControlsKeys] !== undefined && this[key as GenericTrackedControllerControlsKeys] !== '')
    .map((key: string) => {
      if (['orientationOffset'].includes(key)) {
        return `${key}:${new Vec3(this[key as GenericTrackedControllerControlsKeys] as Vec3Props).toString()};`;
      }
      return `${key}:${this[key as GenericTrackedControllerControlsKeys]};`;
    })
    .join('');
}
