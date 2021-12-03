import React from 'react';

import type { EntityProps } from '../../core';
import { toProps } from '../../core';

interface Props {
  href?: string;
  title?: string;
  src?: string;
}

/**
 * The link primitive provides a compact API to define links that
 * resembles the traditional `<a>` tag.
 *
 * @see https://aframe.io/docs/1.2.0/primitives/a-link.html
 */
export default function Link(props: Props & EntityProps): JSX.Element {
  const {
    href,
    title,
    src,
    children,
  } = props;

  return (
    <a-link
      {...toProps(props)}
      href={href}
      title={title}
      src={src}
    >
      {children}
    </a-link>
  );
}
