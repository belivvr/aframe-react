import type { Hand, Vec3 } from './types';
import { Vec3ToString } from './types';

export interface ValveIndexControlsProps {
  hand?: Hand;
  buttonColor?: string;
  buttonHighlightColor?: string;
  model?: boolean;
  orientationOffset?: Vec3;
}

export class ValveIndexControls implements ValveIndexControlsProps {
  readonly hand: Hand;

  readonly buttonColor: string;

  readonly buttonHighlightColor: string;

  readonly model: boolean;

  readonly orientationOffset: Vec3;

  constructor({
    hand = 'left',
    buttonColor = '#FAFAFA',
    buttonHighlightColor = '#22D1EE',
    model = true,
    orientationOffset = { x: 0, y: 0, z: 0 },
  }: ValveIndexControlsProps) {
    this.hand = hand;
    this.buttonColor = buttonColor;
    this.buttonHighlightColor = buttonHighlightColor;
    this.model = model;
    this.orientationOffset = orientationOffset;
  }

  public toString = (): string => `hand:${this.hand};`
                                + `buttonColor:${this.buttonColor};`
                                + `buttonHighlightColor:${this.buttonHighlightColor};`
                                + `model:${this.model};`
                                + `orientationOffset:${Vec3ToString(this.orientationOffset)};`;
}
