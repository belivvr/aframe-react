/**
 * The camera component defines from which perspective the user views the scene.
 * The camera is commonly paired with controls components that allow input devices
 * to move and rotate the camera.
 *
 * @see https://aframe.io/docs/1.2.0/components/camera.html#sidebar
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

export class Camera implements CameraProps {
  readonly active: boolean;

  readonly far: number;

  readonly fov: number;

  readonly near: number;

  readonly spectator: boolean;

  readonly zoom: number;

  constructor({
    active = true,
    far = 10000,
    fov = 80,
    near = 0.005,
    spectator = false,
    zoom = 1,
  }: CameraProps) {
    this.active = active;
    this.far = far;
    this.fov = fov;
    this.near = near;
    this.spectator = spectator;
    this.zoom = zoom;
  }

  public toString = (): string => `active=${this.active};`
                                + `far=${this.far};`
                                + `fov=${this.fov};`
                                + `near=${this.near};`
                                + `spectator=${this.spectator};`
                                + `zoom=${this.zoom};`;
}
