import type { ValveIndexControlsProps } from '../../src/components';
import { ValveIndexControls } from '../../src/components';

describe('ValveIndexControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new ValveIndexControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: ValveIndexControlsProps = {
      hand: 'left',
      model: true,
      orientationOffset: { x: 1, y: 2, z: 3 },
    };

    it('Should returns valve-index-controls value', () => {
      expect(new ValveIndexControls(givenProps).toString()).toBe('hand:left;model:true;orientationOffset:1 2 3;');
    });
  });
});
