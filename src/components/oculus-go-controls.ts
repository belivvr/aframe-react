import Component from './Component';
import type { Hand, Vec3Props } from './types';

/**
 * The oculus-go-controls component interfaces with the Oculus Go controllers. It wraps the [tracked-controls component](https://aframe.io/docs/1.3.0/components/tracked-controls.html) while adding button mappings, events, and an Oculus Go controller model that highlights the touched and/or pressed buttons (trackpad, trigger).
 *
 * @see https://aframe.io/docs/1.3.0/components/oculus-go-controls.html
 */
export interface OculusGoControlsProps {
  /**
   * The hand that will be tracked (e.g., `right`, `left`).
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
   * Whether the Oculus Go controller model is loaded.
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

export class OculusGoControls extends Component<OculusGoControlsProps> {
  readonly hand?: Hand;

  readonly buttonColor?: string;

  readonly buttonTouchedColor?: string;

  readonly buttonHighlightColor?: string;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;

  readonly armModel?: boolean;
}
