import React from 'react';
import { render } from '@testing-library/react';

import { Circle } from '../../../src/extras/primitives';

describe('Circle', () => {
  context('When gives no props', () => {
    it('Should render no has props a-circle tag', () => {
      const { container } = render(<Circle />);

      expect(container.innerHTML).toBe('<a-circle></a-circle>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-circle tag', () => {
      const { container } = render(<Circle fog ambientOcclusionTextureOffset={{ x: 1, y: 1 }} />);

      expect(container.innerHTML).toBe('<a-circle ambient-occlusion-texture-offset="1 1" fog="true"></a-circle>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-circle tag', () => {
      const { container } = render(<Circle custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-circle custom="value1:true;value2:#sample;"></a-circle>');
    });
  });

  context('When gives', () => {
    const givenProps = {
      ambientOcclusionTextureOffset: { x: 0, y: 0 },
      ambientOcclusionTextureRepeat: { x: 0, y: 0 },
      displacementTextureOffset: { x: 0, y: 0 },
      displacementTextureRepeat: { x: 0, y: 0 },
      normalScale: { x: 0, y: 0 },
      normalTextureOffset: { x: 0, y: 0 },
      normalTextureRepeat: { x: 0, y: 0 },
      repeat: { x: 0, y: 0 },
    };

    it('Should render has all props a-circle tag', () => {
      render(<Circle {...givenProps} />);
    })
  });
});
