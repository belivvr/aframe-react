import type { LightProps } from '../../src/components';
import { Light } from '../../src/components';

describe('Light component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Light(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: LightProps = {
      angle: 2,
      color: 'black',
      castShadow: true,
    };

    it('Should returns light value', () => {
      expect(new Light(givenProps).toString()).toBe('angle:2;color:black;castShadow:true;');
    });
  });
});
