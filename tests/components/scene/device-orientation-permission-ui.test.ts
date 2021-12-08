import type { DeviceOrientationPermissionUIProps } from '../../../src/components/scene';
import { DeviceOrientationPermissionUI } from '../../../src/components/scene';

describe('DeviceOrientationPermissionUI component', () => {
  context('When given props is empty', () => {
    const givenProps = {};

    it('Should returns empty string', () => {
      expect(new DeviceOrientationPermissionUI(givenProps).toString()).toBe('');
    });
  });

  context('When given props is not empty', () => {
    const givenProps: DeviceOrientationPermissionUIProps = {
      enabled: true,
      deviceMotionMessage: 'message',
    };

    it('Should returns DeviceOrientationPermissionUI value', () => {
      expect(new DeviceOrientationPermissionUI(givenProps).toString()).toBe('enabled:true;deviceMotionMessage:message;');
    });
  });
});
