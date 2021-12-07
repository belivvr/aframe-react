import type { Geometries, Vec3Props } from './types';
import { Vec3 } from './types';

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

  /**
   * a-box, a-plane
   *
   * Width (in meters) of the sides on the X axis.
   */
  width?: number;

  /**
   * a-box, a-cone, a-cylinder, a-plane
   *
   * Height (in meters) of the sides on the Y axis.
   */
  height?: number;

  /**
   * a-box
   *
   * Depth (in meters) of the sides on the Z axis.
   */
  depth?: number;

  /**
   * a-box
   *
   * Number of segmented faces on the z-axis
   */
  segmentsDepth?: number;

  /**
   * a-cone, a-cylinder, a-torus, a-torusKnot
   *
   * Number of segmented faces around the circumference of the cone.
   */
  segmentsRadial?: number;

  /**
   * a-box, a-cone, a-cylinder, a-plane, a-sphere
   *
   * Number of segmented faces on the y-axis
   */
  segmentsHeight?: number;

  /**
   * a-box, a-plane, a-sphere
   *
   * Number of segmented faces on the x-axis
   */
  segmentsWidth?: number;

  /**
   * a-circle,
   * a-cylinder,
   * a-dodecahedron,
   * a-octahedron,
   * a-sphere,
   * a-tetrahedron,
   * a-torus,
   * a-torusKnot
   *
   * Radius (in meters) of the circle.
   */
  radius?: number;

  /**
   * a-circle
   *
   * Number of triangles to construct the circle, like pizza slices.
   * A higher number of segments means the circle will be more round.
   */
  segments?: number;

  /**
   * a-circle, a-cone, a-cylinder, a-ring, a-sphere
   *
   * Start angle for first segment. Can be used to define a partial circle.
   */
  thetaStart?: number;

  /**
   * a-circle, a-cone, a-cylinder, a-ring, a-sphere
   *
   * The central angle (in degrees). Defaults to 360, which makes for a complete circle.
   */
  thetaLength?: number;

  /**
   * a-cone, a-cylinder
   *
   * Whether the ends of the cone are open (true) or capped (false).
   */
  openEnded?: boolean;

  /**
   * a-cone
   *
   * Radius of the bottom end of the cone.
   */
  radiusBottom?: number;

  /**
   * a-cone
   *
   * Radius of the top end of the cone.
   */
  radiusTop?: number;

  /**
   * a-ring
   *
   * Radius of the inner hole of the ring.
   */
  radiusInner?: number;

  /**
   * a-ring
   *
   * Radius of the outer edge of the ring.
   */
  radiusOuter?: number;

  /**
   * a-ring
   *
   * Number of segments. A higher number means the ring will be more round.
   */
  segmentsTheta?: number;

  /**
   * a-ring
   *
   * Number of triangles within each face defined by segmentsTheta.
   */
  segmentsPhi?: number;

  /**
   * a-sphere
   *
   * Horizontal starting angle.
   */
  phiStart?: number;

  /**
   * a-sphere
   *
   * Horizontal sweep angle size.
   */
  phiLength?: number;

  /**
   * a-torus, a-torusKnot
   *
   * Radius of the tube.
   */
  radiusTubular?: number;

  /**
   * a-torus, a-torusKnot
   *
   * Number of segments along the circumference of the tube face.
   * A higher number means the tube will be more round.
   */
  segmentsTubular?: number;

  /**
   * a-torus
   *
   * Central angle.
   */
  arc?: number;

  /**
   * a-torusKnot
   *
   * How many times the geometry winds around its axis of rotational symmetry.
   */
  p?: number;
  /**
   * a-torusKnot
   *
   * How many times the geometry winds around a circle in the interior of the torus.
   */
  q?: number;

  /**
   * a-triangle
   *
   * Coordinates of one of the three vertices
   */
  vertexA?: Vec3Props;

  /**
   * a-triangle
   *
   * Coordinates of one of the three vertices
   */
  vertexB?: Vec3Props;

  /**
   * a-triangle
   *
   * Coordinates of one of the three vertices
   */
  vertexC?: Vec3Props;

  [key: string]: unknown;
}

export class Geometry implements GeometryProps {
  readonly buffer?: boolean;

  readonly primitive?: Geometries;

  readonly skipCache?: boolean;

  readonly width?: number;

  readonly height?: number;

  readonly depth?: number;

  readonly segmentsDepth?: number;

  readonly segmentsHeight?: number;

  readonly segmentsWidth?: number;

  readonly radius?: number;

  readonly segments?: number;

  readonly thetaStart?: number;

  readonly thetaLength?: number;

  readonly openEnded?: boolean;

  readonly radiusBottom?: number;

  readonly radiusTop?: number;

  readonly segmentsRadial?: number;

  readonly radiusInner?: number;

  readonly radiusOuter?: number;

  readonly segmentsTheta?: number;

  readonly segmentsPhi?: number;

  readonly phiStart?: number;

  readonly phiLength?: number;

  readonly radiusTubular?: number;

  readonly segmentsTubular?: number;

  readonly arc?: number;

  readonly p?: number;

  readonly q?: number;

  readonly vertexA?: Vec3Props;

  readonly vertexB?: Vec3Props;

  readonly vertexC?: Vec3Props;

  readonly extraProps?: string;

  [key: string]: unknown;

  constructor(props: GeometryProps) {
    const defaultKeys = [
      'buffer',
      'primitive',
      'skipCache',
      'width',
      'height',
      'depth',
      'segmentsDepth',
      'segmentsHeight',
      'segmentsWidth',
      'radius',
      'segments',
      'thetaStart',
      'thetaLength',
      'openEnded',
      'radiusBottom',
      'radiusTop',
      'segmentsRadial',
      'radiusInner',
      'radiusOuter',
      'segmentsTheta',
      'segmentsPhi',
      'phiStart',
      'phiLength',
      'radiusTubular',
      'segmentsTubular',
      'arc',
      'vertexA',
      'vertexB',
      'vertexC',
    ];
    const {
      buffer,
      primitive,
      skipCache,
      width,
      height,
      depth,
      segmentsDepth,
      segmentsHeight,
      segmentsWidth,
      radius,
      segments,
      thetaStart,
      thetaLength,
      openEnded,
      radiusBottom,
      radiusTop,
      segmentsRadial,
      radiusInner,
      radiusOuter,
      segmentsTheta,
      segmentsPhi,
      phiStart,
      phiLength,
      radiusTubular,
      segmentsTubular,
      arc,
      p,
      q,
      vertexA,
      vertexB,
      vertexC,
    } = props;

    this.buffer = buffer;
    this.primitive = primitive;
    this.skipCache = skipCache;
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.segmentsDepth = segmentsDepth;
    this.segmentsHeight = segmentsHeight;
    this.segmentsWidth = segmentsWidth;
    this.radius = radius;
    this.segments = segments;
    this.thetaStart = thetaStart;
    this.thetaLength = thetaLength;
    this.openEnded = openEnded;
    this.radiusBottom = radiusBottom;
    this.radiusTop = radiusTop;
    this.segmentsRadial = segmentsRadial;
    this.radiusInner = radiusInner;
    this.radiusOuter = radiusOuter;
    this.segmentsTheta = segmentsTheta;
    this.segmentsPhi = segmentsPhi;
    this.phiStart = phiStart;
    this.phiLength = phiLength;
    this.radiusTubular = radiusTubular;
    this.segmentsTubular = segmentsTubular;
    this.arc = arc;
    this.p = p;
    this.q = q;
    this.vertexA = vertexA;
    this.vertexB = vertexB;
    this.vertexC = vertexC;

    this.extraProps = Object.keys(props)
      .filter((prop) => !defaultKeys.includes(prop))
      .map((prop) => `${prop}:${props[prop]};`)
      .join('');
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key] !== undefined && this[key] !== '')
    .map((key: string) => {
      if ([
        'vertexA',
        'vertexB',
        'vertexC',
      ].includes(key)) {
        return `${key}:${new Vec3(this[key] as Vec3Props).toString()};`;
      }
      return `${key}:${this[key]};`;
    })
    .join('');
}
