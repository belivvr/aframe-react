import type { Vec3 } from '../components';

/**
 * The box geometry defines boxes (i.e., any quadrilateral, not just cubes).
 */
export interface Box {
  /**
   * Width (in meters) of the sides on the X axis.
   */
  width?: number;

  /**
   * Height (in meters) of the sides on the Y axis.
   */
  height?: number;

  /**
   * Depth (in meters) of the sides on the Z axis.
   */
  depth?: number;

  /**
   * Number of segmented faces on the z-axis
   */
  segmentsDepth?: number;

  /**
   * Number of segmented faces on the y-axis
   */
  segmentsHeight?: number;

  /**
   * Number of segmented faces on the x-axis
   */
  segmentsWidth?: number;
}

/**
 * The circle geometry creates flat two-dimensional circles.
 * These can be complete circles or partial circles (like Pac-Man).
 * Note that because circles are flat, A-Frame will only render a single face
 * of the circle if we don’t specify `side: double` on the `material` component.
 */
export interface Circle {
  /**
   * Radius (in meters) of the circle.
   */
  radius?: number;

  /**
   * Number of triangles to construct the circle, like pizza slices.
   * A higher number of segments means the circle will be more round.
   */
  segments?: number;

  /**
    * Start angle for first segment. Can be used to define a partial circle.
    */
  thetaStart?: number;

  /**
   * The central angle (in degrees). Defaults to 360, which makes for a complete circle.
   */
  thetaLength?: number;
}

/**
 * The cone geometry is a cylinder geometry that have different top and bottom radii.
 */
export interface Cone {
  /**
   * Height of the cone.
   */
  height?: number;

  /**
   * Whether the ends of the cone are open (true) or capped (false).
   */
  openEnded?: boolean;

  /**
   * Radius of the bottom end of the cone.
   */
  radiusBottom?: number;

  /**
   * Radius of the top end of the cone.
   */
  radiusTop?: number;

  /**
  * Number of segmented faces around the circumference of the cone.
  */
  segmentsRadial?: number;

  /**
   * Number of rows of faces along the height of the cone.
   */
  segmentsHeight?: number;

  /**
   * Starting angle in degrees.
   */
  thetaStart?: number;

  /**
   * Central angle in degrees.
   */
  thetaLength?: number;
}

/**
 * The cylinder geometry creates cylinders in the traditional sense
 * like a Coca-Cola™ can, but it can also define shapes such as tubes and curved surfaces.
 */
export interface Cylinder {
  /**
   * Radius of the cylinder.
   */
  radius?: number;

  /**
   * Height of the cylinder.
   */
  height?: number;

  /**
   * Number of segmented faces around the circumference of the cylinder.
   */
  segmentsRadial?: number;

  /**
   * Number of rows of faces along the height of the cylinder.
   */
  segmentsHeight?: number;

  /**
   * Whether the ends of the cylinder are open (true) or capped (false).
   */
  openEnded?: boolean;

  /**
   * Starting angle in degrees.
   */
  thetaStart?: number;

  /**
   * Central angle in degrees.
   */
  thetaLength?: number;
}

/**
 * The dodecahedron geometry creates a polygon with twelve equally-sized faces.
 */
export interface Dodecahedron {
  /**
   * Radius (in meters) of the dodecahedron.
   */
  radius?: number;
}

/**
 * The octahedron geometry creates a polygon with eight equilateral triangular faces.
 */
export interface Octahedron {
  /**
   * Radius (in meters) of the tetrahedron.
   */
  radius?: number;
}

/**
 * The plane geometry creates a flat surface.
 * Because planes are flat, A-Frame will render only a single face
 * of the plane unless we specify `side: double` on the `material` component.
 */
export interface Plane {
  /**
   * Width along the X axis.
   */
  width?: number;

  /**
   * Height along the Y axis.
   */
  height?: number;

  /**
   * Number of segmented faces on the y-axis
   */
  segmentsHeight?: number;

  /**
   * Number of segmented faces on the x-axis
   */
  segmentsWidth?: number;
}

/**
 * The ring geometry creates a flat ring, like a [CD](https://en.wikipedia.org/wiki/Compact_disc).
 * Because the ring is flat, A-Frame will only render a single face
 * of the ring unless we specify `side: double` the `material` component.
 */
export interface Ring {
  /**
   * Radius of the inner hole of the ring.
   */
  radiusInner?: number;

  /**
   * Radius of the outer edge of the ring.
   */
  radiusOuter?: number;

  /**
   * Number of segments. A higher number means the ring will be more round.
   */
  segmentsTheta?: number;

  /**
   * Number of triangles within each face defined by segmentsTheta.
   */
  segmentsPhi?: number;

  /**
   * Starting angle in degrees.
   */
  thetaStart?: number;

  /**
   * Central angle in degrees.
   */
  thetaLength?: number;
}

export interface Sphere {
  /**
   * Radius of the sphere.
   */
  radius?: number;
  /**
   * Number of horizontal segments.
   */
  segmentsWidth?: number;
  /**
   * Number of vertical segments.
   */
  segmentsHeight?: number;
  /**
   * Horizontal starting angle.
   */
  phiStart?: number;
  /**
   * Horizontal sweep angle size.
   */
  phiLength?: number;
  /**
   * Vertical starting angle.
   */
  thetaStart?: number;
  /**
   * Vertical sweep angle size.
   */
  thetaLength?: number;
}

/**
 * The tetrahedron geometry creates a polygon with four triangular faces.
 */
export interface Tetrahedron {
  /**
   * Radius (in meters) of the tetrahedron.
   */
  radius?: number;
}

export interface Torus {
  /**
   * Radius of the outer edge of the torus.
   */
  radius?: number;

  /**
   * Radius of the tube.
   */
  radiusTubular?: number;

  /**
   * Number of segments along the circumference of the tube ends.
   * A higher number means the tube will be more round.
   */
  segmentsRadial?: number;

  /**
   * Number of segments along the circumference of the tube face.
   * A higher number means the tube will be more round.
   */
  segmentsTubular?: number;

  /**
   * Central angle.
   */
  arc?: number;
}

export interface TorusKnot {
  /**
   * Radius that contains the torus knot.
   */
  radius?: number;
  /**
   * Radius of the tubes of the torus knot.
   */
  radiusTubular?: number;
  /**
   * Number of segments along the circumference of the tube ends.
   * A higher number means the tube will be more round.
   */
  segmentsRadial?: number;
  /**
   * Number of segments along the circumference of the tube face.
   * A higher number means the tube will be more round.
   */
  segmentsTubular?: number;
  /**
   * How many times the geometry winds around its axis of rotational symmetry.
   */
  p?: number;
  /**
   * How many times the geometry winds around a circle in the interior of the torus.
   */
  q?: number;
}

/**
 * The triangle geometry creates a flat two-dimensional triangle.
 * Because triangles are flat, A-Frame will render only a single face,
 * which is the one with vertexA, vertexB, and vertexC appear in
 * counterclockwise order on the screen, unless we specify
 * `side: double` on the `material` component.
 */
export interface Triangle {
  /**
   * Coordinates of one of the three vertices
   */
  vertexA?: Vec3;

  /**
   * Coordinates of one of the three vertices
   */
  vertexB?: Vec3;

  /**
   * Coordinates of one of the three vertices
   */
  vertexC?: Vec3;
}

export const Default: {
  box: Box,
  circle: Circle,
  cone: Cone,
  cylinder: Cylinder,
  dodecahedron: Dodecahedron,
  octahedron: Octahedron,
  plane: Plane,
  ring: Ring,
  sphere: Sphere,
  tetrahedron: Tetrahedron,
  torus: Torus,
  torusKnot: TorusKnot,
  triangle: Triangle,
} = {
  box: {
    width: 1,
    height: 1,
    depth: 1,
    segmentsDepth: 1,
    segmentsHeight: 1,
    segmentsWidth: 1,
  },
  circle: {
    radius: 1,
    segments: 32,
    thetaStart: 0,
    thetaLength: 360,
  },
  cone: {
    height: 2,
    openEnded: false,
    radiusBottom: 1,
    radiusTop: 1,
    segmentsRadial: 36,
    segmentsHeight: 18,
    thetaStart: 0,
    thetaLength: 360,
  },
  cylinder: {
    radius: 1,
    height: 2,
    segmentsRadial: 36,
    segmentsHeight: 18,
    openEnded: false,
    thetaStart: 0,
    thetaLength: 360,
  },
  dodecahedron: {
    radius: 1,
  },
  octahedron: {
    radius: 1,
  },
  plane: {
    width: 1,
    height: 1,
    segmentsHeight: 1,
    segmentsWidth: 1,
  },
  ring: {
    radiusInner: 1,
    radiusOuter: 1,
    segmentsTheta: 32,
    segmentsPhi: 8,
    thetaStart: 0,
    thetaLength: 360,
  },
  sphere: {
    radius: 1,
    segmentsWidth: 18,
    segmentsHeight: 36,
    phiStart: 0,
    phiLength: 360,
    thetaStart: 0,
    thetaLength: 360,
  },
  tetrahedron: {
    radius: 1,
  },
  torus: {
    radius: 1,
    radiusTubular: 0.2,
    segmentsRadial: 36,
    segmentsTubular: 32,
    arc: 360,
  },
  torusKnot: {
    radius: 1,
    radiusTubular: 0.2,
    segmentsRadial: 36,
    segmentsTubular: 32,
    p: 2,
    q: 3,
  },
  triangle: {
    vertexA: {
      x: 0,
      y: 0.5,
      z: 0,
    },
    vertexB: {
      x: -0.5,
      y: -0.5,
      z: 0,
    },
    vertexC: {
      x: 0.5,
      y: -0.5,
      z: 0,
    },
  },
};
