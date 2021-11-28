import { Hand, HandModelStyle } from './types';

/**
 * @see https://aframe.io/docs/1.2.0/components/hand-controls.html
 */
export interface HandControlsProps {
  /**
   * Color of hand material.
   */
  color?: string;

  /**
   * Associated controller. Can be `left` or `right`.
   */
  hand?: Hand;

  /**
   * Style of the hand 3D model loaded. Can be `lowPoly`, `highPoly` or `toon`.
   */
  handModelStyle?: HandModelStyle;
}

export class HandControls implements HandControlsProps {
  readonly color: string;

  readonly hand: Hand;

  readonly handModelStyle: HandModelStyle;

  constructor({
    color = 'white',
    hand = 'left',
    handModelStyle = 'lowPoly',
  }: HandControlsProps) {
    this.color = color;
    this.hand = hand;
    this.handModelStyle = handModelStyle;
  }

  public toString = (): string => `color:${this.color};`
                                + `hand:${this.hand};`
                                + `handModelStyle:${this.handModelStyle};`;
}
