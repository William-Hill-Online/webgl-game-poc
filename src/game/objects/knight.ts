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

import { Object3D } from '../../engine/rendering/objects/object3d';
import { Point3D } from '../../engine/math/point3d';
import { SharedGeometry } from '../../engine/rendering/objects/shared.geometry';
import { SharedTextures } from '../../engine/rendering/shared.textures';
import { Vector3 } from '../../engine/math/vector3';
import { Vector2 } from '../../engine/math/vector2';
import { BoxCollider } from '../../engine/physics/boxCollider';

export class Knight extends Object3D {
    onInit() {
        this.model = SharedGeometry.Instance.modelForName("knight");
        this.texture = SharedTextures.Instance.getTexture("knight");
        this.collider = new BoxCollider(new Vector3(0, -0.5, 0), new Vector2(2, 2));
    }
}