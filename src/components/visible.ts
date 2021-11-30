/**
 * The visible component determines whether to render an entity.
 * If set to `false`, then the entity will not be visible nor drawn.
 *
 * Visibility effectively applies to all children.
 * If an entity’s parent or ancestor entity has visibility set to false,
 * then the entity will also not be visible nor draw.
 * It’s a common pattern to create container entities that contain an entire group
 * of entities that you can flip on an off with `visible`.
 *
 * - **true**: The entity will be rendered and visible; the default value.
 * - **false**: The entity will not be rendered nor visible.
 * The entity will still exist in the scene.
 *
 * @see https://aframe.io/docs/1.2.0/components/visible.html
 */
export type VisibleProps = boolean;

export class Visible {
  readonly visible: boolean;

  constructor(visible: boolean = true) {
    this.visible = visible;
  }

  public toString = (): string => String(this.visible);
}
