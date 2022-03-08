import Component from './Component';
import { LayerType } from './types';

/**
 * The layer component renders images, videos or cubemaps into a [WebXR compositor layer](https://immersive-web.github.io/layers/) on supported browsers.
 *
 * The benefits of layers are:
 *
 * - **Performance and judder**: Once the layer is submitted,
 * the compositor is in charge of render it
 * at a fixed refresh rate (72Hz, 90Hz… depending on device).
 * Even if the application cannot keep up with the compositor
 * refresh rate the layer won’t drop any frames resulting in a smoother experience.
 * - **Visual fidelity**: The images in a layer will be sampled only once by the compositor.
 * Regular WebGL content is sampled twice: Once one rendering
 * to the eye buffer and a second time when copied to the compositor.
 * This results in a loss of details.
 * - **Battery life**: No double sampling results in less memory copies
 * reducing operations and battery consumption.
 * - **Latency**: Headset pose sampling for layers takes place at the end of the
 * frame using the most recent HMD pose. This paired with reprojection techniques
 * reduce the effective latency.
 *
 * @see https://aframe.io/docs/1.3.0/components/layer.html
 */
export interface LayerProps {
  /**
   * `quad`, `monocubemap` or `stereocubemap`
   */
  type?: LayerType;

  /**
   * Image or video loaded in the layer.
   *
   * @example
   * '#comicbook'
   */
  src?: string;

  /**
   * Rotates the cubemap 180 degrees in the y-axis.
   */
  rotateCubemap?: boolean;

  width?: number;
  height?: number;
}

export class Layer extends Component<LayerProps> {
  readonly type?: LayerType;

  readonly src?: string;

  readonly rotateCubemap?: boolean;

  readonly width?: number;

  readonly height?: number;
}
