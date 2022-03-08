import Component from '../Component';

/**
 * @see https://aframe.io/docs/1.2.0/components/gltf-model.html#scene-properties
 */
export interface GLTFModelProps {
  /**
   * Path to the Draco decoder libraries.
   */
  dracoDecoderPath?: string;
}

export class GLTFModel extends Component<GLTFModelProps> {
  readonly dracoDecoderPath?: string;
}
