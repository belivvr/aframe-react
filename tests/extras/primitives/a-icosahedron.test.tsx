import React from 'react';
import { render } from '@testing-library/react';

import { Icosahedron } from '../../../src/extras/primitives';

describe('Icosahedron', () => {
  context('When gives no props', () => {
    it('Should render no has props a-icosahedron tag', () => {
      const { container } = render(<Icosahedron />);

      expect(container.innerHTML).toBe('<a-icosahedron></a-icosahedron>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-icosahedron tag', () => {
      const { container } = render(<Icosahedron width={100} />);

      expect(container.innerHTML).toBe('<a-icosahedron width="100"></a-icosahedron>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-icosahedron tag', () => {
      const { container } = render(<Icosahedron custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-icosahedron custom="value1:true;value2:#sample;"></a-icosahedron>');
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

    it('Should render has all props a-icosahedron tag', () => {
      render(<Icosahedron {...givenProps} />);
    })
  });
});
