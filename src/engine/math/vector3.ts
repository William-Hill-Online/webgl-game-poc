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

export class Vector3 {
 constructor(public x: number, public y: number, public z: number) {}

 /// Returns new Vector3 as a result of substraction. Substracts v2 from v1
 static subtract(v1: Vector3, v2: Vector3): Vector3 {
  return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
 }

 static get zero(): Vector3 {
  return new Vector3(0, 0, 0);
 }

 static dot(v1: Vector3, v2: Vector3): number {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
 }

 static distance(v1: Vector3, v2: Vector3): number {
    return this.vectorLength(this.subtract(v1,v2));
 }

 /// Returns the length of the given Vector3
 static vectorLength(v: Vector3): number {
    return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
   }

 /// Returns the normalized Vector3
 static normalize(v: Vector3): Vector3 {
  let l = Math.abs(Vector3.vectorLength(v));
  return new Vector3(v.x / l, v.y / l, v.z / l);
 }

 print() {
  console.log("Printing Vector3" + " x:" + this.x + " y: " + this.y + " z: " + this.z);
 }

 static cross(v1: Vector3, v2: Vector3): Vector3 {
  return new Vector3(
   v1.y * v2.z - v1.z * v2.y,
   v1.z * v2.x - v1.x * v2.z,
   v1.x * v2.y - v1.y * v2.x
  );
 }

 static add(v1: Vector3, v2:Vector3): Vector3{
     return new Vector3(
         v1.x+v2.x,
         v1.y+v2.y,
         v1.z+v2.z
     );
 }

 static mul(v: Vector3, val: number): Vector3{
     return new Vector3(
         v.x * val,
         v.y * val,
         v.z * val
     );
 }
}
