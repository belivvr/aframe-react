import { GLTFModel } from '../../src/components';

describe('GLTFModel component', () => {
  context('When given value is undefined', () => {
    const givenProps: string = undefined;

    it('Should returns empty string', () => {
      expect(new GLTFModel(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps = 'black'

    it('Should returns given string', () => {
      expect(new GLTFModel(givenProps).toString()).toBe('black');
    });
  });
});
