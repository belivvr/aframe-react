import { Material } from '../../src/components/material';

describe('Material component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Material(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps = {
      offset: { x: 0, y: 1 },
      visible: false,
    };

    it('Should returns material value', () => {
      expect(new Material(givenProps).toString()).toBe('offset:0 1;visible:false;');
    });
  });

  context('When exists extra props', () => {
    const givenProps = {
      extraProps: 'value',
    };

    it('Should returns string values of extra props', () => {
      expect(new Material(givenProps).toString()).toBe('extraProps:value;');
    });
  });
});
