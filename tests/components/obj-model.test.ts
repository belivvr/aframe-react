import type { ObjModelProps } from '../../src/components';
import { ObjModel } from '../../src/components';

describe('ObjModel component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new ObjModel(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: ObjModelProps = {
      mtl: '#tree-mtl',
      obj: '#tree-obj',
    };

    it('Should returns magicleap-controls value', () => {
      expect(new ObjModel(givenProps).toString()).toBe('mtl:#tree-mtl;obj:#tree-obj;');
    });
  });
});
