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

export enum ShadingProgram2dLocations {
 POSITION,
 TEXTURE_COORDINATES,
 RESOLUTION
}
export class ShadingProgram2d extends BaseShadingProgram {
 private positionAttributeLocation: number;
 private textureCoordinatesAttributeLocation: number;
 private resolutionUniformLocation: WebGLUniformLocation;

 getLocation(location: ShadingProgram2dLocations): any {
  switch (location) {
   case ShadingProgram2dLocations.POSITION:
   return this.positionAttributeLocation;
   case ShadingProgram2dLocations.TEXTURE_COORDINATES:
   return this.textureCoordinatesAttributeLocation;
   case ShadingProgram2dLocations.RESOLUTION:
   return this.resolutionUniformLocation;
  }
 }
 setupLocations() {
  this.resolutionUniformLocation           = this.glContext.getUniformLocation(this.programId, "u_resolution");
  this.textureCoordinatesAttributeLocation = this.glContext.getAttribLocation (this.programId, "a_texcoord");
  this.positionAttributeLocation           = this.glContext.getAttribLocation (this.programId, "a_position");
 }
}