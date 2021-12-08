/**
 * The debug component enables component-to-DOM serialization.
 *
 * @see https://aframe.io/docs/1.2.0/components/debug.html
 */
export type DebugProps = boolean;

export class Debug {
  readonly value: DebugProps;

  constructor(value: DebugProps = true) {
    this.value = value;
  }

  public toString = (): string => String(this.value);
}
