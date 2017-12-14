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

import { Object3D } from '../rendering/objects/object3d';
import { Vector3 } from "../math/vector3";

export class Player {
    sceneObject: Object3D;

    update(dt: number) {}

    movePlayerToLocation(x: number, z: number) {
        this.sceneObject.setTarget(new Vector3(x, 0, z));
    }
}

