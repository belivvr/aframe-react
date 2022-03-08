import React from 'react';

import type { EntityProps } from '../../core';
import { toProps } from '../../core';

interface Props {
  src?: string;
}

/**
 * The glTF model primitive displays a 3D glTF model
 * created from a 3D modeling program or downloaded from the web.
 *
 * @see https://aframe.io/docs/1.3.0/primitives/a-gltf-model.html
 *
 * @example
 * ```tsx
 * <Scene>
 *   <Assets>
 *     <AssetItem id="tree" src="tree.gltf" />
 *   </Assets>
 *
 *   // Using the asset management system.
 *   <GLTFModel src="#tree" />
 *
 *   // Defining the URL inline.
 *   // Not recommended but more comfortable for web developers.
 *   <GLTFModel src="tree.gltf" />
 * </Scene>
 * ```
 */
export default function GLTFModel(props: Props & EntityProps): JSX.Element {
  const { src, children } = props;

  return (
    <a-gltf-model
      {...toProps(props)}
      src={src}
    >
      {children}
    </a-gltf-model>
  );
}
