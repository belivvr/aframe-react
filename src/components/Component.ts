export default abstract class Component<Props> {
  [key: string]: unknown;

  constructor(props: Props) {
    Object.entries(props).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  public setAttribute = (element: HTMLElement): void => {
    element.setAttribute('component', this.makeAttribute() as any);
  };

  protected makeAttribute = (): Object => {
    const attributes = Object.assign({}, this);

    delete attributes.setAttribute;
    delete attributes.makeAttribute;

    Object.entries(attributes)
      .filter(([, value]) => value === undefined)
      .forEach(([key]) => delete attributes[key]);

    return attributes;
  };
}
