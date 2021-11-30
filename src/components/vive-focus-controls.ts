import type { Hand, Vec3 } from './types';
import { Vec3ToString } from './types';

/**
 * The vive-focus-controls component interfaces with the Vive Focus controller.
 * It wraps the [tracked-controls component](https://aframe.io/docs/1.2.0/components/tracked-controls.html) while adding button mappings, events, and an Vive Focus controller model that highlights the touched and/or pressed buttons (trackpad, trigger).
 *
 * @see https://aframe.io/docs/1.2.0/components/vive-focus-controls.html
 */
export interface ViveFocusControlsProps {
  hand?: Hand;
  buttonTouchedColor?: string;
  buttonHighlightColor?: string;
  model?: boolean;
  orientationOffset?: Vec3;
  armModel?: boolean;
}

export class ViveFocusControls implements ViveFocusControlsProps {
  readonly hand?: Hand;

  readonly buttonTouchedColor: string;

  readonly buttonHighlightColor: string;

  readonly model: boolean;

  readonly orientationOffset: Vec3;

  readonly armModel: boolean;

  constructor({
    hand,
    buttonTouchedColor = '#BBBBBB',
    buttonHighlightColor = '#7A7A7A',
    model = true,
    orientationOffset = { x: 0, y: 0, z: 0 },
    armModel = true,
  }: ViveFocusControlsProps) {
    this.hand = hand;
    this.buttonTouchedColor = buttonTouchedColor;
    this.buttonHighlightColor = buttonHighlightColor;
    this.model = model;
    this.orientationOffset = orientationOffset;
    this.armModel = armModel;
  }

  public toString = (): string => `${this.hand ? `hand:${this.hand};` : ''}`
                                + `buttonTouchedColor:${this.buttonTouchedColor};`
                                + `buttonHighlightColor:${this.buttonHighlightColor};`
                                + `model:${this.model};`
                                + `orientationOffset:${Vec3ToString(this.orientationOffset)};`
                                + `armModel:${this.armModel};`;
}
