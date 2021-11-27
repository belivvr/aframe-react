const INSPECTOR_DEV_URL = 'https://aframe.io/aframe-inspector/dist/aframe-inspector.js';
const INSPECTOR_RELEASE_URL = 'https://unpkg.com/aframe-inspector@1.2.x/dist/aframe-inspector.min.js';
const INSPECTOR_URL = process.env.INSPECTOR_VERSION === 'dev' ? INSPECTOR_DEV_URL : INSPECTOR_RELEASE_URL;

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
  readonly url: URL;

  constructor({
    url = new URL(INSPECTOR_URL),
  }: InspectorProps) {
    this.url = url;
  }

  public toString = (): string => `url:${this.url.toString()};`;
}
