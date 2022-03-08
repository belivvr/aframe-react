/**
 * @see https://aframe.io/docs/1.2.0/introduction/visual-inspector-and-dev-tools.html
 */
export interface InspectorProps {
  /**
   * Inject the A-Frame Inspector.
   */
  url?: URL;
}

export class Inspector implements InspectorProps {
  readonly url?: URL;

  constructor({ url }: InspectorProps) {
    this.url = url;
  }

  public toString = (): string => (this.url ? `url:${this.url?.toString()};` : '');
}
