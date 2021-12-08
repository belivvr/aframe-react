import type { ViveFocusControlsProps } from '../../src/components';
import { ViveFocusControls } from '../../src/components';

describe('ViveFocusControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new ViveFocusControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: ViveFocusControlsProps = {
      hand: 'left',
      model: true,
      orientationOffset: { x: 1, y: 2, z: 3 },
    };

    it('Should returns vive-focus-controls value', () => {
      expect(new ViveFocusControls(givenProps).toString()).toBe('hand:left;model:true;orientationOffset:1 2 3;');
    });
  });
});
