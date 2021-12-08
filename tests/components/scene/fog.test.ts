import type { FogProps } from '../../../src/components/scene';
import { Fog } from '../../../src/components/scene';

describe('Fog component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Fog(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: FogProps = {
      color: 'black',
      density: 1,
      type: 'linear',
    };

    it('Should returns Fog value', () => {
      expect(new Fog(givenProps).toString()).toBe('color:black;density:1;type:linear;');
    });
  });
});
