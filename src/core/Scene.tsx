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
} from '../components/scene';
import {
  Fog,
  Inspector,
  Background,
  VrModeUI,
  DefaultStats,
  Screenshot,
  Pool,
  KeyboardShortcuts,
  DefaultEmbedded,
  DeviceOrientationPermissionUI,
  DefaultDebug,
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
  children?: React.ReactNode;
  registeredComponents: {
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
  fog = {},
  inspector = {},
  background = {},
  vrModeUI = {},
  stats = DefaultStats,
  screenshot = {},
  pool = {},
  keyboardShortcuts = {},
  embedded = DefaultEmbedded,
  deviceOrientationPermissionUI = {},
  debug = DefaultDebug,
  children,
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-scene
      fog={new Fog(fog).toString()}
      inspector={new Inspector(inspector).toString()}
      background={new Background(background).toString()}
      vr-mode-ui={new VrModeUI(vrModeUI).toString()}
      stats={stats}
      screenshot={new Screenshot(screenshot).toString()}
      pool={new Pool(pool).toString()}
      keyboard-shortcuts={new KeyboardShortcuts(keyboardShortcuts).toString()}
      embedded={embedded}
      device-orientation-permission-ui={
        new DeviceOrientationPermissionUI(deviceOrientationPermissionUI).toString()
      }
      debug={debug}
      {...registeredComponents}
    >
      {children}
    </a-scene>
  );
}
