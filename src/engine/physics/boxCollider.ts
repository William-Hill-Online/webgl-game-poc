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

import {Collider} from "./collider";
import {Vector3} from "../math/vector3";
import {Vector2} from "../math/vector2";
import {Rectangle} from "../rendering/rectangle";

export class BoxCollider implements Collider {
    get rect(): Rectangle {
        return this._rect;
    }
    // In local coordinates
    // Pivot is at the center of the object
    private _rect: Rectangle;
    constructor(localPosition: Vector3, size: Vector2) {
        this._rect = Rectangle.fromMiddlePoint(localPosition, size);
    }
}