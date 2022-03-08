import Component from './Component';
import type { Hand, Vec3Props } from './types';

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

export class ViveFocusControls extends Component<ViveFocusControlsProps> {
  readonly hand?: Hand;

  readonly buttonTouchedColor?: string;

  readonly buttonHighlightColor?: string;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;

  readonly armModel?: boolean;
}
