import { SoundDistanceModel } from './types';

type SoundKeys = 'autoplay'
| 'distanceModel'
| 'loop'
| 'maxDistance'
| 'on'
| 'poolSize'
| 'positional'
| 'refDistance'
| 'rolloffFactor'
| 'src'
| 'volume';

/**
 * The sound component defines the entity as a source of sound or audio.
 * The sound component is positional and is thus affected by the [components-position](https://aframe.io/docs/1.2.0/components/position.html).
 *
 * > NOTE: Playing sound on iOS — in any browser — requires a physical user interaction.
 * > This is a browser limitation, and internal A-Frame events (like fusing cursors)
 * > do not count as interaction.
 * > Ways to deal with this include using a Begin Experience button to start ambient music,
 * > or creating audio sprites with libraries like [Howler.js](https://github.com/goldfire/howler.js).
 *
 * @see https://aframe.io/docs/1.2.0/components/sound.html
 */
export interface SoundProps {
  /**
   * Whether to automatically play sound once set.
   */
  autoplay?: boolean;

  /**
   * `linear`, `inverse`, or `exponential`
   */
  distanceModel?: SoundDistanceModel;

  /**
   * Whether to loop the sound once the sound finishes playing.
   */
  loop?: boolean;

  /**
   * Maximum distance between the audio source and the listener,
   * after which the volume is not reduced any further.
   */
  maxDistance?: number;

  /**
   * An event for the entity to listen to before playing sound.
   */
  on?: string;

  /**
   * Numbers of simultaneous instances of this sound that can be playing at the same time
   */
  poolSize?: number;

  /**
   * Whether or not the audio is positional (movable).
   */
  positional?: boolean;

  /**
   * Reference distance for reducing volume as the audio source moves further from the listener.
   */
  refDistance?: number;

  /**
   * Describes how quickly the volume is reduced as the source moves away from the listener.
   */
  rolloffFactor?: number;

  /**
   * Selector to an asset <audio>or url()-enclosed path to sound file.
   */
  src?: string;

  /**
   * How loud to play the sound.
   */
  volume?: number;
}

export class Sound implements SoundProps {
  readonly autoplay?: boolean;

  readonly distanceModel?: SoundDistanceModel;

  readonly loop?: boolean;

  readonly maxDistance?: number;

  readonly on?: string;

  readonly poolSize?: number;

  readonly positional?: boolean;

  readonly refDistance?: number;

  readonly rolloffFactor?: number;

  readonly src?: string;

  readonly volume?: number;

  constructor({
    autoplay,
    distanceModel,
    loop,
    maxDistance,
    on,
    poolSize,
    positional,
    refDistance,
    rolloffFactor,
    src,
    volume,
  }: SoundProps) {
    this.autoplay = autoplay;
    this.distanceModel = distanceModel;
    this.loop = loop;
    this.maxDistance = maxDistance;
    this.on = on;
    this.poolSize = poolSize;
    this.positional = positional;
    this.refDistance = refDistance;
    this.rolloffFactor = rolloffFactor;
    this.src = src;
    this.volume = volume;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as SoundKeys] !== undefined && this[key as SoundKeys] !== '')
    .map((key: string) => `${key}:${this[key as SoundKeys]};`)
    .join('');
}
