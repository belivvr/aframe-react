import React from 'react';
import { render } from '@testing-library/react';

import { ObjModel } from '../../../src/extras/primitives';

describe('ObjModel', () => {
  context('When gives no props', () => {
    it('Should render no has props a-obj-model tag', () => {
      const { container } = render(<ObjModel />);

      expect(container.innerHTML).toBe('<a-obj-model></a-obj-model>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-obj-model tag', () => {
      const { container } = render(<ObjModel mtl="#id" />);

      expect(container.innerHTML).toBe('<a-obj-model mtl="#id"></a-obj-model>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-obj-model tag', () => {
      const { container } = render(<ObjModel custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-obj-model custom="value1:true;value2:#sample;"></a-obj-model>');
    });
  });
});
