import type { ScaleProps } from '../../src/components';
import { Scale } from '../../src/components';

describe('Scale component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns 1 values string', () => {
      expect(new Scale(givenProps).toString()).toBe('1 1 1');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: ScaleProps = { x: 1, y: 2, z: 3 };

    it('Should returns scale value', () => {
      expect(new Scale(givenProps).toString()).toBe('1 2 3');
    });
  });
});
