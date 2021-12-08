import React from 'react';
import { render } from '@testing-library/react';

import { Box } from '../../../src/extras/primitives';

describe('Box', () => {
  context('When gives no props', () => {
    it('Should render no has props a-box tag', () => {
      const { container } = render(<Box />);

      expect(container.innerHTML).toBe('<a-box></a-box>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-box tag', () => {
      const { container } = render(<Box fog ambientOcclusionTextureOffset={{ x: 1, y: 1 }} />);

      expect(container.innerHTML).toBe('<a-box ambient-occlusion-texture-offset="1 1" fog="true"></a-box>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-box tag', () => {
      const { container } = render(<Box custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-box custom="value1:true;value2:#sample;"></a-box>');
    });
  });

  context('When gives', () => {
    const givenProps = {
      ambientOcclusionTextureOffset: { x: 0, y: 0 },
      ambientOcclusionTextureRepeat: { x: 0, y: 0 },
      displacementTextureOffset: { x: 0, y: 0 },
      displacementTextureRepeat: { x: 0, y: 0 },
      normalTextureOffset: { x: 0, y: 0 },
      normalTextureRepeat: { x: 0, y: 0 },
      repeat: { x: 0, y: 0 },
    };

    it('Should render has all props a-box tag', () => {
      render(<Box {...givenProps} />);
    })
  });
});
