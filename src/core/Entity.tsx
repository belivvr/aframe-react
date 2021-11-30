import React from 'react';

import {
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
} from '../components';

interface Props {
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
  registeredComponents?: {
    [key: string]: string | number | boolean;
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
export default function Entity({
  children,
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
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-entity
      animation={animation ? new Animation(animation).toString() : animation}
      camera={camera ? new Camera(camera).toString() : camera}
      cursor={cursor ? new Cursor(cursor).toString() : cursor}
      daydream-controls={
        daydreamControls
          ? new DaydreamControls(daydreamControls).toString()
          : daydreamControls
      }
      gearvr-controls={
        gearvrControls
          ? new GearvrControls(gearvrControls).toString()
          : gearvrControls
      }
      generic-tracked-controller-controls={
        genericTrackedControllerControls
          ? new GenericTrackedControllerControls(genericTrackedControllerControls).toString()
          : genericTrackedControllerControls
      }
      geometry={geometry ? new Geometry(geometry).toString() : geometry}
      gltf-model={gltfModel}
      hand-controls={handControls ? new HandControls(handControls).toString() : handControls}
      hand-tracking-controls={handTrackingControls
        ? new HandTrackingControls(handTrackingControls).toString()
        : handTrackingControls}
      hp-mixed-reality-controls={hpMixedRealityControls
        ? new HpMixedRealityControls(hpMixedRealityControls).toString()
        : hpMixedRealityControls}
      laser-controls={laserControls ? new LaserControls(laserControls).toString() : laserControls}
      layer={layer ? new Layer(layer).toString() : layer}
      light={light ? new Light(light).toString() : light}
      line={line ? new Line(line).toString() : line}
      link={link ? new Link(link).toString() : link}
      look-controls={lookControls ? new LookControls(lookControls).toString() : lookControls}
      magicleap-controls={
        magicleapControls
          ? new MagicleapControls(magicleapControls).toString()
          : magicleapControls
        }
      material={material ? new Material(material) : material}
      obj-model={objModel ? new ObjModel(objModel) : objModel}
      oculus-go-controls={
        oculusGoControls
          ? new OculusGoControls(oculusGoControls)
          : oculusGoControls
      }
      oculus-touch-controls={
        oculusTouchControls
          ? new OculusTouchControls(oculusTouchControls)
          : oculusTouchControls
      }
      position={position ? new Position(position) : position}
      raycaster={raycaster ? new Raycaster(raycaster) : raycaster}
      rotation={rotation ? new Rotation(rotation) : rotation}
      scale={scale ? new Scale(scale) : scale}
      shadow={shadow ? new Shadow(shadow) : shadow}
      sound={sound ? new Sound(sound) : sound}
      text={text ? new Text(text) : text}
      tracked-controls-webvr={
        trackedControlsWebVR
          ? new TrackedControlsWebVR(trackedControlsWebVR)
          : trackedControlsWebVR
      }
      tracked-controls-webxr={
        trackedControlsWebXR
          ? new TrackedControlsWebXR(trackedControlsWebXR)
          : trackedControlsWebXR
      }
      tracked-controls={
        trackedControls
          ? new TrackedControls(trackedControls)
          : trackedControls
      }
      valve-index-controls={
        valveIndexControls
          ? new ValveIndexControls(valveIndexControls)
          : valveIndexControls
      }
      visible={new Visible(visible)}
      {...registeredComponents}
    >
      {children}
    </a-entity>
  );
}
