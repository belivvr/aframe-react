import type { GLTFModelProps } from '../../../src/components/scene';
import { GLTFModel } from '../../../src/components/scene';

describe('GLTFModel component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new GLTFModel(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: GLTFModelProps = {
      dracoDecoderPath: 'path/to/decoder/',
    };

    it('Should returns GLTFModel value', () => {
      expect(new GLTFModel(givenProps).toString()).toBe('dracoDecoderPath:path/to/decoder/;');
    });
  });
});
