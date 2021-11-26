import React from 'react';

import type {
  FogProps,
  InspectorProps,
  BackgroundProps,
} from '../components/scene';
import {
  Fog,
  Inspector,
  Background,
} from '../components/scene';

interface Props {
  fog?: FogProps;
  inspector?: InspectorProps;
  background?: BackgroundProps;
  children?: React.ReactNode;
  registeredComponents: {
    [key: string]: string | number | boolean;
  };
}

export default function Scene({
  fog = {},
  inspector = {},
  background = {},
  children,
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-scene
      fog={new Fog(fog).toString()}
      inspector={new Inspector(inspector).toString()}
      background={new Background(background).toString()}
      {...registeredComponents}
    >
      {children}
    </a-scene>
  );
}
