import React from 'react';
import { render } from '@testing-library/react';

import { Plane } from '../../../src/extras/primitives';

describe('Plane', () => {
  context('When gives no props', () => {
    it('Should render no has props a-plane tag', () => {
      const { container } = render(<Plane />);

      expect(container.innerHTML).toBe('<a-plane></a-plane>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-plane tag', () => {
      const { container } = render(<Plane width={100} />);

      expect(container.innerHTML).toBe('<a-plane width="100"></a-plane>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-plane tag', () => {
      const { container } = render(<Plane custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-plane custom="value1:true;value2:#sample;"></a-plane>');
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

    it('Should render has all props a-plane tag', () => {
      render(<Plane {...givenProps} />);
    })
  });
});
