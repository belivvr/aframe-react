import type { HandTrackingControlsProps } from '../../src/components';
import { HandTrackingControls } from '../../src/components';

describe('HandTrackingControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new HandTrackingControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: HandTrackingControlsProps = {
      hand: 'left',
      modelStyle: 'dots',
      modelColor: 'white',
    };

    it('Should returns hand-tracking-controls value', () => {
      expect(new HandTrackingControls(givenProps).toString()).toBe('hand:left;modelStyle:dots;modelColor:white;');
    });
  });
});
