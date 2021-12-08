import React from 'react';
import { render } from '@testing-library/react';

import { Cylinder } from '../../../src/extras/primitives';

describe('Cylinder', () => {
  context('When gives no props', () => {
    it('Should render no has props a-cylinder tag', () => {
      const { container } = render(<Cylinder />);

      expect(container.innerHTML).toBe('<a-cylinder></a-cylinder>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-cylinder tag', () => {
      const { container } = render(<Cylinder width={100} />);

      expect(container.innerHTML).toBe('<a-cylinder width="100"></a-cylinder>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-cylinder tag', () => {
      const { container } = render(<Cylinder custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-cylinder custom="value1:true;value2:#sample;"></a-cylinder>');
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

    it('Should render has all props a-cylinder tag', () => {
      render(<Cylinder {...givenProps} />);
    })
  });
});
