import { Vec3 } from '../../../src/components';

describe('Vec3 component', () => {
  const givenProps = { x: 0, y: 1, z: 2 };

  it('Should returns Vec3 value', () => {
    expect(new Vec3(givenProps).toString()).toBe('0 1 2');
  });
});
