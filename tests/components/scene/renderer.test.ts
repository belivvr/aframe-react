import type { RendererProps } from '../../../src/components/scene';
import { Renderer } from '../../../src/components/scene';

describe('Renderer component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Renderer(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: RendererProps = {
      antialias: 'auto',
      highRefreshRate: true,
      maxCanvasWidth: 512,
    };

    it('Should returns Renderer value', () => {
      expect(new Renderer(givenProps).toString()).toBe('antialias:auto;highRefreshRate:true;maxCanvasWidth:512;');
    });
  });

  context('When gives foveationLevel', () => {
    const givenProps: RendererProps = {
      foveationLevel: 'none',
    };

    it('Should returns enum value of foveationLevel', () => {
      expect(new Renderer(givenProps).toString()).toBe('foveationLevel:0;');
    });
  });
});
