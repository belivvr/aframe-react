import Component from '../Component';

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
 * @see https://aframe.io/docs/1.3.0/components/renderer.html
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
   * Fragment shader [precision](https://aframe.io/docs/1.3.0/components/renderer.html#precision) : low, medium or high.
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

export class Renderer extends Component<RendererProps> {
  constructor(props: RendererProps) {
    super({
      ...props,
      // @ts-ignore
      foveationLevel: props.foveationLevel === undefined
        ? props.foveationLevel
        : FoveationLevel[props.foveationLevel],
    });
  }
}
