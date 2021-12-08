import React from 'react';
import { render } from '@testing-library/react';

import Assets from '../../src/core/Assets';

describe('Assets', () => {
  context('When gives no props', () => {
    it('Should render no has props a-assets tag', () => {
      const { container } = render(<Assets />);

      expect(container.innerHTML).toBe('<a-assets></a-assets>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-assets tag', () => {
      const { container } = render(<Assets timeout={1000} />);

      expect(container.innerHTML).toBe('<a-assets timeout="1000"></a-assets>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-assets tag', () => {
      const { container } = render(<Assets custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-assets custom="value1:true;value2:#sample;"></a-assets>');
    });
  });
});
