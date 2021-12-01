import React from 'react';

interface Props {
  href?: string;
  title?: string;
  src?: string;
}

export default function Link({
  href,
  title,
  src,
}: Props): JSX.Element {
  return (
    <a-link
      href={href}
      title={title}
      src={src}
    />
  );
}
