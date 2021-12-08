import React from 'react';
import { render } from '@testing-library/react';

import { Camera } from '../../../src/extras/primitives';

describe('Camera', () => {
  context('When gives no props', () => {
    it('Should render no has props a-camera tag', () => {
      const { container } = render(<Camera />);

      expect(container.innerHTML).toBe('<a-camera></a-camera>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-camera tag', () => {
      const { container } = render(<Camera lookControlsEnabled />);

      expect(container.innerHTML).toBe('<a-camera look-controls-enabled="true"></a-camera>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-camera tag', () => {
      const { container } = render(<Camera custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-camera custom="value1:true;value2:#sample;"></a-camera>');
    });
  });
});
