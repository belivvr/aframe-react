import React from 'react';

interface Props {
  id?: string;
  className?: string;
  timeout?: number;
  children?: React.ReactNode;
  registeredComponents?: {
    [key: string]: string | number | boolean;
  };
}

export default function Assets({
  id,
  className,
  timeout,
  children,
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-mixin
      id={id}
      className={className}
      timeout={timeout}
      {...registeredComponents}
    >
      {children}
    </a-mixin>
  );
}
