import React from 'react';
import type {
  FogProps,
  InspectorProps,
} from '../components/scene';
import {
  Fog,
  Inspector,
} from '../components/scene';

interface Props {
  fog?: FogProps;
  inspector?: InspectorProps;
  children?: React.ReactNode;
  registeredComponents: {
    [key: string]: string | number | boolean;
  };
}

export default function Scene({
  fog = {},
  inspector = {},
  children,
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-scene
      fog={new Fog(fog).toString()}
      inspector={new Inspector(inspector).toString()}
      {...registeredComponents}
    >
      {children}
    </a-scene>
  );
}
