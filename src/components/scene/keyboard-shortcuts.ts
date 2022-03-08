import Component from '../Component';

/**
 * The keyboard-shortcuts component toggles global keyboard shortcuts. The keyboard-shortcuts component applies only to the [`<a-scene>` element](https://aframe.io/docs/1.3.0/core/scene.html).
 * @see https://aframe.io/docs/1.3.0/components/keyboard-shortcuts.html
 */
export interface KeyboardShortcutsProps {
  /**
   * Enables the shortcut to press ‘F’ to enter VR.
   */
  enterVR?: boolean;

  /**
   * Enables the shortcut to press ‘ESC’ to exit VR.
   */
  exitVR?: boolean;
}

export class KeyboardShortcuts extends Component<KeyboardShortcutsProps> {
  readonly enterVR?: boolean;

  readonly exitVR?: boolean;
}
