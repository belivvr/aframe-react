import parse from '../utils/propParser';

export default abstract class Component<Props> {
  [key: string]: unknown;

  constructor(props: Props) {
    Object.entries(props).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  public toString = (): string => parse({
    ...this,
    toString: undefined,
  });
}
