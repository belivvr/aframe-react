import React from 'react';
import { render } from '@testing-library/react';

import { Cursor } from '../../../src/extras/primitives';

describe('Cursor', () => {
  context('When gives no props', () => {
    it('Should render no has props a-cursor tag', () => {
      const { container } = render(<Cursor />);

      expect(container.innerHTML).toBe('<a-cursor></a-cursor>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-cursor tag', () => {
      const { container } = render(<Cursor far={1} />);

      expect(container.innerHTML).toBe('<a-cursor far="1"></a-cursor>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-cursor tag', () => {
      const { container } = render(<Cursor custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-cursor custom="value1:true;value2:#sample;"></a-cursor>');
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

    it('Should render has all props a-cursor tag', () => {
      render(<Cursor {...givenProps} />);
    })
  });
});
