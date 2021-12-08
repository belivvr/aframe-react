import type { LayerProps } from '../../src/components';
import { Layer } from '../../src/components';

describe('Layer component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Layer(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: LayerProps = {
      type: 'monocubemap',
      rotateCubemap: false,
      width: 200,
    };

    it('Should returns layer value', () => {
      expect(new Layer(givenProps).toString()).toBe('type:monocubemap;rotateCubemap:false;width:200;');
    });
  });
});
