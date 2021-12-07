import { GearvrControls } from '../../src/components/gearvr-controls';

describe('GearvrControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new GearvrControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps = {
      buttonColor: 'black',
      orientationOffset: { x: 1, y: 2, z: 3 },
    };

    it('Should returns gearvr-controls value', () => {
      expect(new GearvrControls(givenProps).toString()).toBe('buttonColor:black;orientationOffset:1 2 3;');
    });
  });
});
