import React from 'react';
import { render } from '@testing-library/react';

import { Sky } from '../../../src/extras/primitives';

describe('Sky', () => {
  context('When gives no props', () => {
    it('Should render no has props a-sky tag', () => {
      const { container } = render(<Sky />);

      expect(container.innerHTML).toBe('<a-sky></a-sky>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-sky tag', () => {
      const { container } = render(<Sky repeat={{ x: 1, y: 1 }} />);

      expect(container.innerHTML).toBe('<a-sky repeat="1 1"></a-sky>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-sky tag', () => {
      const { container } = render(<Sky custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-sky custom="value1:true;value2:#sample;"></a-sky>');
    });
  });
});
