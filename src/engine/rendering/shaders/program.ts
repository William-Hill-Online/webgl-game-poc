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

/// Class responsible for handling WebGL program.
export class Program {
 private constructor(readonly programId: WebGLProgram) {}

 /// Creates WebGL program from the given shaders
 static createProgram?(glContext: WebGLRenderingContext, 
                       vertexShader: Shader, 
                       fragmentShader: Shader): Program {
  
  // Create empty program
  let program = glContext.createProgram();

  // Attach shaders to the program
  glContext.attachShader(program, vertexShader.shaderId);
  glContext.attachShader(program, fragmentShader.shaderId);

  // Link program
  glContext.linkProgram(program);

  // Check the link status
  let linked = glContext.getProgramParameter(program, glContext.LINK_STATUS);
  if (!linked) {
      // something went wrong with the link
      var lastError = glContext.getProgramInfoLog(program);
      console.log("Error in program linking:" + lastError);

      glContext.deleteProgram(program);
      return null;
  }

  // Shaders are not needed any more - detach them 
  // Normally they should be detached but there is problem in Safari. For now, detachement is commented out
  //glContext.detachShader(program, fragmentShader.shaderId);
  //glContext.detachShader(program, vertexShader.shaderId);

  return new Program(program);
 }
}