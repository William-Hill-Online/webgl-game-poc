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

import { SpriteRenderer } from './sprite.renderer';
import { Object3dRenderer } from './object3d.renderer';
import { ShadingProgram2d } from '../shaders/shading.program.2d';
import { ShadingProgram3d } from '../shaders/shading.program.3d';
import { Scene } from '../../UI/scene';
import { Point3D } from '../../math/point3d';
/// Class responsible for rendering 
export class MasterRenderer {
 private spriteRenderer: SpriteRenderer;
 private object3dRender: Object3dRenderer;

 constructor(private glContext: WebGLRenderingContext, 
             private shadingProgram2d: ShadingProgram2d, 
             private shadingProgram3d: ShadingProgram3d) {
  this.spriteRenderer = new SpriteRenderer(shadingProgram2d, glContext);
  this.object3dRender = new Object3dRenderer(shadingProgram3d, glContext);
 }

 updateAspectRatio(width: number, height: number) {
  this.glContext.viewport(0, 0, width, height);
  this.object3dRender.updateProjectionMatrix(width, height);
 }

 updatePixelRatio(ratio: number) {
  this.spriteRenderer.updatePixelRatio(ratio);
 }

 get projectionMatrix(): number[] {
  return this.object3dRender.projectionMatrix
 }
 /// Renders the scene
 render(scene: Scene) {
  this.object3dRender.render(scene);
  this.spriteRenderer.render(scene);
 }
}