import type { InspectorProps } from '../../../src/components/scene';
import { Inspector } from '../../../src/components/scene';

describe('Inspector component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new Inspector(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: InspectorProps = {
      url: new URL('https://address/inspector.min.js'),
    };

    it('Should returns Inspector value', () => {
      expect(new Inspector(givenProps).toString()).toBe('url:https://address/inspector.min.js;');
    });
  });
});
