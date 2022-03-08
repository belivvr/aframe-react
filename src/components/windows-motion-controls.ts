import Component from './Component';
import type { Hand } from './types';

/**
 * The windows-motion-controls component interfaces with any spatial controllers exposed through Windows Mixed Reality as Spatial Input Sources (such as Motion Controllers). It wraps the [tracked-controls component](https://aframe.io/docs/1.2.0/components/tracked-controls.html) while adding button mappings, events, and a controller model that highlights applies position/rotation transforms to the pressed buttons (trigger, grip, menu, thumbstick, trackpad) and moved axes (thumbstick and trackpad.)
 *
 * @see https://aframe.io/docs/1.2.0/components/windows-motion-controls.html
 */
export interface WindowsMotionControlsProps {
  /**
   * The hand that will be tracked (i.e., right, left).
   */
  hand?: Hand;

  /**
   * Which pair of controllers, if > 2 are connected.
   */
  pair?: number;

  /**
   * Whether the controller model is loaded.
   */
  model?: boolean;

  /**
   * Disable rendering of controller model
   * when no matching gamepad (based on ID & hand) is connected.
   */
  hideDisconnected?: boolean;
}

export class WindowsMotionControls extends Component<WindowsMotionControlsProps> {
  readonly hand?: Hand;

  readonly pair?: number;

  readonly model?: boolean;

  readonly hideDisconnected?: boolean;
}
