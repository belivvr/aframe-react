import { DaydreamControls } from '../../src/components/daydream-controls';

describe('DaydreamControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new DaydreamControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps = {
      buttonColor: 'black',
      orientationOffset: { x: 1, y: 2, z: 3 }
    };

    it('Should returns daydream-controls value', () => {
      expect(new DaydreamControls(givenProps).toString()).toBe('buttonColor:black;orientationOffset:1 2 3;');
    });
  });
});
