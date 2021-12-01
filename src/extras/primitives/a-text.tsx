import React from 'react';

interface Props {
  align?: unknown;
  alphaTest?: unknown;
  anchor?: unknown;
  baseline?: unknown;
  color?: unknown;
  font?: unknown;
  fontImage?: unknown;
  height?: unknown;
  letterSpacing?: unknown;
  lineHeight?: unknown;
  opacity?: unknown;
  shader?: unknown;
  side?: unknown;
  tabSize?: unknown;
  transparent?: unknown;
  value?: unknown;
  whiteSpace?: unknown;
  width?: unknown;
  wrapCount?: unknown;
  wrapPixels?: unknown;
  zOffset?: unknown;
}

export default function Text({
  align,
  alphaTest,
  anchor,
  baseline,
  color,
  font,
  fontImage,
  height,
  letterSpacing,
  lineHeight,
  opacity,
  shader,
  side,
  tabSize,
  transparent,
  value,
  whiteSpace,
  width,
  wrapCount,
  wrapPixels,
  zOffset,
}: Props): JSX.Element {
  return (
    <a-text
      align={align}
      alpha-test={alphaTest}
      anchor={anchor}
      baseline={baseline}
      color={color}
      font={font}
      font-image={fontImage}
      height={height}
      letter-spacing={letterSpacing}
      line-height={lineHeight}
      opacity={opacity}
      shader={shader}
      side={side}
      tab-size={tabSize}
      transparent={transparent}
      value={value}
      white-space={whiteSpace}
      width={width}
      wrap-count={wrapCount}
      wrap-pixels={wrapPixels}
      z-offset={zOffset}
    />
  );
}
