import type { HpMixedRealityControlsProps } from '../../src/components';
import { HpMixedRealityControls } from '../../src/components';

describe('HpMixedRealityControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new HpMixedRealityControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: HpMixedRealityControlsProps = {
      hand: 'left',
      orientationOffset: { x: 1, y: 2, z: 3 },
    };

    it('Should returns hp-mixed-reality-controls value', () => {
      expect(new HpMixedRealityControls(givenProps).toString()).toBe('hand:left;orientationOffset:1 2 3;');
    });
  });
});
