import Component from './Component';

/**
 * The link component connects between experiences and allows for traversing between VR web pages.
 * When activated via an event, the link component sends the user to a different page,
 * just like a normal web page redirect.
 * To maintain VR across pages, the following conditions must apply:
 *
 * - Your browser implements the WebXR in-VR navigation proposal.
 * Notice that is not yet part of the standard.
 * Support is experimental,
 * varies across browsers and it might require enabling manually in settings.
 * - The destination Web page listens to the window [sessiongranted] event and enters VR.
 * A-Frame experiences behave this way by default.
 * - At the moment,
 * The Oculus Browser on Quest is the only browser shipping the in-VR navigation proposal.
 *
 * @see https://aframe.io/docs/1.2.0/components/link.html
 */
export interface LinkProps {
  /**
   * Inner (background) color of the portal.
   */
  backgroundColor?: string;

  /**
   * Border color of the portal.
   */
  borderColor?: string;

  /**
   * Boolean to toggle link highlight color.
   */
  highlighted?: boolean;

  /**
   * Border color when highlighted.
   */
  highlightedColor?: string;

  /**
   * Destination URL where the link points to.
   */
  href?: string;

  /**
   * 360° image used as scene preview in the portal.
   * Can be a selector to an `<img>` element or a URL.
   */
  image?: string;

  /**
   * Event to listen to that triggers link traversal.
   */
  on?: string;

  /**
   * Whether the 360° image is fully expanded for preview.
   */
  peekMode?: boolean;

  /**
   * Text displayed on the link. The href or page URL is used if not defined.
   */
  title?: string;

  /**
   * Color of the text displayed on the link.
   */
  titleColor?: string;

  /**
   * Whether to enable the default visual appearance of a portal.
   * Set to false if we want to implement our own pattern or form of link traversal.
   */
  visualAspectEnabled?: boolean;
}

export class Link extends Component<LinkProps> {
  readonly backgroundColor?: string;

  readonly borderColor?: string;

  readonly highlighted?: boolean;

  readonly highlightedColor?: string;

  readonly href?: string;

  readonly image?: string;

  readonly on?: string;

  readonly peekMode?: boolean;

  readonly title?: string;

  readonly titleColor?: string;

  readonly visualAspectEnabled?: boolean;
}
