import type { Hand, Vec3Props } from './types';
import { Vec3 } from './types';

type ValveIndexControlsKeys = 'hand'
| 'buttonColor'
| 'buttonHighlightColor'
| 'model'
| 'orientationOffset';

export interface ValveIndexControlsProps {
  hand?: Hand;
  buttonColor?: string;
  buttonHighlightColor?: string;
  model?: boolean;
  orientationOffset?: Vec3Props;
}

export class ValveIndexControls implements ValveIndexControlsProps {
  readonly hand?: Hand;

  readonly buttonColor?: string;

  readonly buttonHighlightColor?: string;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;

  constructor({
    hand,
    buttonColor,
    buttonHighlightColor,
    model,
    orientationOffset,
  }: ValveIndexControlsProps) {
    this.hand = hand;
    this.buttonColor = buttonColor;
    this.buttonHighlightColor = buttonHighlightColor;
    this.model = model;
    this.orientationOffset = orientationOffset;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as ValveIndexControlsKeys] !== undefined && this[key as ValveIndexControlsKeys] !== '')
    .map((key: string) => {
      if (['orientationOffset'].includes(key)) {
        return `${key}:${new Vec3(this[key as ValveIndexControlsKeys] as Vec3Props).toString()};`;
      }
      return `${key}:${this[key as ValveIndexControlsKeys]};`;
    })
    .join('');
}
