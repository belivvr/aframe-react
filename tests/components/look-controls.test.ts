import type { LookControlsProps } from '../../src/components';
import { LookControls } from '../../src/components';

describe('LookControls component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new LookControls(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: LookControlsProps = {
      enabled: true,
    };

    it('Should returns look-controls value', () => {
      expect(new LookControls(givenProps).toString()).toBe('enabled:true;');
    });
  });
});
