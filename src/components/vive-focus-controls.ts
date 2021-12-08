import type { Hand, Vec3Props } from './types';
import { Vec3 } from './types';

type ViveFocusControlsKeys = 'hand'
| 'buttonTouchedColor'
| 'buttonHighlightColor'
| 'model'
| 'orientationOffset'
| 'armModel';

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
  orientationOffset?: Vec3Props;
  armModel?: boolean;
}

export class ViveFocusControls implements ViveFocusControlsProps {
  readonly hand?: Hand;

  readonly buttonTouchedColor?: string;

  readonly buttonHighlightColor?: string;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;

  readonly armModel?: boolean;

  constructor({
    hand,
    buttonTouchedColor,
    buttonHighlightColor,
    model,
    orientationOffset,
    armModel,
  }: ViveFocusControlsProps) {
    this.hand = hand;
    this.buttonTouchedColor = buttonTouchedColor;
    this.buttonHighlightColor = buttonHighlightColor;
    this.model = model;
    this.orientationOffset = orientationOffset;
    this.armModel = armModel;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as ViveFocusControlsKeys] !== undefined && this[key as ViveFocusControlsKeys] !== '')
    .map((key: string) => {
      if (['orientationOffset'].includes(key)) {
        return `${key}:${new Vec3(this[key as ViveFocusControlsKeys] as Vec3Props).toString()};`;
      }
      return `${key}:${this[key as ViveFocusControlsKeys]};`;
    })
    .join('');
}
