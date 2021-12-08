import type { ShadowProps } from '../../../src/components/scene';
import { Shadow } from '../../../src/components/scene';

describe('Shadow component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Shadow(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: ShadowProps = {
      type: 'pcfsoft',
    };

    it('Should returns Shadow value', () => {
      expect(new Shadow(givenProps).toString()).toBe('type:pcfsoft;');
    });
  });
});
