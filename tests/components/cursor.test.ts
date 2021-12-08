import { clear, mockUserAgent } from 'jest-useragent-mock';

import type { CursorProps } from "../../components";
import { Cursor } from '../../src/components';

afterEach(clear);

describe('Cursor component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns includes only fuse string', () => {
      expect(new Cursor(givenProps).toString()).toBe('fuse:false;');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: CursorProps = {
      rayOrigin: 'mouse',
      downEvents: ['triggerdown', 'triggerup'],
    };

    it('Should returns cursor value', () => {
      expect(new Cursor(givenProps).toString()).toBe('downEvents:triggerdown,triggerup;fuse:false;rayOrigin:mouse;');
    });
  });

  context('When tablet device', () => {
    const givenProps = {};

    it('Should returns fuse true', () => {
      mockUserAgent('ipad');

      expect(new Cursor(givenProps).toString()).toBe('fuse:true;');
    });
  });

  context('When mobile device', () => {
    const givenProps = {};

    it('Should returns fuse true', () => {
      mockUserAgent('blackberry');

      expect(new Cursor(givenProps).toString()).toBe('fuse:true;');
    });
  });

  context('When device is oculus', () => {
    const givenProps = {};

    it('Should returns fuse false', () => {
      mockUserAgent('OculusBrowser');

      expect(new Cursor(givenProps).toString()).toBe('fuse:false;');
    });
  });
});
