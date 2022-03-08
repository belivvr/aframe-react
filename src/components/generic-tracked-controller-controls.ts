import Component from './Component';
import type { Hand, Vec3Props } from './types';

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

export class GenericTrackedControllerControls
  extends Component<GenericTrackedControllerControlsProps> {
  readonly hand?: Hand;

  readonly defaultModel?: boolean;

  readonly defaultModelColor?: string;

  readonly orientationOffset?: Vec3Props;

  readonly disabled?: boolean;
}
