import type { WindowsMotionControlsProps } from '../../src/components';
import { WindowsMotionControls } from '../../src/components';

describe('WindowsMotionControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new WindowsMotionControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: WindowsMotionControlsProps = {
      hand: 'left',
      pair: 1,
      model: true,
    };

    it('Should returns windowsMotionControls value', () => {
      expect(new WindowsMotionControls(givenProps).toString()).toBe('hand:left;pair:1;model:true;');
    });
  });
});
