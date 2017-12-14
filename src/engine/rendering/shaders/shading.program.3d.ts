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

import { BaseShadingProgram } from './base.shading.program';

export enum ShadingProgram3dLocations {
 POSITION,
 TEXTURE,
 MATRIX
}
export class ShadingProgram3d extends BaseShadingProgram {
 private positionAttributeLocation: number;
 private textureAttributeLocation: number;
 private matrixUniformLocation: WebGLUniformLocation;

 getLocation(location: ShadingProgram3dLocations): any {
  switch (location) {
   case ShadingProgram3dLocations.POSITION:
   return this.positionAttributeLocation;
   case ShadingProgram3dLocations.TEXTURE:
   return this.textureAttributeLocation;
   case ShadingProgram3dLocations.MATRIX:
   return this.matrixUniformLocation;
  }
 }

 setupLocations() {
  this.positionAttributeLocation = this.glContext.getAttribLocation (this.programId, "a_position");
  this.textureAttributeLocation    = this.glContext.getAttribLocation (this.programId, "a_texcoord");
  this.matrixUniformLocation     = this.glContext.getUniformLocation(this.programId, "u_matrix");
 }
}