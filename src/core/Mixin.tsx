import React from 'react';

import type { GeometryProps, MaterialProps } from '../components';
import { Geometry, Material } from '../components';

interface Props {
  id?: string;
  className?: string;
  material?: MaterialProps;
  geometry?: GeometryProps;
  children?: React.ReactNode;
  [key: string]: unknown;
}

export default function Mixin(props: Props): JSX.Element {
  const {
    id,
    className,
    material,
    geometry,
    children,
  } = props;

  const defaultKeys = [
    'id',
    'className',
    'material',
    'geometry',
    'children',
  ];

  const extraKeys = Object.keys(props).filter((key: string) => !defaultKeys.includes(key));
  const extraProps = extraKeys.reduce((acc: Object, key: string) => ({
    ...acc,
    [key]: props[key],
  }), {});

  return (
    <a-mixin
      id={id}
      class={className}
      material={material && new Material(material).toString()}
      geometry={geometry && new Geometry(geometry).toString()}
      {...extraProps}
    >
      {children}
    </a-mixin>
  );
}
