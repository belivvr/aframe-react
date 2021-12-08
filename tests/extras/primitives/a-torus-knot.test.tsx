import React from 'react';
import { render } from '@testing-library/react';

import { TorusKnot } from '../../../src/extras/primitives';

describe('TorusKnot', () => {
  context('When gives no props', () => {
    it('Should render no has props a-torus-knot tag', () => {
      const { container } = render(<TorusKnot />);

      expect(container.innerHTML).toBe('<a-torus-knot></a-torus-knot>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-torus-knot tag', () => {
      const { container } = render(<TorusKnot width={100} />);

      expect(container.innerHTML).toBe('<a-torus-knot width="100"></a-torus-knot>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-torus-knot tag', () => {
      const { container } = render(<TorusKnot custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-torus-knot custom="value1:true;value2:#sample;"></a-torus-knot>');
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

    it('Should render has all props a-torus-knot tag', () => {
      render(<TorusKnot {...givenProps} />);
    })
  });
});
