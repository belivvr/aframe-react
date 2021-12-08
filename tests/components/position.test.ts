import type { PositionProps } from '../../src/components';
import { Position } from '../../src/components';

describe('Position component', () => {
  const givenProps: PositionProps = { x: 1, y: 2, z: 3 };

  it('Should returns position value', () => {
    expect(new Position(givenProps).toString()).toBe('1 2 3');
  });
});
