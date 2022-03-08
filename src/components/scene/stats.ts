/**
 * The stats component displays a UI with performance-related metrics.
 * The stats component applies only to the [`<a-scene>` element](https://aframe.io/docs/1.3.0/core/scene.html).
 *
 * @see https://aframe.io/docs/1.3.0/components/stats.html#sidebar
 */
export type StatsProps = boolean;

export class Stats {
  readonly value: StatsProps;

  constructor(value: StatsProps) {
    this.value = value;
  }

  public toString = (): string => String(this.value);
}
