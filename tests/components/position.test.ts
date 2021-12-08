import type { PositionProps } from '../../src/components';
import { Position } from '../../src/components';

describe('Position component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns zero values string', () => {
      expect(new Position(givenProps).toString()).toBe('0 0 0');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: PositionProps = { x: 1, y: 2, z: 3 };

    it('Should returns position value', () => {
      expect(new Position(givenProps).toString()).toBe('1 2 3');
    });
  });
});
