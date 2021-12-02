import React from 'react';

import type { GeometryProps, MaterialProps } from '../components';
import { Geometry, Material } from '../components';

interface Props {
  id?: string;
  className?: string;
  material?: MaterialProps;
  geometry?: GeometryProps;
  children?: React.ReactNode;
  registeredComponents?: {
    [key: string]: string | number | boolean;
  };
}

export default function Mixin({
  id,
  className,
  material,
  geometry,
  children,
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-mixin
      id={id}
      className={className}
      material={material ? new Material(material).toString() : undefined}
      geometry={geometry ? new Geometry(geometry).toString() : undefined}
      {...registeredComponents}
    >
      {children}
    </a-mixin>
  );
}
