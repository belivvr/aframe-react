import React from 'react';
import { render } from '@testing-library/react';

import { Ring } from '../../../src/extras/primitives';

describe('Ring', () => {
  context('When gives no props', () => {
    it('Should render no has props a-ring tag', () => {
      const { container } = render(<Ring />);

      expect(container.innerHTML).toBe('<a-ring></a-ring>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-ring tag', () => {
      const { container } = render(<Ring width={100} />);

      expect(container.innerHTML).toBe('<a-ring width="100"></a-ring>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-ring tag', () => {
      const { container } = render(<Ring custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-ring custom="value1:true;value2:#sample;"></a-ring>');
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

    it('Should render has all props a-ring tag', () => {
      render(<Ring {...givenProps} />);
    })
  });
});
