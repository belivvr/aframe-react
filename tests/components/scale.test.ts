import type { ScaleProps } from '../../src/components';
import { Scale } from '../../src/components';

describe('Scale component', () => {
  const givenProps: ScaleProps = { x: 1, y: 2, z: 3 };

  it('Should returns scale value', () => {
    expect(new Scale(givenProps).toString()).toBe('1 2 3');
  });
});
