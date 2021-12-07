import { clear, mockUserAgent } from 'jest-useragent-mock';

import { Cursor } from '../../src/components/cursor';
import type { RayOrigin } from "../../components";

afterEach(clear);

describe('Cursor component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns includes only fuse string', () => {
      expect(new Cursor(givenProps).toString()).toBe('fuse:false;');
    });
  });

  context('When given props is not empty', () => {
    const givenProps = {
      rayOrigin: 'mouse' as RayOrigin,
    };

    it('Should returns cursor value', () => {
      expect(new Cursor(givenProps).toString()).toBe('fuse:false;rayOrigin:mouse;');
    });
  });

  context('When mobile device', () => {
    const givenProps = {};

    it('Should returns fuse true', () => {
      mockUserAgent('ipad');

      expect(new Cursor(givenProps).toString()).toBe('fuse:true;');
    });
  });
});
