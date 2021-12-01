import React from 'react';

interface Props {
  src?: string;
}

export default function GLTFModel({
  src,
}: Props): JSX.Element {
  return (
    <a-gltf-model
      src={src}
    />
  );
}
