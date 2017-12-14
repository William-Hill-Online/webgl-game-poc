/* Copyright 2017 William Hill.

Licensed under the Apache License, Version 2.0 (the “License”);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an “AS IS” BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

import { SceneNavigationController } from '../engine/UI/scene.navigation.controller';
import { Touch } from '../engine/UI/touch';
import { Shader } from '../engine/rendering/shaders/shader';
import { Program } from '../engine/rendering/shaders/program';
import { SpriteBatch } from './rendering/sprite.batch';
import { Sprite } from './rendering/sprite';
import { Rectangle } from './rendering/rectangle';
import { Texture } from './rendering/texture';
import { Matrix4x4 } from './math/matrix_4x4';
import { Vector3 } from './math/vector3';
import { BaseShadingProgram } from './rendering/shaders/base.shading.program';
import { MasterRenderer } from './rendering/renderers/master.renderer';
import { SharedGeometry } from './rendering/objects/shared.geometry';
import { CubeModel } from './rendering/dummy/cube';
import { TriangleModel } from './rendering/dummy/triangle';
import { SharedTextures } from './rendering/shared.textures';
import { ShadingProgram2d } from './rendering/shaders/shading.program.2d';
import { ShadingProgram3d } from './rendering/shaders/shading.program.3d';
import { OGexLoader } from './loaders/ogex.loader';
import { RayCaster, Ray } from '../engine/rendering/ray.caster';
import { Point } from '../engine/math/point';
import { MathHelper } from '../engine/math/math.helper';

export class Engine {
 /// The WebGL context that will be used for rendering
private glContext: WebGLRenderingContext;
private isSetup: boolean = false;
private canvas: HTMLCanvasElement;

private sharedGeometry: SharedGeometry;
private masterRenderer: MasterRenderer;
private fieldOfViewRadians: number;

private shadingProgram2d: ShadingProgram2d;
private shadingProgram3d: ShadingProgram3d;

private rayCaster: RayCaster;
rootSceneNavigationController: SceneNavigationController;
mouseLocation: Point = Point.zero
//Keycodes
private KEY_A = 97;
private KEY_D = 100;
private KEY_Q = 113;
private KEY_RIGHT = 39;

private lastTimestamp = 0;
//
lastMouseX = 0;
lastMouseY = 0;

/// Setups the engine
 setup() {
  this.canvas = <HTMLCanvasElement>document.getElementById('webgl-canvas');
  this.glContext = <WebGLRenderingContext>this.canvas.getContext("webgl");
  if (this.glContext == null) { throw "No WebGL support"; }

  SharedTextures.createInstance(this.glContext);
  SharedGeometry.createInstance(this.glContext);

  SharedGeometry.Instance.registerModel("cube", new CubeModel());
  SharedGeometry.Instance.registerModel("triangle", new TriangleModel());
  
  //register touches
  this.canvas.onmousedown = (event: MouseEvent) => {
    this.onMouseClick(new Touch(event.x, event.y));
   };

  window.onresize = () => {
   this.resize(this.canvas);
  };

  window.onorientationchange = () => {
    this.resize(this.canvas);
  }

  this.rootSceneNavigationController = new SceneNavigationController();

  this.glContext.clearColor(125 / 255, 196 / 255, 240 / 255, 1);
  this.isSetup = true;
 }

 onMouseClick(touch: Touch) {
   let ratio = window.devicePixelRatio || 1;

   let touchWithRatio = new Touch(touch.x / ratio, touch.y / ratio);

  let topSC = this.rootSceneNavigationController.topSceneController;
  if (topSC == null) return;
  topSC.touchesBegan(touch);
 }

 start() {
  if (!this.isSetup) { 
   throw "Engine is not setup! Call setup!"; 
  }

  // all models are loaded at this point setup buffers 
  SharedGeometry.Instance.setupBuffers();
  let topSceneCtr = this.rootSceneNavigationController.topSceneController;
  this.masterRenderer = new MasterRenderer(this.glContext, 
                                           this.shadingProgram2d, 
                                           this.shadingProgram3d);     
  this.rayCaster = new RayCaster(topSceneCtr.scene.camera, this.canvas);
  topSceneCtr.rayCaster = this.rayCaster;
  topSceneCtr.sceneDidLoad();

  this.resize(this.canvas); // resize canvas before rendering
  requestAnimationFrame(this.update.bind(this));
 }

 update(timestamp: number) {
    const dt = (timestamp - this.lastTimestamp) / 1000;
    this.lastTimestamp = timestamp;
     let topSC = this.rootSceneNavigationController.topSceneController;
     topSC.scene.objects3D.forEach(o => o.update(dt));
     
     if (topSC.scene.player != null) {
      topSC.scene.player.update(dt);
     }

     topSC.scene.enemies.forEach(e => e.update(dt));
     this.render();
     requestAnimationFrame(this.update.bind(this));
 }

 render() {
  this.glContext.clear(this.glContext.COLOR_BUFFER_BIT | this.glContext.DEPTH_BUFFER_BIT);

  let topSC = this.rootSceneNavigationController.topSceneController;
  // draw 2D sprites
  if (topSC != null) {
    topSC.update();
    this.masterRenderer.render(topSC.scene);
  }
 }

 createProgram2D(vertextShaderCode: string, fragmentShaderCode: string, programName: string) {
  let shader = new ShadingProgram2d(this.glContext, 
                                    vertextShaderCode, 
                                    fragmentShaderCode);
  this.shadingProgram2d = shader;
 }

 createProgram3D(vertextShaderCode: string, fragmentShaderCode: string, programName: string) {
  let shader = new ShadingProgram3d(this.glContext, 
                                    vertextShaderCode, 
                                    fragmentShaderCode);
  this.shadingProgram3d = shader;
 }

 createTextureWithImage(key: string, image: any) {
  let texture = Texture.createTextureFromImage(this.glContext, image);
  SharedTextures.Instance.setTexture(key, texture);
 }

 loadModel(data: string, name: string) {
  let model = new OGexLoader().parse(data);
  SharedGeometry.Instance.registerModel(name, model);
 }

 private resize(canvas: HTMLCanvasElement) {
  var cssToRealPixels = window.devicePixelRatio || 1;
  // Lookup the size the browser is displaying the canvas in CSS pixels
  // and compute a size needed to make our drawingbuffer match it in
  // device pixels.
  var displayWidth  = Math.floor(canvas.clientWidth  * cssToRealPixels);
  var displayHeight = Math.floor(canvas.clientHeight * cssToRealPixels);

  // Check if the canvas is not the same size.
  if (canvas.width !== displayWidth ||
      canvas.height !== displayHeight) {

    // Make the canvas the same size
    canvas.width  = displayWidth;
    canvas.height = displayHeight;
  }

  this.rootSceneNavigationController.topSceneController.scene.width = canvas.width / cssToRealPixels;
  this.rootSceneNavigationController.topSceneController.scene.height = canvas.height / cssToRealPixels;

  this.rootSceneNavigationController.sceneControllers.forEach(element => {
    element.sceneDidResize();
  });
  this.masterRenderer.updatePixelRatio(cssToRealPixels);
  this.masterRenderer.updateAspectRatio(canvas.width, canvas.height);
  // Update the projection matrix in RayCaster
  this.rayCaster.projectionMatrix = this.masterRenderer.projectionMatrix;
}
}