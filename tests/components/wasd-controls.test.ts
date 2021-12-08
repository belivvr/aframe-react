import type { WASDControlsProps } from '../../src/components';
import { WASDControls } from '../../src/components';

describe('WASDControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new WASDControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: WASDControlsProps = {
      acceleration: 1,
      adAxis: 'x',
      adEnabled: true,
    };

    it('Should returns wasd-controls value', () => {
      expect(new WASDControls(givenProps).toString()).toBe('acceleration:1;adAxis:x;adEnabled:true;');
    });
  });
});
