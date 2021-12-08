import type { ShadowProps } from '../../src/components';
import { Shadow } from '../../src/components';

describe('Shadow component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Shadow(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: ShadowProps = {
      cast: true,
      receive: false,
    };

    it('Should returns shadow value', () => {
      expect(new Shadow(givenProps).toString()).toBe('cast:true;receive:false;');
    });
  });
});
