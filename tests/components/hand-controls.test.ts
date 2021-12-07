import type { HandControlsProps } from '../../src/components';
import { HandControls } from '../../src/components';

describe('HandControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new HandControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: HandControlsProps = {
      color: 'black',
      hand: 'left',
      handModelStyle: 'toon',
    };

    it('Should returns hand-controls value', () => {
      expect(new HandControls(givenProps).toString()).toBe('color:black;hand:left;handModelStyle:toon;');
    });
  });
});
