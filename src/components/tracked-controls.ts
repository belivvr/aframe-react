import Component from './Component';
import type { Hand, Vec3Props } from './types';

/**
 * The tracked-controls component interfaces with tracked controllers.
 * tracked-controls uses the Gamepad API to handle tracked controllers, and is abstracted by the [hand-controls component](https://aframe.io/docs/1.3.0/components/hand-controls.html) as well as the [vive-controls](https://aframe.io/docs/1.3.0/components/vive-controls.html), [oculus-touch-controls](https://aframe.io/docs/1.3.0/components/oculus-touch-controls.html), [windows-motion-controls](https://aframe.io/docs/1.3.0/components/windows-motion-controls.html), and [daydream-controls components](https://aframe.io/docs/1.3.0/components/daydream-controls.html).
 * This component elects the appropriate controller, applies pose to the entity,
 * observes buttons state and emits appropriate events.
 * For non-6DOF controllers such as [daydream-controls](https://aframe.io/docs/1.3.0/components/daydream-controls.html), a primitive arm model is used to emulate positional data.
 *
 * @see https://aframe.io/docs/1.3.0/components/tracked-controls.html
 */
export interface TrackedControlsProps {
  /**
   * Whether to toggle visibility automatically when controller is connected or disconnected.
   */
  autoHide?: boolean;

  /**
   * Index of the controller in array returned by the Gamepad API.
   */
  controller?: number;

  /**
   * Selects the controller from the Gamepad API using exact match.
   */
  id?: string;

  /**
   * Which hand to use, if arm model is needed. (left negates X)
   */
  hand?: Hand;

  /**
   * Selects the controller from the Gamepad API using prefix match.
   */
  idPrefix?: string;

  handTrackingEnabled?: boolean;

  /**
   * Offset to apply to model orientation.
   */
  orientationOffset?: Vec3Props;

  /**
   * Whether the arm model is used for positional data if absent.
   */
  armModel?: boolean;

  /**
   * Head element for arm model if needed (if not active camera).
   */
  headElement?: string;

  iterateControllerProfiles?: boolean;
}

export class TrackedControls extends Component<TrackedControlsProps> {
  readonly autoHide?: boolean;

  readonly controller?: number;

  readonly id?: string;

  readonly hand?: Hand;

  readonly idPrefix?: string;

  readonly handTrackingEnabled?: boolean;

  readonly orientationOffset?: Vec3Props;

  readonly armModel?: boolean;

  readonly headElement?: string;

  readonly iterateControllerProfiles?: boolean;
}
