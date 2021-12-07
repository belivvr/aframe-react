import { Cursor } from '../../src/components/cursor';
import type { RayOrigin } from "../../components";

describe('Cursor component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Cursor(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps = {
      rayOrigin: 'mouse' as RayOrigin,
    };

    it('Should returns cursor value', () => {
      expect(new Cursor(givenProps).toString()).toBe('rayOrigin:mouse;');
    });
  });
});
