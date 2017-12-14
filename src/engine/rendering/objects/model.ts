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

import { Vector3Array } from '../../structs/vector3.array';
import { Vector2Array } from '../../structs/vector2.array';
import { ModelBufferInfo } from './model.buffer.info';
import { Texture } from '../texture';

export class Model {
    constructor(public vertices: Vector3Array = new Vector3Array([]), 
                public indices: Vector3Array = new Vector3Array([]),
                public normals: Vector3Array = new Vector3Array([]),
                public colors: Vector3Array = new Vector3Array([]),
                public textureCoordinates: Vector2Array = new Vector2Array([])) {
    }

    get indicesCount(): number {
        return this.indices.data.length;
    }
    modelBufferInfo: ModelBufferInfo = new ModelBufferInfo();
}