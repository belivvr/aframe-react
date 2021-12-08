import React from 'react';
import { render } from '@testing-library/react';

import { Triangle } from '../../../src/extras/primitives';

describe('Triangle', () => {
  context('When gives no props', () => {
    it('Should render no has props a-triangle tag', () => {
      const { container } = render(<Triangle />);

      expect(container.innerHTML).toBe('<a-triangle></a-triangle>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-triangle tag', () => {
      const { container } = render(<Triangle width={100} />);

      expect(container.innerHTML).toBe('<a-triangle width="100"></a-triangle>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-triangle tag', () => {
      const { container } = render(<Triangle custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-triangle custom="value1:true;value2:#sample;"></a-triangle>');
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
      vertexA: { x: 0, y: 0, z: 0 },
      vertexB: { x: 0, y: 0, z: 0 },
      vertexC: { x: 0, y: 0, z: 0 },
    };

    it('Should render has all props a-triangle tag', () => {
      render(<Triangle {...givenProps} />);
    })
  });
});
