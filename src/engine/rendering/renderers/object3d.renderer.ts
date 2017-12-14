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

import { ShadingProgram3d, ShadingProgram3dLocations } from '../shaders/shading.program.3d';
import { Scene } from '../../UI/scene';
import { Vector3 } from '../../math/vector3'; // TODO: to delete
import { Vector3Array } from '../../structs/vector3.array';
import { Matrix4x4 } from '../../math/matrix_4x4';
import { MathHelper } from '../../math/math.helper';

/// Class responsible for rendering 3d objects
export class Object3dRenderer {
 private _projectionMatrix: number[] = [];
 private fieldOfViewRadians: number;

 get projectionMatrix(): number[] {
  return this._projectionMatrix;
 }

 constructor(private shadingProgram: ShadingProgram3d, private glContext: WebGLRenderingContext) {
  this._projectionMatrix = Matrix4x4.identity();
  this.fieldOfViewRadians = MathHelper.degToRad(60);
 }

 updateProjectionMatrix(width: number, height: number) {
  this._projectionMatrix = Matrix4x4.perspective(this.fieldOfViewRadians, width / height, 1, 2000);
 }

 render(scene: Scene) {
  this.glContext.enable(this.glContext.DEPTH_TEST); // turn on depth testing
  this.glContext.enable(this.glContext.CULL_FACE); // tell webgl to cull faces

  this.shadingProgram.useProgram();

  scene.objects3D.forEach(obj => {
   let textureAddress = obj.texture.address;
   this.glContext.bindTexture(this.glContext.TEXTURE_2D, textureAddress);

   let model = obj.model;
   let positionLocation = this.shadingProgram.getLocation(ShadingProgram3dLocations.POSITION);
   let matrixLocation   = this.shadingProgram.getLocation(ShadingProgram3dLocations.MATRIX);
   let textureLocation  = this.shadingProgram.getLocation(ShadingProgram3dLocations.TEXTURE);

   this.glContext.bindBuffer(this.glContext.ELEMENT_ARRAY_BUFFER, model.modelBufferInfo.indiciesBufferInfo.glBuffer);

   // Tell WebGL how to pull out the positions from the position
   // buffer into the vertexPosition attribute 
   let vertsOffset = model.modelBufferInfo.verticesBufferInfo.offset;
   this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, model.modelBufferInfo.verticesBufferInfo.glBuffer);
   this.glContext.vertexAttribPointer(positionLocation, 3, this.glContext.FLOAT, false, 0, vertsOffset * 4); // * 4 - is the size of float
   this.glContext.enableVertexAttribArray(positionLocation);

   // Texture
   let textOffset = model.modelBufferInfo.textureBufferInfo.offset;
   this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, model.modelBufferInfo.textureBufferInfo.glBuffer);
   this.glContext.vertexAttribPointer(textureLocation, 2, this.glContext.FLOAT, false, 0, textOffset * 4); // * 4 - is the size of float
   this.glContext.enableVertexAttribArray(textureLocation);
   
   let viewMatrix = scene.camera.viewMatrix;
   var MVP = Matrix4x4.multiply(this._projectionMatrix, viewMatrix);
   
   let pos = obj.position;
   MVP = Matrix4x4.translate(MVP, pos.x, pos.y, pos.z);
   MVP = Matrix4x4.xRotate(MVP, MathHelper.degToRad(obj.rotation.x));
   MVP = Matrix4x4.yRotate(MVP, MathHelper.degToRad(obj.rotation.y));
   MVP = Matrix4x4.zRotate(MVP, MathHelper.degToRad(obj.rotation.z));

   let scale = obj.scale;
   MVP = Matrix4x4.scale(MVP, scale.x, scale.y, scale.z);
   // Compute a view projection matrix
   this.glContext.uniformMatrix4fv(matrixLocation, false, MVP);
   // Draw the geometry.
   let primitiveType = this.glContext.TRIANGLES;
   let offset = model.modelBufferInfo.indiciesBufferInfo.offset;
   let vertexCount = model.indicesCount;
   let type = this.glContext.UNSIGNED_SHORT;

   this.glContext.drawElements(this.glContext.TRIANGLES, vertexCount, type, offset * 2); // * 2 - is size of unsigned short
 });
 }
}