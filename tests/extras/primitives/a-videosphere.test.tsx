import React from 'react';
import { render } from '@testing-library/react';

import { VideoSphere } from '../../../src/extras/primitives';

describe('VideoSphere', () => {
  context('When gives no props', () => {
    it('Should render no has props a-videosphere tag', () => {
      const { container } = render(<VideoSphere />);

      expect(container.innerHTML).toBe('<a-videosphere></a-videosphere>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-videosphere tag', () => {
      const { container } = render(<VideoSphere autoplay />);

      expect(container.innerHTML).toBe('<a-videosphere autoplay="true"></a-videosphere>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-videosphere tag', () => {
      const { container } = render(<VideoSphere custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-videosphere custom="value1:true;value2:#sample;"></a-videosphere>');
    });
  });
});
