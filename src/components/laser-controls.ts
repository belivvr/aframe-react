import { Hand } from './types';

/**
 * The laser-controls component provides tracked controls with a laser or ray cursor shooting out to be used for input and interactions. _DoF_ stands for [degrees of freedom](http://www.roadtovr.com/introduction-positional-tracking-degrees-freedom-dof/). Because they only require rotation and some form of input, laser-based interactions scale well across 0 DoF (gaze-based, Cardboard), 3 DoF (Daydream, GearVR with controllers), and 6 DoF (Vive, Oculus Touch). If desired, we can get a consistent form of interaction that works across all VR platforms with a single line of HTML.
 *
 * laser-controls is a **higher-order component**, meaning the component wraps and
 * configures other components, rather than implementing any logic itself.
 * Under the hood, laser-controls sets all of the tracked controller components:
 *
 * - [vive-controls](https://aframe.io/docs/1.2.0/components/vive-controls.html)
 * - [oculus-touch-controls](https://aframe.io/docs/1.2.0/components/oculus-touch-controls.html)
 * - [daydream-controls](https://aframe.io/docs/1.2.0/components/daydream-controls.html)
 * - [gearvr-controls](https://aframe.io/docs/1.2.0/components/gearvr-controls.html)
 * - [windows-motion-controls](https://aframe.io/docs/1.2.0/components/windows-motion-controls.html)
 *
 * These controller components get activated if its respective controller is connected and detected via the Gamepad API. Then the model of the actual controller is used. laser-controls then configures the [cursor component](https://aframe.io/docs/1.2.0/components/cursor.html) for listen to the appropriate events and configures the [raycaster component](https://aframe.io/docs/1.2.0/components/raycaster.html) to draw the laser.
 *
 * When the laser intersects with an entity, the length of the line
 * gets truncated to the distance to the intersection point.

 * @see https://aframe.io/docs/1.2.0/components/laser-controls.html
 */
export interface LaserControlsProps {
  /**
   * `left` or `right`.
   */
  hand?: Hand;

  /**
   * Whether the default model for the controller is loaded.
   */
  model?: boolean;

  /**
   * Color for the default controller model.
   */
  defaultModelColor?: string;
}

export class LaserControls implements LaserControlsProps {
  readonly hand: Hand;

  readonly model: boolean;

  readonly defaultModelColor: string;

  constructor({
    hand = 'right',
    model = true,
    defaultModelColor = 'grey',
  }: LaserControlsProps) {
    this.hand = hand;
    this.model = model;
    this.defaultModelColor = defaultModelColor;
  }

  public toString = (): string => `hand:${this.hand};`
                                + `model:${this.model};`
                                + `defaultModelColor:${this.defaultModelColor};`;
}
