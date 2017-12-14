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

export class Vector2 {
 constructor(public x: number, public y: number) {}

 static zero(): Vector2 {
    return new Vector2(0, 0);
   }

    /// Returns the length of the given Vector2
 static vectorLength(v: Vector2): number {
  return Math.sqrt(v.x * v.x + v.y * v.y);
 }

/// Returns the normalized Vector2
static normalize(v: Vector2): Vector2 {
 let l = Math.abs(Vector2.vectorLength(v));
 return new Vector2(v.x / l, v.y / l);
}
}