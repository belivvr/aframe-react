/**
 * Starting with Safari on iOS 13 browsers require sites to be
 * served over https and request user permission to access DeviceOrientation events.
 * This component presents a permission dialog for the user to grant or deny access.
 * The device-orientation-permission-ui component applies only to the [`<a-scene>` element](https://aframe.io/docs/1.2.0/core/scene.html)
 *
 * @see https://aframe.io/docs/1.2.0/components/device-orientation-permission-ui.html
 */
export interface DeviceOrientationPermissionUIProps {
  /**
   * Whether or not to display the dialog when required
   */
  enabled?: boolean;

  /**
   * Message in dialog requesting user permission to enable the Device Motion API.
   */
  deviceMotionMessage?: string;

  /**
   * Message requesting user to switch to HTTPS.
   */
  httpsMessage?: string;

  /**
   * Deny button text
   */
  denyButtonText?: string;

  /**
   * Allow button text
   */
  allowButtonText?: string;

  /**
   * Cancel button text
   */
  cancelButtonText?: string;
}

export class DeviceOrientationPermissionUI implements DeviceOrientationPermissionUIProps {
  readonly enabled: boolean;

  readonly deviceMotionMessage: string;

  readonly httpsMessage: string;

  readonly denyButtonText: string;

  readonly allowButtonText: string;

  readonly cancelButtonText: string;

  constructor({
    enabled = true,
    deviceMotionMessage = 'This immersive website requires access to your device motion sensors.',
    httpsMessage = 'Access this site over HTTPS to enter VR mode and grant access to the device sensors.',
    denyButtonText = 'Deny',
    allowButtonText = 'Allow',
    cancelButtonText = 'Cancel',
  }: DeviceOrientationPermissionUIProps) {
    this.enabled = enabled;
    this.deviceMotionMessage = deviceMotionMessage;
    this.httpsMessage = httpsMessage;
    this.denyButtonText = denyButtonText;
    this.allowButtonText = allowButtonText;
    this.cancelButtonText = cancelButtonText;
  }

  public toString = (): string => `enabled:${this.enabled};`
                                + `deviceMotionMessage:${this.deviceMotionMessage};`
                                + `httpsMessage:${this.httpsMessage};`
                                + `denyButtonText:${this.denyButtonText};`
                                + `allowButtonText:${this.allowButtonText};`
                                + `cancelButtonText:${this.cancelButtonText};`;
}
