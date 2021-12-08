import { Stats } from '../../../src/components/scene';

describe('Stats component', () => {
  const givenProps = false;

  it('Should returns boolean string', () => {
    expect(new Stats(givenProps).toString()).toBe('false');
  });
});
