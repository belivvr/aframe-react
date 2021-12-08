import type { LinkProps } from '../../src/components';
import { Link } from '../../src/components';

describe('Link component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Link(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: LinkProps = {
      backgroundColor: 'crimson',
      highlighted: false,
    };

    it('Should returns link value', () => {
      expect(new Link(givenProps).toString()).toBe('backgroundColor:crimson;highlighted:false;');
    });
  });
});
