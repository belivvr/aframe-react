import React from 'react';

import type { EntityProps } from '../../core';
import { toProps } from '../../core';

interface Props {
  autoplay?: boolean;
  loop?: boolean;
  on?: string;
  src?: string;
  volume?: number;
}

function toSoundProps({
  autoplay,
  loop,
  on,
  src,
  volume,
}: Props): Object {
  return {
    autoplay,
    loop,
    on,
    src,
    volume,
  };
}

/**
 * The sound primitive wraps the [sound component](https://aframe.io/docs/1.3.0/components/sound.html).
 *
 * @see https://aframe.io/docs/1.3.0/primitives/a-sound.html
 *
 * @example
 * ```tsx
 * <Scene>
 *   <Sound
 *     src="src: url(click.mp3)"
 *     autoplay={true}
 *     position={{ x: 0, y: 2, z: 5 }}
 *   />
 * </Scene>
 * ```
 */
export default function Sound(props: Props & EntityProps): JSX.Element {
  const volumeKeys = [
    'autoplay',
    'loop',
    'on',
    'src',
    'volume',
  ];

  const { children } = props;

  return (
    <a-sound
      {...toProps(props, volumeKeys)}
      {...toSoundProps(props)}
    >
      {children}
    </a-sound>
  );
}
