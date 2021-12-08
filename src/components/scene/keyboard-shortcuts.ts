type KeyboardShortcutsKeys = 'enterVR' | 'exitVR';

/**
 * The keyboard-shortcuts component toggles global keyboard shortcuts. The keyboard-shortcuts component applies only to the [`<a-scene>` element](https://aframe.io/docs/1.2.0/core/scene.html).
 * @see https://aframe.io/docs/1.2.0/components/keyboard-shortcuts.html
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

export class KeyboardShortcuts implements KeyboardShortcutsProps {
  readonly enterVR?: boolean;

  readonly exitVR?: boolean;

  constructor({
    enterVR,
    exitVR,
  }: KeyboardShortcutsProps) {
    this.enterVR = enterVR;
    this.exitVR = exitVR;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as KeyboardShortcutsKeys] !== undefined)
    .map((key: string) => `${key}:${this[key as KeyboardShortcutsKeys]};`)
    .join('');
}
