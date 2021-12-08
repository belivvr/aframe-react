import type { RaycasterProps } from '../../src/components';
import { Raycaster } from '../../src/components';

describe('Raycaster component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Raycaster(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: RaycasterProps = {
      direction: { x: 1, y: 2, z: 3 },
      origin: { x: 1, y: 2, z: 3 },
      showLine: true,
    };

    it('Should returns raycaster value', () => {
      expect(new Raycaster(givenProps).toString()).toBe('direction:1 2 3;origin:1 2 3;showLine:true;');
    });
  });
});
