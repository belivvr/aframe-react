import React from 'react';
import { render } from '@testing-library/react';

import { Sound } from '../../../src/extras/primitives';

describe('Sound', () => {
  context('When gives no props', () => {
    it('Should render no has props a-sound tag', () => {
      const { container } = render(<Sound />);

      expect(container.innerHTML).toBe('<a-sound></a-sound>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-sound tag', () => {
      const { container } = render(<Sound autoplay={true} />);

      expect(container.innerHTML).toBe('<a-sound autoplay="true"></a-sound>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-sound tag', () => {
      const { container } = render(<Sound custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-sound custom="value1:true;value2:#sample;"></a-sound>');
    });
  });
});
