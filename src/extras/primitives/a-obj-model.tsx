import React from 'react';

import type { EntityProps } from '../../core';
import { toProps } from '../../core';

interface Props {
  mtl?: string;
  obj?: string;
}

/**
 * > We recommend glTF for distributing assets in production over the web.
 * > Check out using the [glTF model primitive](https://aframe.io/docs/1.3.0/primitives/a-gltf-model.html).
 * > You can either instead export to COLLADA and
 * > use [the converter](https://cesiumjs.org/convertmodel.html) or try out the [OBJ converter](https://github.com/AnalyticalGraphicsInc/OBJ2GLTF).
 *
 * The .OBJ model primitive displays a 3D Wavefront model.
 *
 * @see https://aframe.io/docs/1.3.0/primitives/a-obj-model.html
 *
 * @example
 * ```tsx
 * <Scene>
 *   <Assets>
 *     <AssetItem id="crate-obj" src="crate.obj" />
 *     <AssetItem id="crate-mtl" src="crate.mtl" />
 *   </Assets>
 *
 *   // Using the asset management system.
 *   <ObjModel src="#crate-obj" mtl="#crate-mtl" />
 *
 *   // Defining the URL inline. Not recommended but may be more comfortable.
 *   <ObjModel src="crate.obj" mtl="crate.mtl" />
 * </Scene>
 * ```
 */
export default function ObjModel(props: Props & EntityProps): JSX.Element {
  const {
    mtl,
    obj,
    children,
  } = props;

  return (
    <a-obj-model
      {...toProps(props, ['mtl', 'obj'])}
      mtl={mtl}
      src={obj}
    >
      {children}
    </a-obj-model>
  );
}
