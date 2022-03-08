import Component from '../Component';

/**
 * The pool component allows for [object pooling](https://en.wikipedia.org/wiki/Object_pool_pattern).
 * This gives us a reusable pool of entities to avoid creating and
 * destroying the same kind of entities in dynamic scenes.
 * Object pooling helps reduce garbage collection pauses.
 *
 * Note that entities requested from the pool are paused by default and you need to call `.play()`
 * in order to activate their components’ tick functions.
 *
 * @see https://aframe.io/docs/1.2.0/components/pool.html
 */
export interface PoolProps {
  /**
   * Selector to store pooled entities. Defaults to the scene.
   */
  container?: string;

  /**
   * Mixin required to initialize the entities of the pool.
   */
  mixin?: string;

  /**
   * Number of preallocated entities in the pool.
   */
  size?: number;

  /**
   * Grow the pool automatically if more entities are requested after reaching the `size`.
   */
  dynamic?: boolean;
}

export class Pool extends Component<PoolProps> {
  readonly container?: string;

  readonly mixin?: string;

  readonly size?: number;

  readonly dynamic?: boolean;
}
