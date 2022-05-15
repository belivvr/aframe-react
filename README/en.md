<h1 align="center">aframe-react</h1>
<h2 align="center">React library for A-frame</h2>

<div align="center">
  <img src="https://avatars.githubusercontent.com/u/40684200?s=200&v=4" alt="Belivvr Logo" />
</div>

<br>

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

<br>

<div align="center">
  <img src="https://codecov.io/gh/belivvr/aframe-react/branch/main/graph/badge.svg?token=LVGE4ZUV2Z" alt="codecov" />
</div>

## Languages

[한국어](./ko.md)

---

## Introduce

It was regrettable that the [aframe-react](https://github.com/supermedium/aframe-react) library only supported `a-scene` and `a-entity`.  
A-Frame has many tags such as `a-camera`, `a-box`, etc...  
but it was not available in `aframe-react`, so we made it ourselves.

Support `aframe@1.3.0`.

## Install

```sh
# yarn
yarn add github:aframevr/aframe#480a303b3c1932170552a3e4f9287298c1039c27 @belivvr/aframe-react

# npm
npm install github:aframevr/aframe#480a303b3c1932170552a3e4f9287298c1039c27 @belivvr/aframe-react
```

### Why directly get commit?

A-Frame doesn't release minor patch. But, they constantly commit.  
When just install aframe@1.3.0 install, causes [hand tracking mesh broken issue](https://github.com/belivvr/aframe-react/issues/75).  
But, install latest commit, this issue is solved.

## Usage

### React

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

### Next.JS

Can't using `import AFRAME from 'aframe';` in Next.JS.  
Inevitably, we have no choice but to use `require`, and we have to check the completion of ssr through `useEffect` and then rendering.  

Since `aframe` uses the `window` object, check the window object through `typeof window !== 'undefined'` and call `aframe`.

```tsx
import type { NextPage } from 'next';

import React, { useEffect, useState } from 'react';
import {
  Scene,
  Box,
  Sphere,
  Cylinder,
  Plane,
  Sky,
} from '@belivvr/aframe-react';

const Home: NextPage = () => {
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect(() => {
    setRendered(true);

    if (typeof window !== 'undefined') {
      require('aframe'); // eslint-disable-line global-require
    }
  }, [setRendered]);

  if (!rendered) {
    return <>loading</>;
  }

  return (
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
  );
};

export default Home;
```

## Using custom component

- 0.4.0 Updated: When using `AFRAME.registerComponent`, supports type.

### example

```tsx
AFRAME.registerComponent('spinner', {
  schema: {
    dur: { type: 'number' },
    startEvent: { type: 'array' },
    position: { type: 'vec3' },
    spin: { type: 'boolean' },
  },

  init() {
    // ...
  },
});

// <a-box spinner="dur: 2000; startEvent: click, mouseenter; position: 0 0 -1; spin: true;>
<Box
  spinner={{
    dur: 2000,
    startEvent: ['click', 'mouseenter'],
    position: { x: 0, y: 0, z: -1 },
    spin: true,
  }}
>
```

## Difference from aframe-react

||`aframe-react`|`@belivvr/aframe-react`|
|:-:|:-:|:-:|
|Support Tags|`Entity`, `Scene`|**The entire A-Frame tag**|
|Custom Property|✅|✅|
|Support TypeScript|❌|✅|
|Type Check|❌|✅<br /><small>(Properties of all components provided by A-Frame by default.)</small>|
|jsdoc|![image](https://user-images.githubusercontent.com/41536271/146878902-193b103c-7969-405d-9a42-7ca9822af3b3.png)|![image](https://user-images.githubusercontent.com/41536271/146879090-256a0b1c-69b5-46cf-ae2b-5b9650fb1c53.png)|
