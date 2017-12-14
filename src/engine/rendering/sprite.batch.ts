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

import { Sprite } from './sprite';
import { Vector2 } from '../math/vector2';
import { Vector2Array } from '../structs/vector2.array';
import { ShadingProgram2d, ShadingProgram2dLocations } from './shaders/shading.program.2d';
import { Texture } from './texture';

export class SpriteBatch {
 private vertexBuffer: WebGLBuffer;
 private textureBuffer: WebGLBuffer;
 private vertices: Vector2Array;
 private textCoords: Vector2Array;
 private vertexCount = 0;
 private pixelRatio = 1;
 private currentTexture: Texture;

 constructor(private shadingProgram: ShadingProgram2d, private glContext: WebGLRenderingContext){
  this.vertexBuffer = glContext.createBuffer();
  this.textureBuffer = glContext.createBuffer();
  this.vertices = new Vector2Array([]);
  this.textCoords = new Vector2Array([]);
 }

 /// Binds vertex buffer as current buffer
 begin() {
  this.currentTexture = null;
  this.vertexCount = 0;
  this.vertices.clear();
  this.textCoords.clear();
  // turn on depth testing
  this.glContext.disable(this.glContext.DEPTH_TEST);
  this.glContext.disable(this.glContext.CULL_FACE);
 }

 /// Adds a single sprite to draw batch
 draw(sprite: Sprite) {
 if (this.currentTexture == null) {
    this.currentTexture = sprite.texture;
 }

   // if different texture is used for rendering - flush the content on to the screen
  if (this.currentTexture != sprite.texture) {
    this.flush();
    this.begin();
  }

  let f = sprite.frame;

  let v1 = new Vector2(f.x * this.pixelRatio, f.y * this.pixelRatio);
  let v2 = new Vector2(f.right * this.pixelRatio, f.y * this.pixelRatio);
  let v3 = new Vector2(f.x * this.pixelRatio, f.bottom * this.pixelRatio);
  let v4 = v2;
  let v5 = new Vector2(f.right * this.pixelRatio, f.bottom * this.pixelRatio);
  let v6 = v3;

  this.vertices.push(v1);
  this.vertices.push(v2);
  this.vertices.push(v3);
  this.vertices.push(v4);
  this.vertices.push(v5);
  this.vertices.push(v6);

  let t1 = new Vector2(0, 0);
  let t2 = new Vector2(1, 0);
  let t3 = new Vector2(0, 1);
  let t4 = t2;
  let t5 = new Vector2(1, 1);
  let t6 = t3;

  this.textCoords.push(t1);
  this.textCoords.push(t2);
  this.textCoords.push(t3);
  this.textCoords.push(t4);
  this.textCoords.push(t5);
  this.textCoords.push(t6);

  this.vertexCount += 6;
 }

/// Flushes the data to the GPU
 flush() {
  this.glContext.bindTexture(this.glContext.TEXTURE_2D, this.currentTexture.address);
  // Set the program shader as current program
  this.shadingProgram.useProgram();
  // setup vertices
  // set the shader attribute
  let resolutionUniformLocation = this.shadingProgram.getLocation(ShadingProgram2dLocations.RESOLUTION);

  // Pass in the canvas resolution so we can convert from
    // pixels to clipspace in the shader
  this.glContext.uniform2f(resolutionUniformLocation, 
                           this.glContext.canvas.width, 
                           this.glContext.canvas.height);
  
  // Bind the current buffer
  this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, 
                            this.vertexBuffer);

  // Pass down the buffer data
  this.glContext.bufferData(this.glContext.ARRAY_BUFFER, 
                            new Float32Array(this.vertices.data),
                            this.glContext.STATIC_DRAW);

  // Enable attribute location
  let positionLocation = this.shadingProgram.getLocation(ShadingProgram2dLocations.POSITION);
  this.glContext.enableVertexAttribArray(positionLocation);

  // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  var size = 2;                      // 2 components per iteration
  var type = this.glContext.FLOAT;   // the data is 32bit floats
  var normalize = false;             // don't normalize the data
  var stride = 0;                    // 0 = move forward size * sizeof(type) each iteration to get the next position
  var offset = 0;                    // start at the beginning of the buffer

  this.glContext.vertexAttribPointer(positionLocation, size, type, normalize, stride, offset);

  // Handle textures
  let textureLocation = this.shadingProgram.getLocation(ShadingProgram2dLocations.TEXTURE_COORDINATES);

  // Bind the texture buffer
  this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, 
                            this.textureBuffer);

// Pass down the buffer data
this.glContext.bufferData(this.glContext.ARRAY_BUFFER, 
    new Float32Array(this.textCoords.data),
    this.glContext.STATIC_DRAW);

  this.glContext.enableVertexAttribArray(textureLocation);
  this.glContext.vertexAttribPointer(textureLocation, 
                                    size, 
                                    type, 
                                    normalize, 
                                    stride, 
                                    offset);
  this.glContext.drawArrays(this.glContext.TRIANGLES, offset, this.vertexCount);

  // disable attribute locations
  this.glContext.disableVertexAttribArray(positionLocation);
  this.glContext.disableVertexAttribArray(textureLocation);
 }

 updatePixelRatio(ratio: number) {
  this.pixelRatio = ratio;
 }
}