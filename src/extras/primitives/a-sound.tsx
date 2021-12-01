import React from 'react';

interface Props {
  autoplay?: unknown;
  loop?: unknown;
  on?: unknown;
  src?: unknown;
  volume?: unknown;
}

export default function Sound({
  autoplay,
  loop,
  on,
  src,
  volume,
}: Props): JSX.Element {
  return (
    <a-sound
      autoplay={autoplay}
      loop={loop}
      on={on}
      src={src}
      volume={volume}
    />
  );
}
