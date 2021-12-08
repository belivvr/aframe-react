import type { ScreenshotProps } from '../../../src/components/scene';
import { Screenshot } from '../../../src/components/scene';

describe('Screenshot component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Screenshot(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: ScreenshotProps = {
      width: 200,
    };

    it('Should returns Screenshot value', () => {
      expect(new Screenshot(givenProps).toString()).toBe('width:200;');
    });
  });
});
