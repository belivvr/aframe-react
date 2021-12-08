import React from 'react';
import { render } from '@testing-library/react';

import { Sphere } from '../../../src/extras/primitives';

describe('Sphere', () => {
  context('When gives no props', () => {
    it('Should render no has props a-sphere tag', () => {
      const { container } = render(<Sphere />);

      expect(container.innerHTML).toBe('<a-sphere></a-sphere>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-sphere tag', () => {
      const { container } = render(<Sphere width={100} />);

      expect(container.innerHTML).toBe('<a-sphere width="100"></a-sphere>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-sphere tag', () => {
      const { container } = render(<Sphere custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-sphere custom="value1:true;value2:#sample;"></a-sphere>');
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

    it('Should render has all props a-sphere tag', () => {
      render(<Sphere {...givenProps} />);
    })
  });
});
