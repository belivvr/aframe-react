import Component from '../Component';
import { ShadowType } from './types';

export interface ShadowProps {
  /**
   * Defines shadow map type (`basic`, `pcf`, `pcfsoft`)
   * with varying appearance and performance characteristics.
   */
  type?: ShadowType;
}

export class Shadow extends Component<ShadowProps> {
  readonly type?: ShadowType;
}
