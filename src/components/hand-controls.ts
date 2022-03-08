import Component from './Component';
import { Hand, HandModelStyle } from './types';

/**
 * @see https://aframe.io/docs/1.3.0/components/hand-controls.html
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

export class HandControls
  extends Component<HandControlsProps> {
  readonly color?: string;

  readonly hand?: Hand;

  readonly handModelStyle?: HandModelStyle;
}
