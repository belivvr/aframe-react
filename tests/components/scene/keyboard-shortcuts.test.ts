import type { KeyboardShortcutsProps } from '../../../src/components/scene';
import { KeyboardShortcuts } from '../../../src/components/scene';

describe('KeyboardShortcuts component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new KeyboardShortcuts(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: KeyboardShortcutsProps = {
      enterVR: true,
      exitVR: false,
    };

    it('Should returns KeyboardShortcuts value', () => {
      expect(new KeyboardShortcuts(givenProps).toString()).toBe('enterVR:true;exitVR:false;');
    });
  });
});
