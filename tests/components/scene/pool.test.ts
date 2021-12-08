import type { PoolProps } from '../../../src/components/scene';
import { Pool } from '../../../src/components/scene';

describe('Pool component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Pool(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: PoolProps = {
      mixin: 'enemy',
      size: 1,
      dynamic: true,
    };

    it('Should returns Pool value', () => {
      expect(new Pool(givenProps).toString()).toBe('mixin:enemy;size:1;dynamic:true;');
    });
  });
});
