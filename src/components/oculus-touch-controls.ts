import Component from './Component';
import type {
  Hand,
  Vec3Props,
  OculusTouchControllerType,
} from './types';

/**
 * The oculus-touch-controls component interfaces with the Oculus Touch controllers (Rift, Rift S, Oculus Quest 1 and 2). It wraps the [tracked-controls component](https://aframe.io/docs/1.3.0/components/tracked-controls.html) while adding button mappings, events, and a Touch controller model.
 *
 * @see https://aframe.io/docs/1.3.0/components/oculus-touch-controls.html
 */
export interface OculusTouchControlsProps {
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
   * Whether the Touch controller model is loaded.
   */
  model?: boolean;

  /**
   * Whether the arm model is used for positional data.
   */
  controllerType?: OculusTouchControllerType;

  /**
   * Offset to apply to model orientation.
   */
  orientationOffset?: Vec3Props;
}

export class OculusTouchControls extends Component<OculusTouchControlsProps> {
  readonly hand?: Hand;

  readonly buttonColor?: string;

  readonly buttonTouchedColor?: string;

  readonly buttonHighlightColor?: string;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;

  readonly controllerType?: OculusTouchControllerType;
}
