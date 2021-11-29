/**
 * The obj-model component loads a 3D model and material using a [Wavefront](https://en.wikipedia.org/wiki/Wavefront_.obj_file) (.OBJ) file and a .MTL file.
 *
 * @see https://aframe.io/docs/1.2.0/components/obj-model.html
 */
export interface ObjModelProps {
  /**
   * Selector to an `<a-asset-item>` pointing to a .MTL file or an inline path to a .MTL file. Optional if you wish to use the [material component](https://aframe.io/docs/1.2.0/components/material.html) instead.
   */
  mtl?: string;

  /**
   * Selector to an `<a-asset-item>` pointing to a .OBJ file or an inline path to a .OBJ file.
   */
  obj?: string;
}

export class ObjModel implements ObjModelProps {
  readonly mtl?: string;

  readonly obj?: string;

  constructor({
    mtl,
    obj,
  }: ObjModelProps) {
    this.mtl = mtl;
    this.obj = obj;
  }

  public toString = (): string => `mtl:${this.mtl};`
                                + `obj:${this.obj};`;
}
