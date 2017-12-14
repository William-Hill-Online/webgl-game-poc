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

import { Model } from './model';
import { Point3D } from '../../math/point3d';
import { Collider } from "../../physics/collider";
import { Vector3 } from "../../math/vector3";
import { Scene } from "../../UI/scene";
import { Physics } from '../../../engine/physics/physics';
import { Texture } from '../texture';

/// Class responsible for managing 3d scene object
export class Object3D {
    texture: Texture = null
    model: Model;
    collider: Collider;
    scene: Scene;
    target: Vector3;
    speed = 10;

    constructor(public position: Vector3 = Vector3.zero, 
                public rotation: Vector3 = Vector3.zero, 
                public scale: Vector3 = new Vector3(1, 1, 1)) {
                    this.onInit();
                }
    onInit() {

    }

    setTarget(pos: Vector3) { this.target = pos; }
    localToWorld(pt: Vector3): Vector3 { //TODO: rotations & scale
        return Vector3.add(pt, this.position);
    }

    update(dt: number) {

        if(this.target) {
          const diff = Vector3.subtract(this.target, this.position);
          const dir = Vector3.normalize(diff);
          let velocity = Vector3.mul(Vector3.mul(dir,this.speed), dt);
          if(Vector3.vectorLength(diff) < Vector3.vectorLength(velocity)){
            velocity = diff;
            this.target = null;
          }
          const prevPosition = this.position;
          this.position = Vector3.add(this.position, velocity);
          
          if(Physics.checkForCollisions(this, this.scene.objects3D)){
            this.position = prevPosition;
            this.target = null;
          }
        }
      }
}