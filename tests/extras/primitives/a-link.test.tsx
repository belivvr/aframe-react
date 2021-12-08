import React from 'react';
import { render } from '@testing-library/react';

import { Link } from '../../../src/extras/primitives';

describe('Link', () => {
  context('When gives no props', () => {
    it('Should render no has props a-link tag', () => {
      const { container } = render(<Link />);

      expect(container.innerHTML).toBe('<a-link></a-link>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-link tag', () => {
      const { container } = render(<Link title="title" />);

      expect(container.innerHTML).toBe('<a-link title="title"></a-link>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-link tag', () => {
      const { container } = render(<Link custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-link custom="value1:true;value2:#sample;"></a-link>');
    });
  });
});
