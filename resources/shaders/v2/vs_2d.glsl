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
 in vec2 a_position;
 in vec2 a_texcoord;
 // Used to pass in the resolution of the canvas
 uniform vec2 u_resolution;
 // a varying to pass the texture coordinates to the fragment shader
 out vec2 v_texcoord;
 
 // all shaders have a main function
 void main() {
   // pass down the position
   v_texcoord = a_texcoord;

   // convert the position from pixels to 0.0 to 1.0
   vec2 zeroToOne = a_position / u_resolution;
 
   // convert from 0->1 to 0->2
   vec2 zeroToTwo = zeroToOne * 2.0;
 
   // convert from 0->2 to -1->+1 (clipspace)
   vec2 clipSpace = zeroToTwo - 1.0;
 
   gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
 }