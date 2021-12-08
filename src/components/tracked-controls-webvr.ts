import type { Hand, Vec3Props } from './types';
import { Vec3 } from './types';

type TrackedControlsWebVRKeys = 'autoHide'
| 'controller'
| 'id'
| 'hand'
| 'idPrefix'
| 'orientationOffset'
| 'armModel'
| 'headElement';

/**
 * The tracked-controls component interfaces with tracked controllers.
 * tracked-controls uses the Gamepad API to handle tracked controllers, and is abstracted by the [hand-controls component](https://aframe.io/docs/1.2.0/components/hand-controls.html) as well as the [vive-controls](https://aframe.io/docs/1.2.0/components/vive-controls.html), [oculus-touch-controls](https://aframe.io/docs/1.2.0/components/oculus-touch-controls.html), [windows-motion-controls](https://aframe.io/docs/1.2.0/components/windows-motion-controls.html), and [daydream-controls components](https://aframe.io/docs/1.2.0/components/daydream-controls.html).
 * This component elects the appropriate controller, applies pose to the entity,
 * observes buttons state and emits appropriate events.
 * For non-6DOF controllers such as [daydream-controls](https://aframe.io/docs/1.2.0/components/daydream-controls.html), a primitive arm model is used to emulate positional data.
 *
 * @see https://aframe.io/docs/1.2.0/components/tracked-controls.html
 */
export interface TrackedControlsWebVRProps {
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
}

export class TrackedControlsWebVR implements TrackedControlsWebVRProps {
  readonly autoHide?: boolean;

  readonly controller?: number;

  readonly id?: string;

  readonly hand?: Hand;

  readonly idPrefix?: string;

  readonly orientationOffset?: Vec3Props;

  readonly armModel?: boolean;

  readonly headElement?: string;

  constructor({
    autoHide,
    controller,
    id,
    hand,
    idPrefix,
    orientationOffset,
    armModel,
    headElement,
  }: TrackedControlsWebVRProps) {
    this.autoHide = autoHide;
    this.controller = controller;
    this.id = id;
    this.hand = hand;
    this.idPrefix = idPrefix;
    this.orientationOffset = orientationOffset;
    this.armModel = armModel;
    this.headElement = headElement;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as TrackedControlsWebVRKeys] !== undefined && this[key as TrackedControlsWebVRKeys] !== '')
    .map((key: string) => {
      if (['orientationOffset'].includes(key)) {
        return `${key}:${new Vec3(this[key as TrackedControlsWebVRKeys] as Vec3Props).toString()};`;
      }
      return `${key}:${this[key as TrackedControlsWebVRKeys]};`;
    })
    .join('');
}
