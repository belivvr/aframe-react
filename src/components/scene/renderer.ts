type RendererKeys = 'antialias' |
'highRefreshRate' |
'logarithmicDepthBuffer' |
'maxCanvasWidth' |
'maxCanvasHeight' |
'physicallyCorrectLights' |
'precision' |
'sortObjects' |
'colorManagement' |
'gammaOutput' |
'alpha' |
'foveationLevel';

enum FoveationLevel {
  none,
  low,
  medium,
  high,
}

type FoveationLevelType = 'none' | 'low' | 'medium' | 'high';
type PrecisionType = 'low' | 'medium' | 'high';

/**
 * The `renderer` system configures a scene’s [THREE.WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) instance.
 * It also configures presentation attributes when entering WebVR/WebXR.
 *
 * @see https://aframe.io/docs/1.2.0/components/renderer.html
 *
 * @example
 * ```tsx
 * <Scene renderer={{"
 *   antialias: true,
 *   colorManagement: true,
 *   sortObjects: true,
 *   physicallyCorrectLights: true,
 *   maxCanvasWidth: 1920,
 *   maxCanvasHeight: 1920,
 * }}>
 *   // ...
 * </Scene>
 * ```
 */
export interface RendererProps {
  /**
   * Whether to perform antialiasing. If `auto`, antialiasing is disabled on mobile.
   */
  antialias?: boolean | 'auto';

  /**
   * Toggles 72hz mode on Oculus Browser. Defaults to 60hz.
   */
  highRefreshRate?: boolean;

  /**
   * Whether to use a logarithmic depth buffer.
   */
  logarithmicDepthBuffer?: boolean | 'auto';

  /**
   * Maximum canvas width. Uses the size multiplied by device pixel ratio.
   * Does not limit canvas width if set to -1.
   */
  maxCanvasWidth?: number;

  /**
   * Maximum canvas height. Behaves the same as maxCanvasWidth.
   */
  maxCanvasHeight?: number;

  /**
   * Whether to use physically-correct light attenuation.
   */
  physicallyCorrectLights?: boolean;

  /**
   * Fragment shader [precision](https://aframe.io/docs/1.2.0/components/renderer.html#precision) : low, medium or high.
   */
  precision?: PrecisionType;

  /**
   * Whether to sort objects before rendering.
   */
  sortObjects?: boolean;

  /**
   * Whether to use a color-managed linear workflow.
   */
  colorManagement?: boolean;

  gammaOutput?: boolean;

  /**
   * Whether the canvas should contain an alpha buffer.
   */
  alpha?: boolean;

  /**
   * Enables foveation in VR to improve perf. 0 none, 1 low, 2 medium, 3 high
   */
  foveationLevel?: FoveationLevelType;
}

export class Renderer implements RendererProps {
  readonly antialias?: boolean | 'auto';

  readonly highRefreshRate?: boolean;

  readonly logarithmicDepthBuffer?: boolean | 'auto';

  readonly maxCanvasWidth?: number;

  readonly maxCanvasHeight?: number;

  readonly physicallyCorrectLights?: boolean;

  readonly precision?: PrecisionType;

  readonly sortObjects?: boolean;

  readonly colorManagement?: boolean;

  readonly gammaOutput?: boolean;

  readonly alpha?: boolean;

  readonly foveationLevel?: FoveationLevelType;

  constructor({
    antialias,
    highRefreshRate,
    logarithmicDepthBuffer,
    maxCanvasWidth,
    maxCanvasHeight,
    physicallyCorrectLights,
    precision,
    sortObjects,
    colorManagement,
    gammaOutput,
    alpha,
    foveationLevel,
  }: RendererProps) {
    this.antialias = antialias;
    this.highRefreshRate = highRefreshRate;
    this.logarithmicDepthBuffer = logarithmicDepthBuffer;
    this.maxCanvasWidth = maxCanvasWidth;
    this.maxCanvasHeight = maxCanvasHeight;
    this.physicallyCorrectLights = physicallyCorrectLights;
    this.precision = precision;
    this.sortObjects = sortObjects;
    this.colorManagement = colorManagement;
    this.gammaOutput = gammaOutput;
    this.alpha = alpha;
    this.foveationLevel = foveationLevel;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as RendererKeys] !== undefined)
    .map((key: string) => {
      if (key === 'foveationLevel') {
        const foveationLevel = this.foveationLevel as FoveationLevelType;
        return `foveationLevel:${FoveationLevel[foveationLevel]};`;
      }
      return `${key}:${this[key as RendererKeys]};`;
    })
    .join('');
}
