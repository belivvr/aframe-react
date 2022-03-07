import parse from '../../src/utils/propParser';

describe('propParser', () => {
  context('When gives array value', () => {
    const givenValue = [1, 2, 3];

    it('Should returns comma separated value', () => {
      expect(parse(givenValue)).toBe('1,2,3');
    });
  });

  context('When gives object value', () => {
    const givenValue = { x: 0, y: 0, z: 0 };

    it('Should returns whitespace separated value', () => {
      expect(parse(givenValue)).toBe('0 0 0');
    });
  });

  context('When gives object in object value', () => {
    const givenValue = {
      rotation: { x: 0, y: 0, z: 0 },
      position: { x: 0, y: 0, z: 0 },
    };

    it('Should returns key with whitespace separated value', () => {
      expect(parse(givenValue)).toBe('rotation: 0 0 0;position: 0 0 0;');
    });
  });

  context('When gives object in array value', () => {
    const givenValue = {
      startEvents: ['click', 'focus'],
      endEvents: ['mouseleave', 'blur'],
    };

    it('Should returns key with comma separated value', () => {
      expect(parse(givenValue)).toBe('startEvents:click,focus;endEvents:mouseleave,blur;');
    });
  });

  context('When gives string', () => {
    const givenValue = 'value';

    it('Should returns given value', () => {
      expect(parse(givenValue)).toBe(givenValue);
    });
  });

  context('When gives number', () => {
    const givenValue = 0;

    it('Should returns string number', () => {
      expect(parse(givenValue)).toBe(givenValue.toString());
    });
  });

  context('When gives boolean', () => {
    const givenValue: boolean = true;

    it('Should returns string boolean', () => {
      expect(parse(givenValue)).toBe(givenValue.toString());
    });
  });

  context('When gives null', () => {
    const givenValue: null = null;

    it('Should returns empty string', () => {
      expect(parse(givenValue)).toBe('');
    });
  });

  context('When gives undefined', () => {
    const givenValue: undefined = undefined;

    it('Should returns empty string', () => {
      expect(parse(givenValue)).toBe('');
    });
  });
});
