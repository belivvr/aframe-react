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
export interface TrackedControlsWebVRProps {
  autoHide?: boolean;
  controller?: number;
  id?: string;
  hand?: Hand;
  idPrefix?: string;
  orientationOffset?: Vec3;
  armModel?: boolean;
  headElement?: string;
}

export class TrackedControlsWebVR implements TrackedControlsWebVRProps {
  readonly autoHide: boolean;

  readonly controller: number;

  readonly id?: string;

  readonly hand?: Hand;

  readonly idPrefix?: string;

  readonly orientationOffset: Vec3;

  readonly armModel?: boolean;

  readonly headElement?: string;

  constructor({
    autoHide = true,
    controller = 0,
    id,
    hand,
    idPrefix,
    orientationOffset = { x: 0, y: 0, z: 0 },
    armModel = false,
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

  public toString = (): string => `autoHide:${this.autoHide};`
                                + `controller:${this.controller};`
                                + `${this.id ? `id:${this.id};` : ''}`
                                + `${this.hand ? `hand:${this.hand};` : ''}`
                                + `${this.idPrefix ? `idPrefix:${this.idPrefix};` : ''}`
                                + `orientationOffset:${this.orientationOffset};`
                                + `armModel:${this.armModel};`
                                + `${this.headElement ? `headElement:${this.headElement};` : ''}`;
}
