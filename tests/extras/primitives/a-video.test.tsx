import React from 'react';
import { render } from '@testing-library/react';

import { Video } from '../../../src/extras/primitives';

describe('Video', () => {
  context('When gives no props', () => {
    it('Should render no has props a-video tag', () => {
      const { container } = render(<Video />);

      expect(container.innerHTML).toBe('<a-video></a-video>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-video tag', () => {
      const { container } = render(<Video repeat={{ x: 1, y: 1 }} />);

      expect(container.innerHTML).toBe('<a-video repeat="1 1"></a-video>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-video tag', () => {
      const { container } = render(<Video custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-video custom="value1:true;value2:#sample;"></a-video>');
    });
  });
});
