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

#version 300 es
 
 // an attribute is an input (in) to a vertex shader.
 // It will receive data from a buffer
 in vec4 a_position;
 in vec2 a_texcoord;
 
 // A matrix to transform the positions by
 uniform mat4 u_matrix;
 
 // a varying to pass the texture coordinates to the fragment shader
 out vec2 v_texcoord;
 
 // all shaders have a main function
 void main() {
   // Multiply the position by the matrix.
   gl_Position = u_matrix * a_position;

   // Pass the texcoord to the fragment shader.
   v_texcoord = vec2(a_texcoord.x, 1.0 - a_texcoord.y);
 }