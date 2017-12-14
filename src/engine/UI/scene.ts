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

import { Layer } from '../UI/layer';
import { Object3D } from '../rendering/objects/object3d';
import { Player } from '../entities/player';
import { Enemy } from '../entities/enemy';
import { Vector3 } from '../math/vector3';
import { Camera } from '../rendering/camera';

/// Class responsible for managing objects and layers within single logical container
export class Scene {    
 private _layers: Layer[] = []; // All layer that were added to the scene
 private _objects3D: Object3D[] = []; // All 3d objects placed in the scene
 private _enemies: Enemy[] = [];
 private _player: Player;
 camera: Camera;
 width: number;
 height: number;
 
 constructor() {
    let pos = new Vector3(15, 20, 15);
    let up = new Vector3(0, 1, 0);
    let target = new Vector3(0, 0, 0);
    this.camera = new Camera(pos, target, up);
 }

 /// Returns all layers added to this scene
 get layers(): Layer[] {
  return this._layers;
 }
 /// Returns all 3d objects added to this scene
 get objects3D(): Object3D[] {
  return this._objects3D;
 }

 get enemies(): Enemy[] {
    return this._enemies;
}
  
 get player(): Player {
     return this._player;
 }
 /// Adds new layer to the scene
 addLayer(layer: Layer) {
  this._layers.push(layer);
 }
 /// Add 3d object to the scene
 addObject3D(object: Object3D) {
  object.scene = this;
  this._objects3D.push(object);
 }

 setPlayer(player: Player) {
    this.addObject3D(player.sceneObject);
    this._player = player;
 }

 addEnemy(enemy: Enemy) {
    this.addObject3D(enemy.sceneObject);
    this._enemies.push(enemy);
 }
}