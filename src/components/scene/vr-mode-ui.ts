/**
 * The vr-mode-ui component allows disabling of UI such as an
 * Enter VR button, compatibility modal, and orientation modal for mobile.
 * The vr-mode-ui component applies only to the [`<a-scene>` element](https://aframe.io/docs/1.2.0/core/scene.html).
 * If we wish to simply toggle the UI, use CSS instead.
 *
 * @see https://aframe.io/docs/1.2.0/components/vr-mode-ui.html
 */
export interface VrModeUIProps {
  /**
   * Whether or not to display UI related to entering VR.
   */
  enabled?: boolean;

  /**
   * Selector to a custom VR button. On click, the button will enter VR.
   *
   * @example "#myEnterVRButton"
   */
  enterVRButton?: string;

  /**
   * Selector to a custom AR button. On click, the button will enter AR.
   *
   * @example "#myEnterARButton"
   */
  enterARButton?: string;
}

export class VrModeUI implements VrModeUIProps {
  readonly enabled: boolean;

  readonly enterVRButton: string;

  readonly enterARButton: string;

  constructor({
    enabled = true,
    enterVRButton = '',
    enterARButton = '',
  }: VrModeUIProps) {
    this.enabled = enabled;
    this.enterVRButton = enterVRButton;
    this.enterARButton = enterARButton;
  }

  public toString = (): string => `enabled:${this.enabled};`
                                + `enterVRButton:${this.enterVRButton};`
                                + `enterARButton:${this.enterARButton};`;
}
