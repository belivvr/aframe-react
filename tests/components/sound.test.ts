import type { SoundProps } from '../../src/components';
import { Sound } from '../../src/components';

describe('Sound component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Sound(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: SoundProps = {
      autoplay: true,
      distanceModel: 'exponential',
      maxDistance: 2,
    };

    it('Should returns sound value', () => {
      expect(new Sound(givenProps).toString()).toBe('autoplay:true;distanceModel:exponential;maxDistance:2;');
    });
  });
});
