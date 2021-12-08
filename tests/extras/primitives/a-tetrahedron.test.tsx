import React from 'react';
import { render } from '@testing-library/react';

import { Tetrahedron } from '../../../src/extras/primitives';

describe('Tetrahedron', () => {
  context('When gives no props', () => {
    it('Should render no has props a-tetrahedron tag', () => {
      const { container } = render(<Tetrahedron />);

      expect(container.innerHTML).toBe('<a-tetrahedron></a-tetrahedron>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-tetrahedron tag', () => {
      const { container } = render(<Tetrahedron width={100} />);

      expect(container.innerHTML).toBe('<a-tetrahedron width="100"></a-tetrahedron>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-tetrahedron tag', () => {
      const { container } = render(<Tetrahedron custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-tetrahedron custom="value1:true;value2:#sample;"></a-tetrahedron>');
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

    it('Should render has all props a-tetrahedron tag', () => {
      render(<Tetrahedron {...givenProps} />);
    })
  });
});
