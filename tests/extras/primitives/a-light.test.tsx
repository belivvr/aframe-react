import React from 'react';
import { render } from '@testing-library/react';

import { Light } from '../../../src/extras/primitives';

describe('Light', () => {
  context('When gives no props', () => {
    it('Should render no has props a-light tag', () => {
      const { container } = render(<Light />);

      expect(container.innerHTML).toBe('<a-light></a-light>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-light tag', () => {
      const { container } = render(<Light distance={100} />);

      expect(container.innerHTML).toBe('<a-light distance="100"></a-light>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-light tag', () => {
      const { container } = render(<Light custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-light custom="value1:true;value2:#sample;"></a-light>');
    });
  });
});
