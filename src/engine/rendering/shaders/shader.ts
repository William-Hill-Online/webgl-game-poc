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

/// Class responsible for holding shader data
export class Shader {
 private constructor(readonly shaderId: WebGLShader) {}
 /// Creates shader from the given source
 static createFromSource?(glContext: WebGLRenderingContext, source: string, type: number): Shader {

  // create shader object
  let shader = glContext.createShader(type);

  // Load the shader source
  glContext.shaderSource(shader, source);
  
  // Compile the shader
  glContext.compileShader(shader);
  
  // Check the compile status
  var compiled = glContext.getShaderParameter(shader, glContext.COMPILE_STATUS);
  if (!compiled) {
    // Something went wrong during compilation; get the error
    var lastError = glContext.getShaderInfoLog(shader);
    glContext.deleteShader(shader);
    console.log(lastError);
    return null;
  }
  return new Shader(shader);
 }
}