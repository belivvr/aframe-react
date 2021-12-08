type ShadowKeys = 'cast' | 'receive';

/**
 * The shadow component enables shadows for an entity and its children.
 * Receiving shadows from surrounding objects and casting shadows
 * onto other objects may (and often should) be enabled independently.
 *
 * Without this component, an entity will not cast nor receive shadows.
 *
 * @see https://aframe.io/docs/1.2.0/components/shadow.html
 */
export interface ShadowProps {
  /**
   * Whether the entity casts shadows onto the surrounding scene.
   */
  cast?: boolean;

  /**
   * Whether the entity receives shadows from the surrounding scene.
   */
  receive?: boolean;
}

export class Shadow implements ShadowProps {
  readonly cast?: boolean;

  readonly receive?: boolean;

  constructor({
    cast,
    receive,
  }: ShadowProps) {
    this.cast = cast;
    this.receive = receive;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as ShadowKeys] !== undefined)
    .map((key: string) => `${key}:${this[key as ShadowKeys]};`)
    .join('');
}
