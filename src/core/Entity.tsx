import React from 'react';

import type {
  AnimationProps,
} from '../components/animation';
import {
  Animation,
} from '../components/animation';

interface Props {
  children?: React.ReactNode;
  animation?: AnimationProps;
  registeredComponents: {
    [key: string]: string | number | boolean;
  };
}

/**
 * A-Frame represents an entity via the `<a-entity>` element. As defined in the [entity-component-system pattern](https://aframe.io/docs/1.2.0/introduction/entity-component-system.html),
 * entities are placeholder objects to which we plug in components to provide them
 * appearance, behavior, and functionality.
 *
 * In A-Frame, entities are inherently attached with the
 * [position](https://aframe.io/docs/1.2.0/components/position.html),
 * [rotation](https://aframe.io/docs/1.2.0/components/rotation.html), and
 * [scale](https://aframe.io/docs/1.2.0/components/scale.html) components.
 *
 * @see https://aframe.io/docs/1.2.0/core/entity.html
 */
export default function Entity({
  children,
  animation = {},
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-entity
      animation={new Animation(animation).toString()}
      {...registeredComponents}
    >
      {children}
    </a-entity>
  );
}
