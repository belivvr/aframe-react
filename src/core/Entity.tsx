import React from 'react';

import type {
  AnimationProps,
  CameraProps,
  CursorProps,
  DaydreamControlsProps,
  GearvrControlsProps,
  GenericTrackedControllerControlsProps,
  GeometryProps,
  GLTFModel,
  HandControlsProps,
  HandTrackingControlsProps,
  HpMixedRealityControlsProps,
  LaserControlsProps,
  LayerProps,
  LightProps,
  LineProps,
  LinkProps,
  LookControlsProps,
  MagicleapControlsProps,
  MaterialProps,
  ObjModelProps,
  OculusGoControlsProps,
  OculusTouchControlsProps,
  PositionProps,
  RaycasterProps,
  RotationProps,
  ScaleProps,
  ShadowProps,
  SoundProps,
  TextProps,
  TrackedControlsWebVRProps,
  TrackedControlsWebXRProps,
  TrackedControlsProps,
  ValveIndexControlsProps,
  VisibleProps,
  ViveControlsProps,
  ViveFocusControlsProps,
  WASDControlsProps,
  WindowsMotionControlsProps,
} from '../components';

import {
  Animation,
  Camera,
  Cursor,
  DaydreamControls,
  GearvrControls,
  GenericTrackedControllerControls,
  Geometry,
  HandControls,
  HandTrackingControls,
  HpMixedRealityControls,
  LaserControls,
  Layer,
  Light,
  Line,
  Link,
  LookControls,
  MagicleapControls,
  Material,
  ObjModel,
  OculusGoControls,
  OculusTouchControls,
  Position,
  Raycaster,
  Rotation,
  Scale,
  Shadow,
  Sound,
  Text,
  TrackedControlsWebVR,
  TrackedControlsWebXR,
  TrackedControls,
  ValveIndexControls,
  Visible,
  ViveControls,
  ViveFocusControls,
  WASDControls,
  WindowsMotionControls,
} from '../components';

export interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  animation?: AnimationProps;
  camera?: CameraProps;
  cursor?: CursorProps;
  daydreamControls?: DaydreamControlsProps;
  gearvrControls?: GearvrControlsProps;
  genericTrackedControllerControls?: GenericTrackedControllerControlsProps;
  geometry?: GeometryProps;
  gltfModel?: GLTFModel;
  handControls?: HandControlsProps;
  handTrackingControls?: HandTrackingControlsProps;
  hpMixedRealityControls: HpMixedRealityControlsProps;
  laserControls?: LaserControlsProps;
  layer?: LayerProps;
  light?: LightProps;
  line?: LineProps;
  link?: LinkProps;
  lookControls?: LookControlsProps;
  magicleapControls?: MagicleapControlsProps;
  material?: MaterialProps;
  objModel?: ObjModelProps;
  oculusGoControls?: OculusGoControlsProps;
  oculusTouchControls?: OculusTouchControlsProps;
  position?: PositionProps;
  raycaster?: RaycasterProps;
  rotation?: RotationProps;
  scale?: ScaleProps;
  shadow?: ShadowProps;
  sound?: SoundProps;
  text?: TextProps;
  trackedControlsWebVR?: TrackedControlsWebVRProps;
  trackedControlsWebXR?: TrackedControlsWebXRProps;
  trackedControls?: TrackedControlsProps;
  valveIndexControls?: ValveIndexControlsProps;
  visible?: VisibleProps;
  viveControls?: ViveControlsProps;
  viveFocusControls?: ViveFocusControlsProps;
  wasdControls?: WASDControlsProps;
  windowsMotionControls?: WindowsMotionControlsProps;
  [key: string]: unknown;
}

export function toProps(props: Props): Object {
  const defaultKeys = [
    'id',
    'className',
    'children',
    'animation',
    'camera',
    'cursor',
    'daydreamControls',
    'gearvrControls',
    'genericTrackedControllerControls',
    'geometry',
    'gltfModel',
    'handControls',
    'handTrackingControls',
    'hpMixedRealityControls',
    'laserControls',
    'layer',
    'light',
    'line',
    'link',
    'lookControls',
    'magicleapControls',
    'material',
    'objModel',
    'oculusGoControls',
    'oculusTouchControls',
    'position',
    'raycaster',
    'rotation',
    'scale',
    'shadow',
    'sound',
    'text',
    'trackedControlsWebVR',
    'trackedControlsWebXR',
    'trackedControls',
    'valveIndexControls',
    'visible',
    'viveControls',
    'viveFocusControls',
    'wasdControls',
    'windowsMotionControls',
  ];

  const extraKeys = Object.keys(props).filter((key: string) => !defaultKeys.includes(key));
  const extraProps = extraKeys.reduce((acc: Object, key: string) => ({
    ...acc,
    [key]: props[key],
  }), {});

  const {
    id,
    className,
    animation,
    camera,
    cursor,
    daydreamControls,
    gearvrControls,
    genericTrackedControllerControls,
    geometry,
    gltfModel,
    handControls,
    handTrackingControls,
    hpMixedRealityControls,
    laserControls,
    layer,
    light,
    line,
    link,
    lookControls,
    magicleapControls,
    material,
    objModel,
    oculusGoControls,
    oculusTouchControls,
    position,
    raycaster,
    rotation,
    scale,
    shadow,
    sound,
    text,
    trackedControlsWebVR,
    trackedControlsWebXR,
    trackedControls,
    valveIndexControls,
    visible,
    viveControls,
    viveFocusControls,
    wasdControls,
    windowsMotionControls,
  } = props;

  return {
    id,
    class: className,
    animation: animation && new Animation(animation).toString(),
    camera: camera && new Camera(camera).toString(),
    cursor: cursor && new Cursor(cursor).toString(),
    'daydream-controls': daydreamControls && new DaydreamControls(daydreamControls).toString(),
    'gearvr-controls': gearvrControls && new GearvrControls(gearvrControls).toString(),
    'generic-tracked-controller-controls': genericTrackedControllerControls && new GenericTrackedControllerControls(genericTrackedControllerControls).toString(),
    geometry: geometry && new Geometry(geometry).toString(),
    'gltf-model': gltfModel,
    'hand-controls': handControls && new HandControls(handControls).toString(),
    'hand-tracking-controls': handTrackingControls && new HandTrackingControls(handTrackingControls).toString(),
    'hp-mixed-reality-controls': hpMixedRealityControls && new HpMixedRealityControls(hpMixedRealityControls).toString(),
    'laser-controls': laserControls && new LaserControls(laserControls).toString(),
    layer: layer && new Layer(layer).toString(),
    light: light && new Light(light).toString(),
    line: line && new Line(line).toString(),
    link: link && new Link(link).toString(),
    'look-controls': lookControls && new LookControls(lookControls).toString(),
    'magicleap-controls': magicleapControls && new MagicleapControls(magicleapControls).toString(),
    material: material && new Material(material).toString(),
    'obj-model': objModel && new ObjModel(objModel).toString(),
    'oculus-go-controls': oculusGoControls && new OculusGoControls(oculusGoControls).toString(),
    'oculus-touch-controls': oculusTouchControls && new OculusTouchControls(oculusTouchControls).toString(),
    position: position && new Position(position).toString(),
    raycaster: raycaster && new Raycaster(raycaster).toString(),
    rotation: rotation && new Rotation(rotation).toString(),
    scale: scale && new Scale(scale).toString(),
    shadow: shadow && new Shadow(shadow).toString(),
    sound: sound && new Sound(sound).toString(),
    text: text && new Text(text).toString(),
    'tracked-controls-webvr': trackedControlsWebVR && new TrackedControlsWebVR(trackedControlsWebVR).toString(),
    'tracked-controls-webxr': trackedControlsWebXR && new TrackedControlsWebXR(trackedControlsWebXR).toString(),
    'tracked-controls': trackedControls && new TrackedControls(trackedControls).toString(),
    'valve-index-controls': valveIndexControls && new ValveIndexControls(valveIndexControls).toString(),
    visible: visible && new Visible(visible).toString(),
    'vive-controls': viveControls && new ViveControls(viveControls).toString(),
    'vive-focus-controls': viveFocusControls && new ViveFocusControls(viveFocusControls).toString(),
    'wasd-controls': wasdControls && new WASDControls(wasdControls).toString(),
    'windows-motion-controls': windowsMotionControls && new WindowsMotionControls(windowsMotionControls).toString(),
    ...extraProps,
  };
}

/**
 * A-Frame represents an entity via the `<a-entity>` element. As defined in the [entity-component-system pattern](https://aframe.io/docs/1.2.0/introduction/entity-component-system.html),
 * entities are placeholder objects to which we plug in components to provide them
 * appearance, behavior, and functionality.
 *
 * In A-Frame, entities are inherently attached with the
 * [position](https://aframe.io/docs/1.2.0/components/position.html),
 * [rotation](https://aframe.io/docs/1.2.0/components/rotation.html), and
 * [scale](https://aframe.io/docs/1.2.0/components/scale.html) components.
 *
 * @see https://aframe.io/docs/1.2.0/core/entity.html
 */
export default function Entity(props: Props): JSX.Element {
  const { children } = props;

  return (
    <a-entity
      {...toProps(props)}
    >
      {children}
    </a-entity>
  );
}
