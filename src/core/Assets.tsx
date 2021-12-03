import React from 'react';

interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  timeout?: number;
  [key: string]: unknown;
}

export default function Assets(props: Props): JSX.Element {
  const {
    id,
    className,
    children,
    timeout,
  } = props;

  const defaultKeys = [
    'id',
    'className',
    'children',
    'timeout',
  ];

  const extraKeys = Object.keys(props).filter((key: string) => !defaultKeys.includes(key));
  const extraProps = extraKeys.reduce((acc: Object, key: string) => ({
    ...acc,
    [key]: props[key],
  }), {});

  return (
    <a-mixin
      id={id}
      class={className}
      timeout={timeout}
      {...extraProps}
    >
      {children}
    </a-mixin>
  );
}
