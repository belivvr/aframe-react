import React from 'react';
import { render } from '@testing-library/react';

import { Dodecahedron } from '../../../src/extras/primitives';

describe('Dodecahedron', () => {
  context('When gives no props', () => {
    it('Should render no has props a-dodecahedron tag', () => {
      const { container } = render(<Dodecahedron />);

      expect(container.innerHTML).toBe('<a-dodecahedron></a-dodecahedron>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-dodecahedron tag', () => {
      const { container } = render(<Dodecahedron width={100} />);

      expect(container.innerHTML).toBe('<a-dodecahedron width="100"></a-dodecahedron>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-dodecahedron tag', () => {
      const { container } = render(<Dodecahedron custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-dodecahedron custom="value1:true;value2:#sample;"></a-dodecahedron>');
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

    it('Should render has all props a-dodecahedron tag', () => {
      render(<Dodecahedron {...givenProps} />);
    })
  });
});
