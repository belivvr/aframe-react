import React from 'react';
import { render } from '@testing-library/react';

import { Text } from '../../../src/extras/primitives';

describe('Text', () => {
  context('When gives no props', () => {
    it('Should render no has props a-text tag', () => {
      const { container } = render(<Text />);

      expect(container.innerHTML).toBe('<a-text></a-text>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-text tag', () => {
      const { container } = render(<Text width={100} />);

      expect(container.innerHTML).toBe('<a-text width="100"></a-text>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-text tag', () => {
      const { container } = render(<Text custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-text custom="value1:true;value2:#sample;"></a-text>');
    });
  });
});
