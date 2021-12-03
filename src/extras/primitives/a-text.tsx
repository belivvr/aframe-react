import React from 'react';

import type { TextProps } from '../../components';
import type { EntityProps } from '../../core';
import { toProps } from '../../core';

function toTextProps({
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
}: TextProps): Object {
  return {
    align,
    'alpha-test': alphaTest,
    anchor,
    baseline,
    color,
    font,
    'font-image': fontImage,
    height,
    'letter-spacing': letterSpacing,
    'line-height': lineHeight,
    opacity,
    shader,
    side,
    'tab-size': tabSize,
    transparent,
    value,
    'white-space': whiteSpace,
    width,
    'wrap-count': wrapCount,
    'wrap-pixels': wrapPixels,
    'z-offset': zOffset,
  };
}

/**
 * Wraps the [text component](https://aframe.io/docs/1.2.0/components/text.html).
 *
 * @see https://aframe.io/docs/1.2.0/primitives/a-text.html\
 *
 * @example
 * ```tsx
 * <Text value="Hello, World!" />
 * ```
 */
export default function Text(props: TextProps & EntityProps): JSX.Element {
  const textKeys = [
    'align',
    'alphaTest',
    'anchor',
    'baseline',
    'color',
    'font',
    'fontImage',
    'height',
    'letterSpacing',
    'lineHeight',
    'opacity',
    'shader',
    'side',
    'tabSize',
    'transparent',
    'value',
    'whiteSpace',
    'width',
    'wrapCount',
    'wrapPixels',
    'zOffset',
  ];

  const { children } = props;

  return (
    <a-text
      {...toProps(props, textKeys)}
      {...toTextProps(props)}
    >
      {children}
    </a-text>
  );
}
