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

import { Vector2 } from '../math/vector2';

export class Vector2Array {
 private array: number[] = [];
 
 constructor(array: number[]) {
    this.array = array;
}

 push(vector: Vector2) {
  this.array.push(vector.x);
  this.array.push(vector.y);
 }

 add(vector2Array: Vector2Array) {
    vector2Array.data.forEach(element => {
        this.array.push(element);
    });
}

 append(newArray: Vector2[]) {
    newArray.forEach(item => {
        this.push(item);
    });
}

 clear() {
  this.array = [];
 }

 print () {
    this.array.forEach(element => {
        console.log(element);
    });
}
    get count(): number {
        return this.array.length;
    }

 get data(): number[] {
  return this.array;
 }
}