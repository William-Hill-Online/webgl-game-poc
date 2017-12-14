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

import { ShadingProgram2d } from '../shaders/shading.program.2d';
import { Scene } from '../../UI/scene';
import { SpriteBatch } from '../sprite.batch';

/// Class responsible for rendering sprites
export class SpriteRenderer {
 private spriteBatch: SpriteBatch;
 constructor(private shadingProgram: ShadingProgram2d, private glContext: WebGLRenderingContext) {
  this.spriteBatch = new SpriteBatch(shadingProgram, this.glContext);
 }

 updatePixelRatio(ratio: number) {
  this.spriteBatch.updatePixelRatio(ratio);
 }

 /// Renders scene's sprites
 render(scene: Scene) {
  this.spriteBatch.begin();
   scene.layers.forEach(layer => { 
      layer.sprites.forEach(item => {
        this.spriteBatch.draw(item);
      });
    });
  this.spriteBatch.flush(); 
 }
}