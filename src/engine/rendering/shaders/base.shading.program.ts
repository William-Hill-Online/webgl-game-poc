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

import { Shader } from './shader';
import { Program } from './program';

export abstract class BaseShadingProgram {
 protected program: Program;

 protected get programId(): WebGLProgram {
  return this.program.programId;
 }
 /// Uses the program
 useProgram() {
  return this.glContext.useProgram(this.program.programId);
 }

 constructor(protected glContext: WebGLRenderingContext, vertexShaderSource: string, fragmentShaderSource: string) {
  let vs = Shader.createFromSource(glContext, vertexShaderSource, this.glContext.VERTEX_SHADER);
  if (vs == null) { throw "Vertex shader is empty!"; }

  let fs = Shader.createFromSource(glContext, fragmentShaderSource, this.glContext.FRAGMENT_SHADER);
  if (fs == null) { throw "Fragment shader is empty!"; }
  this.program = Program.createProgram(glContext, vs, fs);
  if (this.program == null) { throw "Program is empty!"; }

  this.setupLocations();
 }

 setupLocations() {}
 }