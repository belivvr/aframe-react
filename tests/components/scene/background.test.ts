import type { BackgroundProps } from '../../../src/components/scene';
import { Background } from '../../../src/components/scene';

describe('Background component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Background(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: BackgroundProps = {
      color: 'white',
      transparent: false,
    };

    it('Should returns Background value', () => {
      expect(new Background(givenProps).toString()).toBe('color:white;transparent:false;');
    });
  });
});
