import Component from './Component';

/**
 * The camera component defines from which perspective the user views the scene.
 * The camera is commonly paired with controls components that allow input devices
 * to move and rotate the camera.
 *
 * @see https://aframe.io/docs/1.3.0/components/camera.html#sidebar
 */
export interface CameraProps {
  /**
   * Whether the camera is the active camera in a scene with more than one camera.
   */
  active?: boolean;

  /**
   * Camera frustum far clipping plane.
   */
  far?: number;

  /**
   * Field of view (in degrees).
   */
  fov?: number;

  /**
   * Camera frustum near clipping plane.
   */
  near?: number;

  /**
   * Whether the camera is used to render a third-person view of the scene on the 2D display
   * while in VR mode.
   */
  spectator?: boolean;

  /**
   * Zoom factor of the camera.
   */
  zoom?: number;
}

export class Camera extends Component<CameraProps> {
  readonly active?: boolean;

  readonly far?: number;

  readonly fov?: number;

  readonly near?: number;

  readonly spectator?: boolean;

  readonly zoom?: number;
}
