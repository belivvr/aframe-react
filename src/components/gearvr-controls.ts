import Component from './Component';
import type { Hand, Vec3Props } from './types';

/**
 * The gearvr-controls component interfaces with the Samsung/Oculus Gear VR controllers.
 * It wraps the [tracked-controls component](https://aframe.io/docs/1.2.0/components/tracked-controls.html) while adding button mappings, events,
 * and a Gear VR controller model that highlights the touched and/or pressed buttons
 * (trackpad, trigger).
 *
 * @see https://aframe.io/docs/1.2.0/components/gearvr-controls.html
 */
export interface GearvrControlsProps {
  /**
   * Set hand that will be tracked (i.e., `right`, `left`).
   */
  hand?: Hand;

  /**
   * Button colors when not pressed.
   */
  buttonColor?: string;

  /**
   * Button colors when touched.
   */
  buttonTouchedColor?: string;

  /**
   * Button colors when pressed and active.
   */
  buttonHighlightColor?: string;

  /**
   * Whether the Daydream controller model is loaded.
   */
  model?: boolean;

  /**
   * Offset to apply to model orientation.
   */
  orientationOffset?: Vec3Props;

  /**
   * Whether the arm model is used for positional data.
   */
  armModel?: boolean;
}

export class GearvrControls
  extends Component<GearvrControlsProps> {
  readonly hand?: Hand;

  readonly buttonColor?: string;

  readonly buttonTouchedColor?: string;

  readonly buttonHighlightColor?: string;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;

  readonly armModel?: boolean;
}
