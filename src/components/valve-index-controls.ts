import Component from './Component';
import type { Hand, Vec3Props } from './types';

export interface ValveIndexControlsProps {
  hand?: Hand;
  buttonColor?: string;
  buttonHighlightColor?: string;
  model?: boolean;
  orientationOffset?: Vec3Props;
}

export class ValveIndexControls extends Component<ValveIndexControlsProps> {
  readonly hand?: Hand;

  readonly buttonColor?: string;

  readonly buttonHighlightColor?: string;

  readonly model?: boolean;

  readonly orientationOffset?: Vec3Props;
}
