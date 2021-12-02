import React from 'react';

interface Props {
  id?: string;
  className?: string;
  src?: string;
  responseType?: string;
  children?: React.ReactNode;
  registeredComponents?: {
    [key: string]: string | number | boolean;
  };
}

export default function AssetItem({
  id,
  className,
  src,
  responseType,
  children,
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-mixin
      id={id}
      className={className}
      src={src}
      response-type={responseType}
      {...registeredComponents}
    >
      {children}
    </a-mixin>
  );
}
