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
 
 precision mediump float;
 
 uniform vec4 u_color;
 // Passed in from the vertex shader.
 in vec2 v_texcoord;
  
 // The texture.
 uniform sampler2D u_texture;
 
 // we need to declare an output for the fragment shader
 out vec4 outColor;
 
 void main() {
    outColor = texture(u_texture, v_texcoord);
 }