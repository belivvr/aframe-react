import type { OculusGoControlsProps } from '../../src/components';
import { OculusGoControls } from '../../src/components';

describe('OculusGoControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new OculusGoControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: OculusGoControlsProps = {
      hand: 'left',
      orientationOffset: { x: 1, y: 2, z: 3 },
      armModel: true,
    };

    it('Should returns oculus-go-controls value', () => {
      expect(new OculusGoControls(givenProps).toString()).toBe('hand:left;orientationOffset:1 2 3;armModel:true;');
    });
  });
});
