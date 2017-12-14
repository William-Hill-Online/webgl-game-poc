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

import {Rectangle} from "../rendering/rectangle";
import {Object3D} from "../rendering/objects/object3d";
import {BoxCollider} from "./boxCollider";
import {Vector3} from "../math/vector3";
import {Cube} from "../rendering/dummy/cube";
import { Player } from "../entities/player";
import { Vector2 } from "../math/vector2";
import { Point } from "../math/point";

export class Physics{
    public static rectOverlap(r1:Rectangle, r2:Rectangle): boolean {
        if (Math.max(r1.x, r1.x + r1.width) < Math.min(r2.x, r2.x + r2.width)) return false;
        if (Math.min(r1.x, r1.x + r1.width) > Math.max(r2.x, r2.x + r2.width)) return false;
        if (Math.max(r1.y, r1.y + r1.height) < Math.min(r2.y, r2.y + r2.height)) return false;
        if (Math.min(r1.y, r1.y + r1.height) > Math.max(r2.y, r2.y + r2.height)) return false;
        return true;
    }

    static checkForCollisions(current: Object3D, objects: Object3D[]): boolean {
        if(!current.collider){
            return false;
        }

        let isColliding = false;

        let colliderRect = (current.collider as BoxCollider).rect;
        let boundingBox = colliderRect.transformAroundPoint(new Point(current.position.x, current.position.z));

        objects.forEach(element => {
            if (current != element && element.collider != null) { //do not check collison with self
                let otherCollidingRect = (element.collider as BoxCollider).rect;
                let otherBox = colliderRect.transformAroundPoint(new Point(element.position.x, element.position.z));

                if (Physics.rectOverlap(boundingBox, otherBox)) {
                    isColliding = true;
                }
            }
        });

        // const mid1 = (current.collider as BoxCollider).rect.middle;
        // const coll1 = current.collider as BoxCollider;
        // const gridPoint1 = this.worldPointToGridPoint(current.localToWorld(this.gridPointToWorldPoint(mid1)));
        // const rc1 = Rectangle.fromMiddlePoint(gridPoint1,coll1.rect.size );
        // objects.forEach(other => {
        //     if(other !== current && other.collider && other.collider instanceof BoxCollider) {
        //         if(other instanceof Cube) {
        //             const coll2 = other.collider as BoxCollider;
        //             const mid2 = coll2.rect.middle;
        //             const gridPoint2 = this.worldPointToGridPoint(other.localToWorld(this.gridPointToWorldPoint(mid2)));
        //             const rc2 = Rectangle.fromMiddlePoint(gridPoint2, coll2.rect.size);
        //             if (Physics.rectOverlap(rc1, rc2)) {
        //                 isColliding = true;
        //             }
        //         }
        //     }
        // });
        return isColliding;
    }

    static worldPointToGridPoint(pt: Vector3): Vector2 {
        return new Vector2(pt.x, pt.z);
    }

    static gridPointToWorldPoint(pt: Vector2): Vector3 {
        return new Vector3(pt.x, 0, pt.y);
    }
}