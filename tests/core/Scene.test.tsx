import React from 'react';
import { render } from '@testing-library/react';

import Scene from '../../src/core/Scene';

describe('Scene', () => {
  context('When gives no props', () => {
    it('Should render no has props a-scene tag', () => {
      const { container } = render(<Scene />);

      expect(container.innerHTML).toBe('<a-scene></a-scene>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-scene tag', () => {
      const { container } = render(<Scene fog={{ color: 'white' }} stats={true} />);

      expect(container.innerHTML).toBe('<a-scene fog="color:white;" stats="true"></a-scene>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-scene tag', () => {
      const { container } = render(<Scene custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-scene custom="value1:true;value2:#sample;"></a-scene>');
    });
  });

  context('When gives', () => {
    const givenProps = {
      fog: {},
      inspector: {},
      background: {},
      vrModeUI: {},
      stats: false,
      screenshot: {},
      pool: {},
      keyboardShortcuts: {},
      embedded: false,
      deviceOrientationPermissionUI: {},
      debug: false,
      gltfModel: {},
      shadow: {},
    };

    it('Should render has all props a-scene tag', () => {
      render(<Scene {...givenProps} />);
    })
  });
});
