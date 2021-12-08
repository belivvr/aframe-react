import { Embedded } from '../../../src/components/scene';

describe('Embedded component', () => {
  context('When given props is undefined', () => {
    const givenProps = undefined;

    it('Should returns true string', () => {
      expect(new Embedded(givenProps).toString()).toBe('true');
    });
  });

  context('When given props is not empty', () => {
    const givenProps = false;

    it('Should returns boolean string', () => {
      expect(new Embedded(givenProps).toString()).toBe('false');
    });
  });
});
