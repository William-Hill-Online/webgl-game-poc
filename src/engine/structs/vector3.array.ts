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

import { Vector3 } from '../math/vector3';

export class Vector3Array {
    private array: number[] = [];

    constructor(array: number[]) {
        this.array = array;
    }

    add(vector3Array: Vector3Array) {
        vector3Array.data.forEach(element => {
            this.array.push(element);
        });
    }

    append(newArray: Vector3[]) {
        newArray.forEach(item => {
            this.push(item);
        });
    }

    push(vector: Vector3) {
     this.array.push(vector.x);
     this.array.push(vector.y);
     this.array.push(vector.z);
    }
   
    clear() {
        this.array = [];
    }

    get count(): number {
        return this.array.length;
    }

    print () {
        this.array.forEach(element => {
            console.log(element);
        });
    }
   
    get data(): number[] {
     return this.array;
    }
   }