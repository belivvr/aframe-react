import React from 'react';

interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  src?: string;
  responseType?: string;
  [key: string]: unknown;
}

export default function AssetItem(props: Props): JSX.Element {
  const {
    id,
    className,
    children,
    src,
    responseType,
  } = props;

  const defaultKeys = [
    'id',
    'className',
    'children',
    'src',
    'responseType',
  ];

  const extraKeys = Object.keys(props).filter((key: string) => !defaultKeys.includes(key));
  const extraProps = extraKeys.reduce((acc: Object, key: string) => ({
    ...acc,
    [key]: props[key],
  }), {});

  return (
    <a-asset-item
      id={id}
      class={className}
      src={src}
      response-type={responseType}
      {...extraProps}
    >
      {children}
    </a-asset-item>
  );
}
