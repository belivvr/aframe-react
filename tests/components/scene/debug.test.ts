import { Debug } from '../../../src/components/scene';

describe('Debug component', () => {
  const givenProps = false;

  it('Should returns boolean string', () => {
    expect(new Debug(givenProps).toString()).toBe('false');
  });
});
