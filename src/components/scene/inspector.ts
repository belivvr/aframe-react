type InspectorKeys = 'url';

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

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as InspectorKeys] !== undefined)
    .map((key: string) => `${key}:${this[key as InspectorKeys]};`)
    .join('');
}
