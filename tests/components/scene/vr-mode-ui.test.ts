import type { VrModeUIProps } from '../../../src/components/scene';
import { VrModeUI } from '../../../src/components/scene';

describe('VrModeUI component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new VrModeUI(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: VrModeUIProps = {
      enabled: true,
      enterVRButton: 'enterVR',
    };

    it('Should returns VrModeUI value', () => {
      expect(new VrModeUI(givenProps).toString()).toBe('enabled:true;enterVRButton:enterVR;');
    });
  });
});
