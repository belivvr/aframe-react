import React from 'react';
import { render } from '@testing-library/react';

import AssetItem from '../../src/core/AssetItem';

describe('AssetItem', () => {
  context('When gives no props', () => {
    it('Should render no has props a-asset-item tag', () => {
      const { container } = render(<AssetItem />);

      expect(container.innerHTML).toBe('<a-asset-item></a-asset-item>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-asset-item tag', () => {
      const { container } = render(<AssetItem responseType="arraybuffer" />);

      expect(container.innerHTML).toBe('<a-asset-item response-type="arraybuffer"></a-asset-item>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-asset-item tag', () => {
      const { container } = render(<AssetItem custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-asset-item custom="value1:true;value2:#sample;"></a-asset-item>');
    });
  });
});
