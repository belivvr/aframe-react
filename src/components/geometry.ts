import type { Geometries } from './types';

/**
 * The geometry component provides a basic shape for an entity.
 * The primitive property defines the general shape.
 * Geometric primitives, in computer graphics, are irreducible basic shapes.
 * A material component is commonly defined to provide a appearance alongside the shape
 * to create a complete mesh.
 *
 * @see https://aframe.io/docs/1.2.0/components/geometry.html
 */
export interface GeometryProps {
  buffer?: boolean;

  /**
   * Name of a geometry (e.g., one of the geometries listed below).
   * Determines the geometry type and what other properties are available.
   */
  primitive?: Geometries;

  /**
   * Disable retrieving the shared geometry object from the cache.
   */
  skipCache?: boolean;
}

export class Geometry implements GeometryProps {
  readonly buffer: boolean;

  readonly primitive: Geometries;

  readonly skipCache: boolean;

  constructor({
    buffer = true,
    primitive = 'box',
    skipCache = false,
  }: GeometryProps) {
    this.buffer = buffer;
    this.primitive = primitive;
    this.skipCache = skipCache;
  }

  public toString = () => `buffer:${this.buffer};`
                        + `primitive:${this.primitive};`
                        + `skipCache:${this.skipCache};`;
}
