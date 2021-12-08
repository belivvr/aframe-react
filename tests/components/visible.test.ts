import type { VisibleProps } from '../../src/components';
import { Visible } from '../../src/components';

describe('Visible component', () => {
  const givenProps: VisibleProps = false;

  it('Should returns visible value', () => {
    expect(new Visible(givenProps).toString()).toBe('false');
  });
});
