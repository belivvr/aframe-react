import React from 'react';
import { render } from '@testing-library/react';

import { Octahedron } from '../../../src/extras/primitives';

describe('Octahedron', () => {
  context('When gives no props', () => {
    it('Should render no has props a-octahedron tag', () => {
      const { container } = render(<Octahedron />);

      expect(container.innerHTML).toBe('<a-octahedron></a-octahedron>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-octahedron tag', () => {
      const { container } = render(<Octahedron width={100} />);

      expect(container.innerHTML).toBe('<a-octahedron width="100"></a-octahedron>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-octahedron tag', () => {
      const { container } = render(<Octahedron custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-octahedron custom="value1:true;value2:#sample;"></a-octahedron>');
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

    it('Should render has all props a-octahedron tag', () => {
      render(<Octahedron {...givenProps} />);
    })
  });
});
