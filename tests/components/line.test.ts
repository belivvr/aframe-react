import type { LineProps } from '../../src/components';
import { Line } from '../../src/components';

describe('Line component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Line(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: LineProps = {
      start: {x: 3, y: 2, z: 1},
      end: {x: 1, y: 2, z: 3},
      visible: true,
    };

    it('Should returns line value', () => {
      expect(new Line(givenProps).toString()).toBe('start:3 2 1;end:1 2 3;visible:true;');
    });
  });
});
