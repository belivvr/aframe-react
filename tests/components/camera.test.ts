import { Camera } from '../../src/components/camera';

describe('Camera component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Camera(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps = {
      far: 1,
      fov: 0,
      spectator: true,
    };

    it('Should returns camera value', () => {
      expect(new Camera(givenProps).toString()).toBe('far:1;fov:0;spectator:true;');
    });
  });
});
