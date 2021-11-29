export type ShadowType = 'basic' | 'pcf' | 'pcfsoft';

export interface ShadowProps {
  /**
   * Defines shadow map type (`basic`, `pcf`, `pcfsoft`)
   * with varying appearance and performance characteristics.
   */
  type?: ShadowType;
}

export class Shadow implements ShadowProps {
  readonly type: ShadowType;

  constructor({
    type = 'pcf',
  }: ShadowProps) {
    this.type = type;
  }

  public toString = (): string => `type:${this.type};`;
}
