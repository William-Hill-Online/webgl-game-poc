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

import { Object3D } from "../rendering/objects/object3d";
import { Vector3 } from "../math/vector3";
import { Player } from "./player";
import { MathHelper } from '../math/math.helper';

export class Enemy {
    watchRadius = 10;
    attackRadius = 3;
    attackDelay = 1; //in seconds
    timeLeftToAttack = 0;

    constructor(public movementSpeed: number, public sceneObject: Object3D) {
        sceneObject.speed = movementSpeed;
    }

    update(dt: number) {
        const player = this.sceneObject.scene.player;
        const playerPos = player.sceneObject.position;

        let isInRange = (Math.pow(this.sceneObject.position.x - playerPos.x, 2) + Math.pow(this.sceneObject.position.z - playerPos.z, 2)) < Math.pow(this.watchRadius, 2);

        if(isInRange) {
            let xOffset = playerPos.x - this.sceneObject.position.x;
            let zOffset = playerPos.z - this.sceneObject.position.z;

            if (zOffset != 0) {
                let angle = zOffset / xOffset;
                var rotation = MathHelper.radToDeg(Math.atan(angle));

                rotation = 90 - rotation;
                
                if (playerPos.x < this.sceneObject.position.x) {
                    rotation = -180 + rotation;
                }

                this.sceneObject.rotation = new Vector3(-90, 0, rotation);
            }
            this.sceneObject.setTarget(new Vector3(playerPos.x, this.sceneObject.position.y, playerPos.z));
            this.sceneObject.position.print();
        } else {
            this.sceneObject.setTarget(null);
        }
        this.timeLeftToAttack -= dt;
        if(this.timeLeftToAttack < 0 ){
            this.timeLeftToAttack = 0;
        }
    }
}
