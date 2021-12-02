import type { Vec3Props } from './types';
import { Vec3 } from './types';

/**
 * The raycaster component provides line-based intersection testing with a [raycaster](https://en.wikipedia.org/wiki/Ray_casting). Raycasting is the method of extending a line from an origin towards a direction, and checking whether that line intersects with other entities.
 *
 * The raycaster component uses the [three.js raycaster](https://threejs.org/docs/#api/core/Raycaster). The raycaster checks for intersections at a certain interval against a list of objects, and will emit events on the entity when it detects intersections or clearing of intersections (i.e., when the raycaster is no longer intersecting an entity).
 *
 * We prescribe that the set of objects that the raycaster tests
 * for intersection is explicitly defined via the objects selector property described below.
 * Raycasting is an expensive operation, and we should raycast against
 * only targets that need to be interactable at any given time.
 *
 * The [cursor component](https://aframe.io/docs/1.2.0/components/cursor.html) and [laser-controls components](https://aframe.io/docs/1.2.0/components/laser-controls.html) both build on top of the raycaster component.

 * @see https://aframe.io/docs/1.2.0/components/raycaster.html
 */
export interface RaycasterProps {
  /**
   * Whether to automatically refresh raycaster’s list of objects
   * to test for intersection using mutation observers to detect added
   * or removed entities and components.
   */
  autoRefresh?: boolean;

  /**
   * Vector3 coordinate of which direction the ray should point
   * from relative to the entity’s origin.
   */
  direction?: Vec3Props;

  /**
   * Whether raycaster is actively checking for intersections.
   */
  enabled?: boolean;

  /**
   * Maximum distance under which resulting entities are returned. Cannot be lower than `near`.
   */
  far?: number;

  /**
   * Number of milliseconds to wait in between each intersection test.
   * Lower number is better for faster updates.
   * Higher number is better for performance.
   * Intersection tests are performed at most once per frame.
   */
  interval?: number;

  /**
   * Minimum distance over which resulting entities are returned. Cannot be lower than 0.
   */
  near?: number;

  /**
   * Query selector to pick which objects to test for intersection.
   * If not specified, all entities will be tested.
   * Note that only objects attached via `.setObject3D` and their recursive children will be tested.
   *
   * @example
   * '.collidable'
   */
  objects?: string;

  /**
   * Vector3 coordinate of where the ray should originate from relative to the entity’s origin.
   */
  origin?: Vec3Props;

  /**
   * Whether or not to display the raycaster visually with the [line component](https://aframe.io/docs/1.2.0/components/line.html).
   */
  showLine?: boolean;

  /**
   * Raycaster line color if showLine is enabled.
   */
  lineColor?: string;

  /**
   * Raycaster line opacity if showLine is enabled.
   */
  lineOpacity?: number;

  /**
   * Whether the raycaster origin and direction properties are specified in world coordinates.
   */
  useWorldCoordinates?: boolean;
}

export class Raycaster implements RaycasterProps {
  readonly autoRefresh: boolean;

  readonly direction: Vec3Props;

  readonly enabled: boolean;

  readonly far: number;

  readonly interval: number;

  readonly near: number;

  readonly objects?: string;

  readonly origin: Vec3Props;

  readonly showLine: boolean;

  readonly lineColor: string;

  readonly lineOpacity: number;

  readonly useWorldCoordinates: boolean;

  constructor({
    autoRefresh = true,
    direction = { x: 0, y: 0, z: -1 },
    enabled = true,
    far = 1000,
    interval = 0,
    near = 0,
    objects,
    origin = { x: 0, y: 0, z: 0 },
    showLine = false,
    lineColor = 'white',
    lineOpacity = 1,
    useWorldCoordinates = false,
  }: RaycasterProps) {
    this.autoRefresh = autoRefresh;
    this.direction = direction;
    this.enabled = enabled;
    this.far = far;
    this.interval = interval;
    this.near = near;
    this.objects = objects;
    this.origin = origin;
    this.showLine = showLine;
    this.lineColor = lineColor;
    this.lineOpacity = lineOpacity;
    this.useWorldCoordinates = useWorldCoordinates;
  }

  public toString = (): string => `autoRefresh:${this.autoRefresh};`
                                + `direction:${new Vec3(this.direction).toString()};`
                                + `enabled:${this.enabled};`
                                + `far:${this.far};`
                                + `interval:${this.interval};`
                                + `near:${this.near};`
                                + `${this.objects ? `objects:${this.objects};` : ''}`
                                + `origin:${new Vec3(this.origin).toString()};`
                                + `showLine:${this.showLine};`
                                + `lineColor:${this.lineColor};`
                                + `lineOpacity:${this.lineOpacity};`
                                + `useWorldCoordinates:${this.useWorldCoordinates};`;
}
