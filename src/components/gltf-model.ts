/**
 * [glTF](https://www.khronos.org/gltf) (GL Transmission Format) is an open project by Khronos providing a common,
 * extensible format for 3D assets that is both efficient and highly interoperable
 * with modern web technologies.
 *
 * The `gltf-model` component loads a 3D model using a glTF (`.gltf` or `.glb`) file.
 *
 * Note that glTF is a fairly new specification and adoption is still growing.
 * Work on the [three.js glTF loader](https://threejs.org/docs/#examples/loaders/GLTFLoader) and converters are still active.
 *
 * > NOTE: A-Frame supports glTF 2.0.
 * > For models using older versions of the glTF format,
 * > use `gltf-model-legacy` from [donmccurdy/aframe-extras](https://github.com/donmccurdy/aframe-extras/tree/master/src/loaders).
 *
 * @see https://aframe.io/docs/1.2.0/components/gltf-model.html
 *
 * @example
 * '#tree' // Selector to an <a-asset-item>
 * 'url(/path/to/tree.gltf)' // url()-enclosed path to a glTF file
 */
export default class GLTFModel {
  /**
   * selector: Selector to an `<a-asset-item>`
   *
   * string: `url()-`enclosed path to a glTF file
   */
  readonly value?: string;

  constructor(value?: string) {
    this.value = value;
  }

  public toString = (): string => this.value || '';
}
