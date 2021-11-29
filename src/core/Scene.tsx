import React from 'react';

import type {
  FogProps,
  InspectorProps,
  BackgroundProps,
  VrModeUIProps,
  Stats,
  ScreenshotProps,
  PoolProps,
  KeyboardShortcutsProps,
  Embedded,
  DeviceOrientationPermissionUIProps,
  Debug,
  GLTFModelProps,
  ShadowProps,
} from '../components/scene';
import {
  Fog,
  Inspector,
  Background,
  VrModeUI,
  Screenshot,
  Pool,
  KeyboardShortcuts,
  DeviceOrientationPermissionUI,
  GLTFModel,
  Shadow,
} from '../components/scene';

interface Props {
  fog?: FogProps;
  inspector?: InspectorProps;
  background?: BackgroundProps;
  vrModeUI?: VrModeUIProps;
  stats?: Stats;
  screenshot?: ScreenshotProps;
  pool?: PoolProps;
  keyboardShortcuts?: KeyboardShortcutsProps;
  embedded?: Embedded;
  deviceOrientationPermissionUI?: DeviceOrientationPermissionUIProps;
  debug?: Debug;
  gltfModel?: GLTFModelProps;
  shadow?: ShadowProps;
  children?: React.ReactNode;
  registeredComponents?: {
    [key: string]: string | number | boolean;
  };
}

/**
 * A scene is represented by the `<a-scene>` element. The scene is the global root object, and all [entities](https://aframe.io/docs/1.2.0/core/entity.html) are contained within the scene.
 *
 * The scene inherits from the [Entity](https://aframe.io/docs/1.2.0/core/entity.html) class so it inherits all of its properties, its methods, the ability to attach components, and the behavior to wait for all of its child nodes (e.g., `<a-assets>` and `<a-entity>`) to load before kicking off the render loop.
 *
 * @see https://aframe.io/docs/1.2.0/core/scene.html
 */
export default function Scene({
  fog,
  inspector,
  background,
  vrModeUI,
  stats,
  screenshot,
  pool,
  keyboardShortcuts,
  embedded,
  deviceOrientationPermissionUI,
  debug,
  gltfModel,
  shadow,
  children,
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-scene
      fog={fog ? new Fog(fog).toString() : fog}
      inspector={inspector ? new Inspector(inspector).toString() : inspector}
      background={background ? new Background(background).toString() : background}
      vr-mode-ui={vrModeUI ? new VrModeUI(vrModeUI).toString() : vrModeUI}
      stats={stats}
      screenshot={screenshot ? new Screenshot(screenshot).toString() : screenshot}
      pool={pool ? new Pool(pool).toString() : pool}
      keyboard-shortcuts={
        keyboardShortcuts
          ? new KeyboardShortcuts(keyboardShortcuts).toString()
          : keyboardShortcuts
      }
      embedded={embedded}
      device-orientation-permission-ui={
        deviceOrientationPermissionUI
          ? new DeviceOrientationPermissionUI(deviceOrientationPermissionUI).toString()
          : deviceOrientationPermissionUI
      }
      debug={debug}
      gltf-model={gltfModel ? new GLTFModel(gltfModel).toString() : gltfModel}
      shwdow={shadow ? new Shadow(shadow).toString() : shadow}
      {...registeredComponents}
    >
      {children}
    </a-scene>
  );
}
