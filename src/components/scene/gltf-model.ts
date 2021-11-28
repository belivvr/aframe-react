/**
 * @see https://aframe.io/docs/1.2.0/components/gltf-model.html#scene-properties
 */
export interface GLTFModelProps {
  /**
   * Path to the Draco decoder libraries.
   */
  dracoDecoderPath?: string;
}

export class GLTFModel implements GLTFModelProps {
  readonly dracoDecoderPath: string;

  constructor({
    dracoDecoderPath = '',
  }: GLTFModelProps) {
    this.dracoDecoderPath = dracoDecoderPath;
  }

  public toString = (): string => `dracoDecoderPath:${this.dracoDecoderPath};`;
}
