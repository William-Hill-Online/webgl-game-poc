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

import { Layer } from './layer';
import { Scene } from './scene';
import { Touch } from './touch';
import { SceneNavigationController } from './scene.navigation.controller';
import { Point } from '../math/point';
import { Vector3 } from '../math/vector3';
import { RayCaster } from '../rendering/ray.caster';
/// Class responsible for containing all game objects and logic for a single scene (e.g. menu, or game map)
export class SceneController {
 rayCaster: RayCaster;
 sceneNavigationController: SceneNavigationController; // Scene navigation controller containing all the pushed scene controllers.
 scene: Scene;

 constructor() {
  this.scene = new Scene();
 }

 get layers(): Layer[] {
  return this.scene.layers;
 }

 sceneDidLoad() {}
 sceneDidResize() {}
 update() {}

 touchesBegan(touch: Touch) {
  // Loop though all sprites and look if any of them was tapped
  this.layers.forEach(layer => {
   layer.sprites.forEach(sprite => {
    if (sprite.frame.isPointInside(new Point(touch.x, touch.y)) ) {
     if (sprite.tapAction != null) {
      sprite.tapAction();
     }
    }
   });
  });
 }
}