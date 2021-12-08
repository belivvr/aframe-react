import type { TextProps } from '../../src/components';
import { Text } from '../../src/components';

describe('Text component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Text(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: TextProps = {
      font: 'roboto',
      transparent: false,
      value: 'sample',
      whiteSpace: 'pre',
    };

    it('Should returns text value', () => {
      expect(new Text(givenProps).toString()).toBe('font:roboto;transparent:false;value:sample;whiteSpace:pre;');
    });
  });
});
