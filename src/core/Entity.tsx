import React from 'react';

import type {
  AnimationProps,
  CameraProps,
  CursorProps,
  DaydreamControlsProps,
  GearvrControlsProps,
  GenericTrackedControllerControlsProps,
  GeometryProps,
  GLTFModel,
  HandControlsProps,
  HandTrackingControlsProps,
  HpMixedRealityControlsProps,
  LaserControlsProps,
  LayerProps,
} from '../components';
import {
  Animation,
  Camera,
  Cursor,
  DaydreamControls,
  GearvrControls,
  GenericTrackedControllerControls,
  Geometry,
  HandControls,
  HandTrackingControls,
  HpMixedRealityControls,
  LaserControls,
  Layer,
} from '../components';

interface Props {
  children?: React.ReactNode;
  animation?: AnimationProps;
  camera?: CameraProps;
  cursor?: CursorProps;
  daydreamControls?: DaydreamControlsProps;
  gearvrControls?: GearvrControlsProps;
  genericTrackedControllerControls?: GenericTrackedControllerControlsProps;
  geometry?: GeometryProps;
  gltfModel?: GLTFModel;
  handControls?: HandControlsProps;
  handTrackingControls?: HandTrackingControlsProps;
  hpMixedRealityControls: HpMixedRealityControlsProps;
  laserControls?: LaserControlsProps;
  layer?: LayerProps;
  registeredComponents?: {
    [key: string]: string | number | boolean;
  };
}

/**
 * A-Frame represents an entity via the `<a-entity>` element. As defined in the [entity-component-system pattern](https://aframe.io/docs/1.2.0/introduction/entity-component-system.html),
 * entities are placeholder objects to which we plug in components to provide them
 * appearance, behavior, and functionality.
 *
 * In A-Frame, entities are inherently attached with the
 * [position](https://aframe.io/docs/1.2.0/components/position.html),
 * [rotation](https://aframe.io/docs/1.2.0/components/rotation.html), and
 * [scale](https://aframe.io/docs/1.2.0/components/scale.html) components.
 *
 * @see https://aframe.io/docs/1.2.0/core/entity.html
 */
export default function Entity({
  children,
  animation = {},
  camera = {},
  cursor = {},
  daydreamControls = {},
  gearvrControls = {},
  genericTrackedControllerControls = {},
  geometry = {},
  gltfModel,
  handControls = {},
  handTrackingControls = {},
  hpMixedRealityControls = {},
  laserControls = {},
  layer = {},
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-entity
      animation={new Animation(animation).toString()}
      camera={new Camera(camera).toString()}
      cursor={new Cursor(cursor).toString()}
      daydream-controls={new DaydreamControls(daydreamControls).toString()}
      gearvr-controls={new GearvrControls(gearvrControls).toString()}
      generic-tracked-controller-controls={
        new GenericTrackedControllerControls(genericTrackedControllerControls).toString()
      }
      geometry={new Geometry(geometry).toString()}
      gltf-model={gltfModel}
      hand-controls={new HandControls(handControls).toString()}
      hand-tracking-controls={new HandTrackingControls(handTrackingControls).toString()}
      hp-mixed-reality-controls={new HpMixedRealityControls(hpMixedRealityControls).toString()}
      laser-controls={new LaserControls(laserControls).toString()}
      layer={new Layer(layer).toString()}
      {...registeredComponents}
    >
      {children}
    </a-entity>
  );
}
