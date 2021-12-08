import type { Hand } from './types';

type TrackedControlsWebXRKeys = 'id'
| 'hand'
| 'handTrackingEnabled'
| 'index'
| 'iterateControllerProfiles';

/**
 * The tracked-controls component interfaces with tracked controllers.
 * tracked-controls uses the Gamepad API to handle tracked controllers, and is abstracted by the [hand-controls component](https://aframe.io/docs/1.2.0/components/hand-controls.html) as well as the [vive-controls](https://aframe.io/docs/1.2.0/components/vive-controls.html), [oculus-touch-controls](https://aframe.io/docs/1.2.0/components/oculus-touch-controls.html), [windows-motion-controls](https://aframe.io/docs/1.2.0/components/windows-motion-controls.html), and [daydream-controls components](https://aframe.io/docs/1.2.0/components/daydream-controls.html).
 * This component elects the appropriate controller, applies pose to the entity,
 * observes buttons state and emits appropriate events.
 * For non-6DOF controllers such as [daydream-controls](https://aframe.io/docs/1.2.0/components/daydream-controls.html), a primitive arm model is used to emulate positional data.
 *
 * @see https://aframe.io/docs/1.2.0/components/tracked-controls.html
 */
export interface TrackedControlsWebXRProps {
  /**
   * Selects the controller from the Gamepad API using exact match.
   */
  id?: string;

  /**
   * Which hand to use, if arm model is needed. (left negates X)
   */
  hand?: Hand;
  handTrackingEnabled?: boolean;
  index?: number;
  iterateControllerProfiles?: boolean;
}

export class TrackedControlsWebXR implements TrackedControlsWebXRProps {
  readonly id?: string;

  readonly hand?: Hand;

  readonly handTrackingEnabled?: boolean;

  readonly index?: number;

  readonly iterateControllerProfiles?: boolean;

  constructor({
    id,
    hand,
    handTrackingEnabled,
    index,
    iterateControllerProfiles,
  }: TrackedControlsWebXRProps) {
    this.id = id;
    this.hand = hand;
    this.handTrackingEnabled = handTrackingEnabled;
    this.index = index;
    this.iterateControllerProfiles = iterateControllerProfiles;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as TrackedControlsWebXRKeys] !== undefined && this[key as TrackedControlsWebXRKeys] !== '')
    .map((key: string) => `${key}:${this[key as TrackedControlsWebXRKeys]};`)
    .join('');
}
