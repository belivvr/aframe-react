import type { TrackedControlsProps } from '../../src/components';
import { TrackedControls } from '../../src/components';

describe('TrackedControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new TrackedControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: TrackedControlsProps = {
      autoHide: true,
      controller: 2,
      id: '#unknown',
      orientationOffset: { x: 1, y: 2, z: 3 },
    };

    it('Should returns tracked-controls value', () => {
      expect(new TrackedControls(givenProps).toString()).toBe('autoHide:true;controller:2;id:#unknown;orientationOffset:1 2 3;');
    });
  });
});
