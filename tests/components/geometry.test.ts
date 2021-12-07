import { Geometry } from '../../src/components/geometry';

describe('Geometry component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Geometry(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps = {
      buffer: false,
      vertexA: { x: 0, y: 1, z: 0.5 },
    };

    it('Should returns geometry value', () => {
      expect(new Geometry(givenProps).toString()).toBe('buffer:false;vertexA:0 0 0.5;');
    });
  });
});
