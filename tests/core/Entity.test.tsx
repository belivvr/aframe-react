import React from 'react';
import { render } from '@testing-library/react';

import Entity, { toProps } from '../../src/core/Entity';

describe('toProps', () => {
  context('When gives removalKeys', () => {
    const givenProps = { key1: '1', key2: '2' };
    const givenRemovalKeys = ['key1'];

    it('Should return excluded removal keys', () => {
      expect(toProps(givenProps, givenRemovalKeys)).toEqual({ key2: '2' });
    });
  });
});

describe('Entity', () => {
  context('When gives no props', () => {
    it('Should render no has props a-entity tag', () => {
      const { container } = render(<Entity />);

      expect(container.innerHTML).toBe('<a-entity></a-entity>');
    });
  });

  context('When given props is not empty', () => {
    it('Should render given props has a-entity tag', () => {
      const { container } = render(<Entity material={{ alphaTest: 2 }} visible={true} />);

      expect(container.innerHTML).toBe('<a-entity material="alphaTest:2;" visible="true"></a-entity>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-entity tag', () => {
      const { container } = render(<Entity custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-entity custom="value1:true;value2:#sample;"></a-entity>');
    });
  });

  context('When gives', () => {
    const givenProps = {
      animation: {},
      camera: {},
      cursor: {},
      daydreamControls: {},
      gearvrControls: {},
      genericTrackedControllerControls: {},
      geometry: {},
      gltfModel: '#value',
      handControls: {},
      handTrackingControls: {},
      hpMixedRealityControls: {},
      laserControls: {},
      layer: {},
      light: {},
      line: {},
      link: {},
      lookControls: {},
      magicleapControls: {},
      material: {},
      objModel: {},
      oculusGoControls: {},
      oculusTouchControls: {},
      position: { x: 0, y: 0, z: 0 },
      raycaster: {},
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 0, y: 0, z: 0 },
      shadow: {},
      sound: {},
      text: {},
      trackedControlsWebVR: {},
      trackedControlsWebXR: {},
      trackedControls: {},
      valveIndexControls: {},
      visible: true,
      viveControls: {},
      viveFocusControls: {},
      wasdControls: {},
      windowsMotionControls: {},
    };

    it('Should render has all props a-entity tag', () => {
      render(<Entity {...givenProps} />);
    })
  });
});
