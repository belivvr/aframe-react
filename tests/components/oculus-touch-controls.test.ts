import type { OculusTouchControlsProps } from '../../src/components';
import { OculusTouchControls } from '../../src/components';

describe('OculusTouchControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new OculusTouchControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: OculusTouchControlsProps = {
      hand: 'left',
      orientationOffset: { x: 1, y: 2, z: 3 },
      controllerType: 'oculus-touch-v3',
    };

    it('Should returns oculus-touch-controls value', () => {
      expect(new OculusTouchControls(givenProps).toString()).toBe('hand:left;orientationOffset:1 2 3;controllerType:oculus-touch-v3;');
    });
  });
});
