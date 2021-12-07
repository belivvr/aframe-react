import { Vec2 } from '../../../src/components';

describe('Vec2 component', () => {
  const givenProps = { x: 0, y: 1 };

  it('Should returns Vec2 value', () => {
    expect(new Vec2(givenProps).toString()).toBe('0 1');
  });
});
