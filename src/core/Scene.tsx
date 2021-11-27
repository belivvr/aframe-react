import React from 'react';

import type {
  FogProps,
  InspectorProps,
  BackgroundProps,
  VrModeUIProps,
  Stats,
  ScreenshotProps,
  PoolProps,
} from '../components/scene';
import {
  Fog,
  Inspector,
  Background,
  VrModeUI,
  DefaultStats,
  Screenshot,
  Pool,
} from '../components/scene';

interface Props {
  fog?: FogProps;
  inspector?: InspectorProps;
  background?: BackgroundProps;
  vrModeUI?: VrModeUIProps;
  stats?: Stats;
  screenshot?: ScreenshotProps;
  pool?: PoolProps;
  children?: React.ReactNode;
  registeredComponents: {
    [key: string]: string | number | boolean;
  };
}

export default function Scene({
  fog = {},
  inspector = {},
  background = {},
  vrModeUI = {},
  stats = DefaultStats,
  screenshot = {},
  pool = {},
  children,
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-scene
      fog={new Fog(fog).toString()}
      inspector={new Inspector(inspector).toString()}
      background={new Background(background).toString()}
      vrModeUI={new VrModeUI(vrModeUI).toString()}
      stats={String(stats)}
      screenshot={new Screenshot(screenshot).toString()}
      pool={new Pool(pool).toString()}
      {...registeredComponents}
    >
      {children}
    </a-scene>
  );
}
