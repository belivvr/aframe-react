import type { MagicleapControlsProps } from '../../src/components';
import { MagicleapControls } from '../../src/components';

describe('MagicleapControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new MagicleapControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: MagicleapControlsProps = {
      hand: 'right',
      model: true,
      orientationOffset: { x: 3, y: 2, z: 1 },
    };

    it('Should returns magicleap-controls value', () => {
      expect(new MagicleapControls(givenProps).toString()).toBe('hand:right;model:true;orientationOffset:3 2 1;');
    });
  });
});
