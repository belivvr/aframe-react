import React from 'react';
import { render } from '@testing-library/react';

import { GLTFModel } from '../../../src/extras/primitives';

describe('GLTFModel', () => {
  context('When gives no props', () => {
    it('Should render no has props a-gltf-model tag', () => {
      const { container } = render(<GLTFModel />);

      expect(container.innerHTML).toBe('<a-gltf-model></a-gltf-model>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-gltf-model tag', () => {
      const { container } = render(<GLTFModel src="#id" />);

      expect(container.innerHTML).toBe('<a-gltf-model src="#id"></a-gltf-model>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-gltf-model tag', () => {
      const { container } = render(<GLTFModel custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-gltf-model custom="value1:true;value2:#sample;"></a-gltf-model>');
    });
  });
});
