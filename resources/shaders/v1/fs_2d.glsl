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

 // Passed in from the vertex shader.
 varying highp vec2 v_texcoord;
  
 // The texture.
 uniform sampler2D u_texture;
 
 void main() {
 	gl_FragColor = texture2D(u_texture, v_texcoord);
 }