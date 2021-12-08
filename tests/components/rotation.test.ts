import type { RotationProps } from '../../src/components';
import { Rotation } from '../../src/components';

describe('Rotation component', () => {
  const givenProps: RotationProps = { x: 1, y: 2, z: 3 };

  it('Should returns position value', () => {
    expect(new Rotation(givenProps).toString()).toBe('1 2 3');
  });
});
