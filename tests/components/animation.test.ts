import type { Easing } from '../../src/components/types';
import { Animation } from '../../src/components/animation';

describe('Animation component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Animation(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps = {
      easing: 'easeInOutExpo' as Easing,
      from: false,
    };

    it('Should returns animation value', () => {
      expect(new Animation(givenProps).toString()).toBe('easing:easeInOutExpo;from:false;');
    });
  });
});
