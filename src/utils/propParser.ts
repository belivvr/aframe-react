function parseObjectValue(object: object): string {
  return Object.values(object)
    .reduce((acc: string, value: unknown) => `${acc === '' ? '' : `${acc} `}${value}`, '');
}

function parseArrayValue(array: unknown[]): string {
  return array
    .reduce((acc: string, value: unknown) => `${acc === '' ? '' : `${acc},`}${value}`, '');
}

function isArray(value: object | unknown[]): boolean {
  // @ts-ignore
  return typeof value.reduce !== 'undefined';
}

export default function parse(propValue: unknown): string {
  if (propValue === null || propValue === undefined) {
    return '';
  }

  if (typeof propValue !== 'object') return `${propValue}`;

  if (isArray(propValue as unknown[] | object)) {
    return parseArrayValue(propValue as unknown[]);
  }

  const guessXYZ = propValue as { x: number, y: number, z: number };

  if (guessXYZ.x !== undefined && guessXYZ.y !== undefined && guessXYZ.z !== undefined) {
    return `${guessXYZ.x} ${guessXYZ.y} ${guessXYZ.z}`;
  }

  return Object.entries(propValue as object).reduce((acc, [key, value]) => {
    if (value === undefined) {
      return acc;
    }

    if (typeof value !== 'object') return `${acc}${key}:${value};`;

    const parsedValue: string = isArray(value) ? parseArrayValue(value) : parseObjectValue(value);
    return `${acc}${key}:${parsedValue};`;
  }, '');
}
