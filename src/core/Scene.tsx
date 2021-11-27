import React from 'react';

import type {
  FogProps,
  InspectorProps,
  BackgroundProps,
  VrModeUIProps,
  Stats,
} from '../components/scene';
import {
  Fog,
  Inspector,
  Background,
  VrModeUI,
  DefaultStats,
} from '../components/scene';

interface Props {
  fog?: FogProps;
  inspector?: InspectorProps;
  background?: BackgroundProps;
  vrModeUI?: VrModeUIProps;
  stats?: Stats;
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
      {...registeredComponents}
    >
      {children}
    </a-scene>
  );
}
