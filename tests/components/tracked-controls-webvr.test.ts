import type { TrackedControlsWebVRProps } from '../../src/components';
import { TrackedControlsWebVR } from '../../src/components';

describe('TrackedControlsWebVR component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new TrackedControlsWebVR(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: TrackedControlsWebVRProps = {
      autoHide: false,
      controller: 2,
      hand: 'right',
      orientationOffset: { x: 1, y: 2, z: 3 },
    };

    it('Should returns tracked-controls-webvr value', () => {
      expect(new TrackedControlsWebVR(givenProps).toString()).toBe('autoHide:false;controller:2;hand:right;orientationOffset:1 2 3;');
    });
  });
});
