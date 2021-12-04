# @belivvr/aframe-react

![Belivvr logo](https://avatars.githubusercontent.com/u/40684200?s=200&v=4)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Install

```sh
yarn add @belivvr/aframe-react

// or

npm install @belivvr/aframe-react
```

## Usage

### Example

Build VR scenes in the browser with just a few lines of HTML! To start playing and publishing now, remix the starter example on:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';

import {
  Scene,
  Box,
  Sphere,
  Cylinder,
  Plane,
  Sky,
} from '@belivvr/aframe-react';

ReactDOM.render(
  (
    <Scene>
      <Box
        position={{ x: -1, y: 0.5, z: -3 }}
        rotation={{ x: 0, y: 45, z: 0 }}
        color="#4CC3D9"
      />
      <Sphere
        position={{ x: 0, y: 1.25, z: -5 }}
        radius={1.25}
        color="#EF2D5E"
      />
      <Cylinder
        position={{ x: 1, y: 0.75, z: -3 }}
        radius={0.5}
        height={1.5}
        color="#FFC65D"
      />
      <Plane
        position={{ x: 0, y: 0, z: -4 }}
        rotation={{ x: -90, y: 0, z: 0 }}
        width={4}
        height={4}
        color="#7BC8A4"
      />
      <Sky color="#ECECEC" />
    </Scene>
  ),
  document.getElementById('root'),
);
```

With A-Frame's entity-component architecture, we can drop in community components from the ecosystem (e.g., ocean, physics) and plug them into our objects straight from HTML:

```tsx
<Scene>
  <Entity
    id="rain"
    particle-system="preset: rain; color: #24CAFF; particleCount: 5000"
  />

  <Entity
    id="sphere"
    geometry={{ primitive: 'sphere' }}
    material={{ color: '#EFEFEF' shader: 'flat' }}
    position={{ x: 0, y: 0.15, z: -5 }}
    light={{ type: 'point', intensity: 5 }}
    animation={{
      property: 'position'
      easing: 'easeInOutQuad',
      dir: 'alternate',
      dur: 1000,
      to: '0 -0.10 -5',
      loop: true,
    }}
  />

  <Entity
    id="ocean"
    ocean="density: 20; width: 50; depth: 50; speed: 4"
    material={{
      color: '#9CE3F9',
      opacity: 0.75,
      metalness: 0,
      roughness: 1,
    }}
    rotation={{ x: -90, y: 0, z: 0 }}
  />

  <Entity
    id="sky"
    geometry={{
      primitive: 'sphere',
      radius: 5000,
    }}
    material={{
      shader: 'gradient'
      topColor: '235 235 245',
      bottomColor: '185 185 210',
    }}
    scale={{ x: -1, y: 1, z: 1 }}
  />

  <Entity
    id="light"
    light={{
      type: 'ambient',
      color: '#888',
    }}
  />
</Scene>
```
