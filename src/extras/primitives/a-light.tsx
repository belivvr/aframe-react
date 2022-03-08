import React from 'react';

import type { LightType } from '../../components';
import type { EntityProps } from '../../core';
import { toProps } from '../../core';

interface Props {
  angle?: number;
  color?: string;
  decay?: number;
  distance?: number;
  groundColor?: string;
  intensity?: number;
  penumbra?: number;
  type?: LightType;
  target?: string;
}

function toLightProps({
  angle,
  color,
  decay,
  distance,
  groundColor,
  intensity,
  penumbra,
  type,
  target,
}: Props): Object {
  return {
    angle,
    color,
    decay,
    distance,
    'ground-color': groundColor,
    intensity,
    penumbra,
    type,
    target,
  };
}

/**
 * A light changes the lighting and shading of the scene.
 *
 * @see https://aframe.io/docs/1.3.0/primitives/a-light.html
 *
 * @example
 * ```tsx
 * // Red directional light shining from the top left.
 * <Light color="red" position={{ x: -1, y: 1, z: 0 }} />
 *
 * // Blue point light, 5 meters in the air.
 * <Light type="point" color="blue" position={{ x: 0, y: 5, z: 0 }} />
 *
 * // Dim ambient lighting.
 * <Light type="ambient" color="#222" />
 * ```
 */
export default function Light(props: Props & EntityProps): JSX.Element {
  const lightKeys = [
    'angle',
    'color',
    'decay',
    'distance',
    'groundColor',
    'intensity',
    'penumbra',
    'type',
    'target',
  ];

  const { children } = props;

  return (
    <a-light
      {...toProps(props, lightKeys)}
      {...toLightProps(props)}
    >
      {children}
    </a-light>
  );
}
