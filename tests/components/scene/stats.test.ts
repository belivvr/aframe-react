import { Stats } from '../../../src/components/scene';

describe('Stats component', () => {
  context('When given props is undefined', () => {
    const givenProps = undefined;

    it('Should returns true string', () => {
      expect(new Stats(givenProps).toString()).toBe('true');
    });
  });

  context('When given props is not empty', () => {
    const givenProps = false;

    it('Should returns boolean string', () => {
      expect(new Stats(givenProps).toString()).toBe('false');
    });
  });
});
