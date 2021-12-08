import { Embedded } from '../../../src/components/scene';

describe('Embedded component', () => {
  const givenProps = false;

  it('Should returns boolean string', () => {
    expect(new Embedded(givenProps).toString()).toBe('false');
  });
});
