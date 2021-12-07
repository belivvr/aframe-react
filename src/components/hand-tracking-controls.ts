import type { Hand, ModelStyle } from './types';

type HandTrackingControlsKeys = 'hand'
| 'modelStyle'
| 'modelColor';

/**
 * Use `hand-tracking-controls` to integrate [hand tracked input](https://immersive-web.github.io/webxr-hand-input/) in your application.
 * The component provides a visual representation of the hand and basic gesture recognition.
 * It can be used along tracked controllers (e.g: oculus-touch-controls)
 * for applications requiring multiple input methods.
 * Component is only active when the browser and underlying system starts tracking the user’s hands.
 *
 * @see https://aframe.io/docs/1.2.0/components/hand-tracking-controls.html
 */
export interface HandTrackingControlsProps {
  /**
   * The hand that will be tracked (i.e., `right`, `left`).
   */
  hand?: Hand;

  /**
   * Mesh representing the hand or dots matching the joints
   */
  modelStyle?: ModelStyle;

  /**
   * Color of hand material.
   */
  modelColor?: string;
}

export class HandTrackingControls implements HandTrackingControlsProps {
  readonly hand?: Hand;

  readonly modelStyle?: ModelStyle;

  readonly modelColor?: string;

  constructor({
    hand,
    modelStyle,
    modelColor,
  }: HandTrackingControlsProps) {
    this.hand = hand;
    this.modelStyle = modelStyle;
    this.modelColor = modelColor;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as HandTrackingControlsKeys] !== undefined && this[key as HandTrackingControlsKeys] !== '')
    .map((key: string) => `${key}:${this[key as HandTrackingControlsKeys]};`)
    .join('');
}
