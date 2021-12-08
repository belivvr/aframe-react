import type { RotationProps } from '../../src/components';
import { Rotation } from '../../src/components';

describe('Rotation component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns zero values string', () => {
      expect(new Rotation(givenProps).toString()).toBe('0 0 0');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: RotationProps = { x: 1, y: 2, z: 3 };

    it('Should returns position value', () => {
      expect(new Rotation(givenProps).toString()).toBe('1 2 3');
    });
  });
});
