import React from 'react';
import { render } from '@testing-library/react';

import { Cone } from '../../../src/extras/primitives';

describe('Cone', () => {
  context('When gives no props', () => {
    it('Should render no has props a-cone tag', () => {
      const { container } = render(<Cone />);

      expect(container.innerHTML).toBe('<a-cone></a-cone>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-cone tag', () => {
      const { container } = render(<Cone fog ambientOcclusionTextureOffset={{ x: 1, y: 1 }} />);

      expect(container.innerHTML).toBe('<a-cone ambient-occlusion-texture-offset="1 1" fog="true"></a-cone>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-cone tag', () => {
      const { container } = render(<Cone custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-cone custom="value1:true;value2:#sample;"></a-cone>');
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

    it('Should render has all props a-cone tag', () => {
      render(<Cone {...givenProps} />);
    })
  });
});
