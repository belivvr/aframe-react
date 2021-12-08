import React from 'react';
import { render } from '@testing-library/react';

import { Image } from '../../../src/extras/primitives';

describe('Image', () => {
  context('When gives no props', () => {
    it('Should render no has props a-image tag', () => {
      const { container } = render(<Image />);

      expect(container.innerHTML).toBe('<a-image></a-image>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-image tag', () => {
      const { container } = render(<Image repeat={{ x: 1, y: 1 }} />);

      expect(container.innerHTML).toBe('<a-image repeat="1 1"></a-image>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-image tag', () => {
      const { container } = render(<Image custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-image custom="value1:true;value2:#sample;"></a-image>');
    });
  });
});
