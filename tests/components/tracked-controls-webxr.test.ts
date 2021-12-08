import type { TrackedControlsWebXRProps } from '../../src/components';
import { TrackedControlsWebXR } from '../../src/components';

describe('TrackedControlsWebXR component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new TrackedControlsWebXR(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: TrackedControlsWebXRProps = {
      hand: 'left',
      handTrackingEnabled: true,
      index: 1,
    };

    it('Should returns tracked-controls-webxr value', () => {
      expect(new TrackedControlsWebXR(givenProps).toString()).toBe('hand:left;handTrackingEnabled:true;index:1;');
    });
  });
});
