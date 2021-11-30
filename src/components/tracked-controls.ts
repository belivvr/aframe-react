import type { Hand, Vec3 } from './types';

/**
 * The tracked-controls component interfaces with tracked controllers.
 * tracked-controls uses the Gamepad API to handle tracked controllers, and is abstracted by the [hand-controls component](https://aframe.io/docs/1.2.0/components/hand-controls.html) as well as the [vive-controls](https://aframe.io/docs/1.2.0/components/vive-controls.html), [oculus-touch-controls](https://aframe.io/docs/1.2.0/components/oculus-touch-controls.html), [windows-motion-controls](https://aframe.io/docs/1.2.0/components/windows-motion-controls.html), and [daydream-controls components](https://aframe.io/docs/1.2.0/components/daydream-controls.html).
 * This component elects the appropriate controller, applies pose to the entity,
 * observes buttons state and emits appropriate events.
 * For non-6DOF controllers such as [daydream-controls](https://aframe.io/docs/1.2.0/components/daydream-controls.html), a primitive arm model is used to emulate positional data.
 *
 * @see https://aframe.io/docs/1.2.0/components/tracked-controls.html
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
  orientationOffset?: Vec3;

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

export class TrackedControls implements TrackedControlsProps {
  readonly autoHide: boolean;

  readonly controller: number;

  readonly id?: string;

  readonly hand?: Hand;

  readonly idPrefix?: string;

  readonly handTrackingEnabled: boolean;

  readonly orientationOffset: Vec3;

  readonly armModel?: boolean;

  readonly headElement?: string;

  readonly iterateControllerProfiles: boolean;

  constructor({
    autoHide = true,
    controller = -1,
    id,
    hand,
    idPrefix,
    handTrackingEnabled = false,
    orientationOffset = { x: 0, y: 0, z: 0 },
    armModel = false,
    headElement,
    iterateControllerProfiles = false,
  }: TrackedControlsProps) {
    this.autoHide = autoHide;
    this.controller = controller;
    this.id = id;
    this.hand = hand;
    this.idPrefix = idPrefix;
    this.handTrackingEnabled = handTrackingEnabled;
    this.orientationOffset = orientationOffset;
    this.armModel = armModel;
    this.headElement = headElement;
    this.iterateControllerProfiles = iterateControllerProfiles;
  }

  public toString = (): string => `autoHide:${this.autoHide};`
                                + `controller:${this.controller};`
                                + `${this.id ? `id:${this.id};` : ''}`
                                + `${this.hand ? `hand:${this.hand};` : ''}`
                                + `${this.idPrefix ? `idPrefix:${this.idPrefix};` : ''}`
                                + `handTrackingEnabled:${this.handTrackingEnabled};`
                                + `orientationOffset:${this.orientationOffset};`
                                + `armModel:${this.armModel};`
                                + `${this.headElement ? `headElement:${this.headElement};` : ''}`
                                + `iterateControllerProfiles:${this.iterateControllerProfiles};`;
}
