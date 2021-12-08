import type { LaserControlsProps } from '../../src/components';
import { LaserControls } from '../../src/components';

describe('LaserControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new LaserControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: LaserControlsProps = {
      hand: 'left',
      model: true,
    };

    it('Should returns hp-mixed-reality-controls value', () => {
      expect(new LaserControls(givenProps).toString()).toBe('hand:left;model:true;');
    });
  });
});
