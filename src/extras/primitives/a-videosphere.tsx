import React from 'react';

interface Props {
  autoplay?: unknown;
  crossOrigin?: unknown;
  loop?: unknown;
  radius?: unknown;
  segmentsHeight?: unknown;
  segmentsWidth?: unknown;
}

export default function VideoSphere({
  autoplay,
  crossOrigin,
  loop,
  radius,
  segmentsHeight,
  segmentsWidth,
}: Props): JSX.Element {
  return (
    <a-videosphere
      autoplay={autoplay}
      // eslint-disable-next-line react/no-unknown-property
      crossOrigin={crossOrigin}
      loop={loop}
      radius={radius}
      segments-height={segmentsHeight}
      segments-width={segmentsWidth}
    />
  );
}
