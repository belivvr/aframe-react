import React from 'react';
import { render } from '@testing-library/react';

import Mixin from '../../src/core/Mixin';

describe('Mixin', () => {
  context('When gives no props', () => {
    it('Should render no has props a-mixin tag', () => {
      const { container } = render(<Mixin />);

      expect(container.innerHTML).toBe('<a-mixin></a-mixin>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-mixin tag', () => {
      const { container } = render(<Mixin material={{ color: 'white' }} geometry={{ primitive: 'box' }} />);

      expect(container.innerHTML).toBe('<a-mixin material="color:white;" geometry="primitive:box;"></a-mixin>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-mixin tag', () => {
      const { container } = render(<Mixin custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-mixin custom="value1:true;value2:#sample;"></a-mixin>');
    });
  });
});
