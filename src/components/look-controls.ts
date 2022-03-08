import Component from './Component';

/**
 * The look-controls component:
 *
 * - Rotates the entity when we rotate a VR head-mounted display (HMD).
 * - Rotates the entity when we move the mouse.
 * - Rotates the entity when we touch-drag the touchscreen.
 *
 * @see https://aframe.io/docs/1.2.0/components/look-controls.html
 */
export interface LookControlsProps {
  /**
   * Whether look controls are enabled.
   */
  enabled?: boolean;

  /**
   * Whether gyroscope camera tracking is enabled on mobile devices.
   */
  magicWindowTrackingEnabled?: boolean;

  /**
   * Whether to hide the cursor using the [Pointer Lock API](https://developer.mozilla.org/docs/Web/API/Pointer_Lock_API).
   */
  pointerLockEnabled?: boolean;

  /**
   * Whether to reverse mouse drag.
   */
  reverseMouseDrag?: boolean;

  /**
   * Whether to reverse touch drag.
   */
  reverseTouchDrag?: boolean;

  /**
   * Whether to use touch controls in magic window mode.
   */
  touchEnabled?: boolean;

  /**
   * Whether to use mouse to move the camera in 2D mode.
   */
  mouseEnabled?: boolean;
}

export class LookControls extends Component<LookControlsProps> {
  readonly enabled?: boolean;

  readonly magicWindowTrackingEnabled?: boolean;

  readonly pointerLockEnabled?: boolean;

  readonly reverseMouseDrag?: boolean;

  readonly reverseTouchDrag?: boolean;

  readonly touchEnabled?: boolean;

  readonly mouseEnabled?: boolean;
}
