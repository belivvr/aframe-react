/**
 * The embedded component removes fullscreen CSS styles from A-Frame’s <canvas> element,
 * making it easier to embed within the layout of an existing webpage.
 * Embedding removes the default fixed positioning
 * from the canvas and makes the Enter VR button smaller.
 *
 * @see https://aframe.io/docs/1.2.0/components/embedded.html
 */
export type Embedded = boolean;

export const Default: Embedded = true;
