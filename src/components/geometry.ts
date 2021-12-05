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
  readonly buffer: boolean;

  readonly primitive: Geometries;

  readonly skipCache: boolean;

  readonly width: number;

  readonly height: number;

  readonly depth: number;

  readonly segmentsDepth: number;

  readonly segmentsHeight: number;

  readonly segmentsWidth: number;

  readonly radius: number;

  readonly segments: number;

  readonly thetaStart: number;

  readonly thetaLength: number;

  readonly openEnded: boolean;

  readonly radiusBottom: number;

  readonly radiusTop: number;

  readonly segmentsRadial: number;

  readonly radiusInner: number;

  readonly radiusOuter: number;

  readonly segmentsTheta: number;

  readonly segmentsPhi: number;

  readonly phiStart: number;

  readonly phiLength: number;

  readonly radiusTubular: number;

  readonly segmentsTubular: number;

  readonly arc: number;

  readonly p: number;

  readonly q: number;

  readonly vertexA: Vec3Props;

  readonly vertexB: Vec3Props;

  readonly vertexC: Vec3Props;

  readonly extraProps: string;

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

    this.buffer = buffer ?? true;
    this.primitive = primitive ?? 'box';
    this.skipCache = skipCache ?? false;
    this.width = width ?? 1;
    this.height = height ?? ['cone', 'cylinder'].includes(this.primitive) ? 2 : 1;
    this.depth = depth ?? 1;
    this.segmentsDepth = segmentsDepth ?? 1;
    this.segmentsHeight = segmentsHeight ?? this.primitive === 'sphere' ? 36 : 1;
    this.segmentsWidth = segmentsWidth ?? this.primitive === 'sphere' ? 18 : 1;
    this.radius = radius ?? 1;
    this.segments = segments ?? 32;
    this.thetaStart = thetaStart ?? 0;
    this.thetaLength = thetaLength ?? 360;
    this.openEnded = openEnded ?? false;
    this.radiusBottom = radiusBottom ?? 1;
    this.radiusTop = radiusTop ?? 1;
    this.segmentsRadial = segmentsRadial ?? 36;
    this.radiusInner = radiusInner ?? this.primitive === 'ring' ? 1 : 18;
    this.radiusOuter = radiusOuter ?? 1;
    this.segmentsTheta = segmentsTheta ?? 32;
    this.segmentsPhi = segmentsPhi ?? 8;
    this.phiStart = phiStart ?? 0;
    this.phiLength = phiLength ?? 360;
    this.radiusTubular = radiusTubular ?? 0.2;
    this.segmentsTubular = segmentsTubular ?? 32;
    this.arc = arc ?? 360;
    this.p = p ?? 2;
    this.q = q ?? 3;
    this.vertexA = vertexA ?? { x: 0, y: 0.5, z: 0 };
    this.vertexB = vertexB ?? { x: -0.5, y: -0.5, z: 0 };
    this.vertexC = vertexC ?? { x: 0.5, y: -0.5, z: 0 };

    this.extraProps = Object.keys(props)
      .filter((prop) => !defaultKeys.includes(prop))
      .map((prop) => `${prop}:${props[prop]};`)
      .join('');
  }

  public toString = () => `buffer:${this.buffer};`
                        + `primitive:${this.primitive};`
                        + `skipCache:${this.skipCache};`
                        + `width:${this.width};`
                        + `height:${this.height};`
                        + `depth:${this.depth};`
                        + `segmentsDepth:${this.segmentsDepth};`
                        + `segmentsHeight:${this.segmentsHeight};`
                        + `segmentsWidth:${this.segmentsWidth};`
                        + `radius:${this.radius};`
                        + `segments:${this.segments};`
                        + `thetaStart:${this.thetaStart};`
                        + `thetaLength:${this.thetaLength};`
                        + `openEnded:${this.openEnded};`
                        + `radiusBottom:${this.radiusBottom};`
                        + `radiusTop:${this.radiusTop};`
                        + `segmentsRadial:${this.segmentsRadial};`
                        + `radiusInner:${this.radiusInner};`
                        + `radiusOuter:${this.radiusOuter};`
                        + `segmentsTheta:${this.segmentsTheta};`
                        + `segmentsPhi:${this.segmentsPhi};`
                        + `phiStart:${this.phiStart};`
                        + `phiLength:${this.phiLength};`
                        + `radiusTubular:${this.radiusTubular};`
                        + `segmentsTubular:${this.segmentsTubular};`
                        + `arc:${this.arc};`
                        + `p:${this.p};`
                        + `q:${this.q};`
                        + `${this.vertexA && `vertexA:${new Vec3(this.vertexA).toString()};`}`
                        + `${this.vertexB && `vertexB:${new Vec3(this.vertexB).toString()};`}`
                        + `${this.vertexC && `vertexC:${new Vec3(this.vertexC).toString()};`}`
                        + `${this.extraProps}`;
}
