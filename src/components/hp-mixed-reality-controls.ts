import Component from './Component';
import type { Hand, Vec3Props } from './types';

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
  orientationOffset?: Vec3Props;
}

export class HpMixedRealityControls extends Component<HpMixedRealityControlsProps> {
  readonly hand?: Hand;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;
}
