# A-Frame React

![Belivvr logo](https://avatars.githubusercontent.com/u/40684200?s=200&v=4)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

[![codecov](https://codecov.io/gh/belivvr/aframe-react/branch/main/graph/badge.svg?token=LVGE4ZUV2Z)](https://codecov.io/gh/belivvr/aframe-react)

## Languages

[English](./en.md)

---

## Introduce

[aframe-react](https://github.com/supermedium/aframe-react) 라이브러리는 `a-scene`, `a-entity` 만을 지원해서 아쉬웠습니다.  
[A-Frame](https://aframe.io/)에는 `a-camera`, `a-box` 등의 수 많은 태그가 존재하지만 `aframe-react` 에서는 사용할 수 없었기에 직접 만들게 되었습니다.  

`aframe@1.2.0` 을 지원합니다.

## Install

```sh
# yarn
yarn add aframe @belivvr/aframe-react

# npm
npm install aframe @belivvr/aframe-react
```

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

Next.JS 에서는 `import AFRAME from 'aframe';` 을 할 수가 없습니다.  
불가피하게 `require` 를 사용할 수 밖에 없고, `useEffect` 를 통해 ssr 완료를 확인 후 랜더링을 해야합니다.  

`aframe` 이 `window` 객체를 사용하기 때문에 `typeof window !== 'undefined'` 를 통해 window 객체를 확인 후 `aframe` 을 불러옵니다.

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

## aframe-react 와의 차이점

||`aframe-react`|`@belivvr/aframe-react`|
|:-:|:-:|:-:|
|Support Tags|`Entity`, `Scene`|**A-Frame 태그 전체**|
|Custom Property|✅|✅|
|Support TypeScript|❌|✅|
|Type Check|❌|✅<br /><small>(A-Frame이 기본적으로 제공하는 모든 컴포넌트의 property)</small>|
|jsdoc|![image](https://user-images.githubusercontent.com/41536271/146878902-193b103c-7969-405d-9a42-7ca9822af3b3.png)|![image](https://user-images.githubusercontent.com/41536271/146879090-256a0b1c-69b5-46cf-ae2b-5b9650fb1c53.png)|
