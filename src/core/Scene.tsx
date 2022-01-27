import React from 'react';

import type {
  BackgroundProps,
  DebugProps,
  FogProps,
  InspectorProps,
  VrModeUIProps,
  StatsProps,
  ScreenshotProps,
  PoolProps,
  KeyboardShortcutsProps,
  EmbeddedProps,
  DeviceOrientationPermissionUIProps,
  GLTFModelProps,
  ShadowProps,
  RendererProps,
} from '../components/scene';
import {
  Background,
  Debug,
  Fog,
  Stats,
  Inspector,
  VrModeUI,
  Screenshot,
  Pool,
  KeyboardShortcuts,
  Embedded,
  DeviceOrientationPermissionUI,
  GLTFModel,
  Shadow,
  Renderer,
} from '../components/scene';

interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  fog?: FogProps;
  inspector?: InspectorProps;
  background?: BackgroundProps;
  vrModeUI?: VrModeUIProps;
  stats?: StatsProps;
  screenshot?: ScreenshotProps;
  pool?: PoolProps;
  keyboardShortcuts?: KeyboardShortcutsProps;
  embedded?: EmbeddedProps;
  deviceOrientationPermissionUI?: DeviceOrientationPermissionUIProps;
  debug?: DebugProps;
  gltfModel?: GLTFModelProps;
  shadow?: ShadowProps;
  renderer?: RendererProps;
  [key: string]: unknown;
}

function toProps(props: Props): Object {
  const defaultKeys = [
    'id',
    'className',
    'fog',
    'inspector',
    'background',
    'vrModeUI',
    'stats',
    'screenshot',
    'pool',
    'keyboardShortcuts',
    'embedded',
    'deviceOrientationPermissionUI',
    'debug',
    'gltfModel',
    'shadow',
    'renderer',
    'children',
  ];

  const extraKeys = Object.keys(props).filter((key: string) => !defaultKeys.includes(key));
  const extraProps = extraKeys.reduce((acc: Object, key: string) => ({
    ...acc,
    [key]: props[key],
  }), {});

  const {
    id,
    className,
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
    renderer,
  } = props;

  return {
    id,
    class: className,
    background: background && new Background(background).toString(),
    debug: debug !== undefined ? new Debug(debug).toString() : undefined,
    fog: fog && new Fog(fog).toString(),
    inspector: inspector && new Inspector(inspector).toString(),
    'vr-mode-ui': vrModeUI && new VrModeUI(vrModeUI).toString(),
    stats: stats !== undefined ? new Stats(stats).toString() : undefined,
    screenshot: screenshot && new Screenshot(screenshot).toString(),
    pool: pool && new Pool(pool).toString(),
    'keyboard-shortcuts': keyboardShortcuts && new KeyboardShortcuts(keyboardShortcuts).toString(),
    embedded: embedded !== undefined ? new Embedded(embedded).toString() : undefined,
    'device-orientation-permission-ui': deviceOrientationPermissionUI && new DeviceOrientationPermissionUI(deviceOrientationPermissionUI).toString(),
    'gltf-model': gltfModel && new GLTFModel(gltfModel).toString(),
    shadow: shadow && new Shadow(shadow).toString(),
    renderer: renderer && new Renderer(renderer).toString(),
    ...extraProps,
  };
}

/**
 * A scene is represented by the `<a-scene>` element. The scene is the global root object, and all [entities](https://aframe.io/docs/1.2.0/core/entity.html) are contained within the scene.
 *
 * The scene inherits from the [Entity](https://aframe.io/docs/1.2.0/core/entity.html) class so it inherits all of its properties, its methods, the ability to attach components, and the behavior to wait for all of its child nodes (e.g., `<a-assets>` and `<a-entity>`) to load before kicking off the render loop.
 *
 * @see https://aframe.io/docs/1.2.0/core/scene.html
 */
export default function Scene(props: Props): JSX.Element {
  const { children } = props;

  return (
    <a-scene
      {...toProps(props)}
    >
      {children}
    </a-scene>
  );
}
