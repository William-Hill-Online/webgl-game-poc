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

import { Sprite } from '../../engine/rendering/sprite';

/// Class responsible for managing a group of 2D sprites.
export class Layer {
private _sprites: Sprite[] = [];

/// Returns all sprites added to this layer.
get sprites(): Sprite[] {
 return this._sprites;
}
/// Adds new sprite to the scene
addSprite(sprite: Sprite) {
 this._sprites.push(sprite);
}
}