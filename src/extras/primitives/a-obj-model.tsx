import React from 'react';

interface Props {
  mtl?: unknown;
  obj?: unknown;
}

export default function ObjModel({
  mtl,
  obj,
}: Props): JSX.Element {
  return (
    <a-obj-model
      mtl={mtl}
      src={obj}
    />
  );
}
