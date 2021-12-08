import type { Easing, AnimationProps } from '../../src/components';
import { Animation } from '../../src/components';

describe('Animation component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Animation(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: AnimationProps = {
      easing: 'easeInOutExpo' as Easing,
      from: false,
      loop: true,
      startEvents: ['mouseenter', 'mouseleave'],
    };

    it('Should returns animation value', () => {
      expect(new Animation(givenProps).toString()).toBe('easing:easeInOutExpo;from:false;loop:1;startEvents:mouseenter,mouseleave;');
    });
  });
});
