import type { ViveControlsProps } from '../../src/components';
import { ViveControls } from '../../src/components';

describe('ViveControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new ViveControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: ViveControlsProps = {
      hand: 'left',
      model: true,
      orientationOffset: { x: 1, y: 2, z: 3 },
    };

    it('Should returns vive-controls value', () => {
      expect(new ViveControls(givenProps).toString()).toBe('hand:left;model:true;orientationOffset:1 2 3;');
    });
  });
});
