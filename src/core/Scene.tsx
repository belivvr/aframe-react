import React from 'react';

import type {
  FogProps,
  InspectorProps,
  BackgroundProps,
  VrModeUIProps,
} from '../components/scene';
import {
  Fog,
  Inspector,
  Background,
  VrModeUI,
} from '../components/scene';

interface Props {
  fog?: FogProps;
  inspector?: InspectorProps;
  background?: BackgroundProps;
  vrModeUI?: VrModeUIProps;
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
  children,
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-scene
      fog={new Fog(fog).toString()}
      inspector={new Inspector(inspector).toString()}
      background={new Background(background).toString()}
      vrModeUI={new VrModeUI(vrModeUI).toString()}
      {...registeredComponents}
    >
      {children}
    </a-scene>
  );
}
