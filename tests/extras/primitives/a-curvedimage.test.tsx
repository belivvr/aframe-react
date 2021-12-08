import React from 'react';
import { render } from '@testing-library/react';

import { CurvedImage } from '../../../src/extras/primitives';

describe('CurvedImage', () => {
  context('When gives no props', () => {
    it('Should render no has props a-curvedimage tag', () => {
      const { container } = render(<CurvedImage />);

      expect(container.innerHTML).toBe('<a-curvedimage></a-curvedimage>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-curvedimage tag', () => {
      const { container } = render(<CurvedImage repeat={{ x: 1, y: 1 }} />);

      expect(container.innerHTML).toBe('<a-curvedimage repeat="1 1"></a-curvedimage>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-curvedimage tag', () => {
      const { container } = render(<CurvedImage custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-curvedimage custom="value1:true;value2:#sample;"></a-curvedimage>');
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

    it('Should render has all props a-curvedimage tag', () => {
      render(<CurvedImage {...givenProps} />);
    })
  });
});
