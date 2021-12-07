import { GenericTrackedControllerControls } from '../../src/components/generic-tracked-controller-controls';

describe('GenericTrackedControllerControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new GenericTrackedControllerControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps = {
      buttonColor: 'black',
      orientationOffset: { x: 1, y: 2, z: 3 },
      disable: true,
    };

    it('Should returns generic-tracked-controller-controls value', () => {
      expect(new GenericTrackedControllerControls(givenProps).toString()).toBe('buttonColor:black;orientationOffset:1 2 3;disable:true;');
    });
  });
});
