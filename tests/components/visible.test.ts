import type { VisibleProps } from '../../src/components';
import { Visible } from '../../src/components';

describe('Visible component', () => {
  context('When given props is undefined', () => {
    const givenProps = undefined;

    it('Should returns true string', () => {
      expect(new Visible(givenProps).toString()).toBe('true');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: VisibleProps = false;

    it('Should returns visible value', () => {
      expect(new Visible(givenProps).toString()).toBe('false');
    });
  });
});
