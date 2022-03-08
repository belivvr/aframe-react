import Component from './Component';

/**
 * The shadow component enables shadows for an entity and its children.
 * Receiving shadows from surrounding objects and casting shadows
 * onto other objects may (and often should) be enabled independently.
 *
 * Without this component, an entity will not cast nor receive shadows.
 *
 * @see https://aframe.io/docs/1.2.0/components/shadow.html
 */
export interface ShadowProps {
  /**
   * Whether the entity casts shadows onto the surrounding scene.
   */
  cast?: boolean;

  /**
   * Whether the entity receives shadows from the surrounding scene.
   */
  receive?: boolean;
}

export class Shadow extends Component<ShadowProps> {
  readonly cast?: boolean;

  readonly receive?: boolean;
}
