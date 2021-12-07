import { Hand, HandModelStyle } from './types';

type HandControlsKeys = 'color'
| 'hand'
| 'handModelStyle';

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
  readonly color?: string;

  readonly hand?: Hand;

  readonly handModelStyle?: HandModelStyle;

  constructor({
    color,
    hand,
    handModelStyle,
  }: HandControlsProps) {
    this.color = color;
    this.hand = hand;
    this.handModelStyle = handModelStyle;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as HandControlsKeys] !== undefined && this[key as HandControlsKeys] !== '')
    .map((key: string) => `${key}:${this[key as HandControlsKeys]};`)
    .join('');
}
