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

/// Class responsible for handing texture data
export class Texture {
constructor(private textureId: WebGLTexture) {} // the address of the texture data
// Returns texture address
get address(): WebGLTexture {
  return this.textureId;
}
static createTextureFromImage(glContext: WebGLRenderingContext, image: any): Texture {
  var texture = glContext.createTexture(); // Create a texture
  glContext.bindTexture(glContext.TEXTURE_2D, texture); // Bind the texture
 

  // Set the parameters so we don't need mips and so we're not filtering
  // and we don't repeat
  glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
  glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
  glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
  glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
    // Upload the image into the texture.
    var mipLevel = 0;               // the largest mip
    var internalFormat = glContext.RGBA;   // format we want in the texture
    var srcFormat = glContext.RGBA;        // format of data we are supplying
    var srcType = glContext.UNSIGNED_BYTE  // type of data we are supplying
    glContext.texImage2D(glContext.TEXTURE_2D,
                  mipLevel,
                  internalFormat,
                  srcFormat,
                  srcType,
                  image);
  glContext.bindTexture(glContext.TEXTURE_2D, null); // Undbind the texture
  return new Texture(texture);
  }
}