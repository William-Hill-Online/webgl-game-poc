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

import { SceneController } from '../engine/UI/scene.controller';

import { Touch } from '../engine/UI/touch';
import { Layer } from '../engine/UI/layer';
import { Sprite } from '../engine/rendering/sprite';
import { Rectangle } from '../engine/rendering/rectangle';
import { Grass } from './objects/grass';
import { Cube } from '../engine/rendering/dummy/cube';
import { Ray } from '../engine/rendering/ray.caster';
import { Point3D } from '../engine/math/point3d';
import { Point } from '../engine/math/point';
import { BoxCollider } from "../engine/physics/boxCollider";
import { Physics } from "../engine/physics/physics";
import { Vector2 } from "../engine/math/vector2";
import { Vector3 } from "../engine/math/vector3";
import { Player } from '../engine/entities/player';
import { Enemy } from '../engine/entities/enemy';
import { Knight } from './objects/knight';
import { KnightEnemy } from './objects/knight.enemy';
import { Crate } from './objects/crate';
import { Matrix4x4 } from '../engine/math/matrix_4x4';
import { MathHelper } from '../engine/math/math.helper';
import { Banner } from './UI/banner';

class LogicPlane {
  constructor(public normal = Vector3.zero, public d = 0) { }
}

export class GameSceneController extends SceneController {
  worldBounds: Rectangle = new Rectangle(50, 50, 200, 200);
  player: Player;
  enemy: Enemy;
  knight = new Knight(new Vector3(100, 0, 100));
  knightEnemy = new KnightEnemy(new Vector3(50, 0, 50));

  cameraOriginalLocation = Vector3.zero;

  sceneDidLoad() {
    super.sceneDidLoad();

    let banner = new Banner(new Rectangle(0,0, 200, 25));
    let layer = new Layer();

    layer.addSprite(banner);
    this.scene.addLayer(layer);

    // save intial camera location for futher use
    this.cameraOriginalLocation = this.scene.camera.position;
    
    let plane = new Grass();
    plane.position = new Vector3(-100, 0, -100);
    this.scene.addObject3D(plane);

    this.player = new Player();
    this.player.sceneObject = this.knight;

    this.enemy = new Enemy(8, this.knightEnemy);

    this.scene.addEnemy(this.enemy);
    this.scene.setPlayer(this.player);

    this.scene.addObject3D(new Crate(new Vector3(80, 1, 60)));
    this.scene.addObject3D(new Crate(new Vector3(120, 1, 80)));
    this.scene.addObject3D(new Crate(new Vector3(150, 1, 75)));
    this.scene.addObject3D(new Crate(new Vector3(70, 1, 107)));
    this.scene.addObject3D(new Crate(new Vector3(80, 1, 109)));
    this.scene.addObject3D(new Crate(new Vector3(40, 1, 60)));
    this.scene.addObject3D(new Crate(new Vector3(90, 1, 90)));
    this.scene.addObject3D(new Crate(new Vector3(110, 1, 110)));

    this.knight.rotation.x = -90;
    this.knight.scale = new Vector3(0.1, 0.1, 0.1);

    this.knightEnemy.rotation.x = -90;
    this.knightEnemy.scale = new Vector3(0.1, 0.1, 0.1);
  }

  touchesBegan(touch: Touch) {
    super.touchesBegan(touch);

    let directionVector: Ray = this.rayCaster.currentRay(new Point(touch.x, touch.y));
    let plane = new LogicPlane(new Vector3(0, 10, 0), 0);
    let intersection = this.intersect(directionVector, plane);
    if (intersection != null) {

      //update player rotation
      let playerPos = this.player.sceneObject.position;
      let xOffset = playerPos.x - intersection.x;
      let zOffset = playerPos.z - intersection.z;
      
      if (zOffset != 0) {
        let angle = zOffset / xOffset;
        let rotation = MathHelper.radToDeg(Math.atan(angle));

        var targetRotation = -90 - rotation;

        if (playerPos.x < intersection.x) {
          targetRotation = 90 - rotation;
        }

        let playerRotation = this.player.sceneObject.rotation;
        this.player.sceneObject.rotation = new Vector3(playerRotation.x, playerRotation.y, targetRotation);
      }

      // move player to location
      this.player.movePlayerToLocation(intersection.x, intersection.z);
    }
  }

  update() {
    super.update();
    let playerPos = this.scene.player.sceneObject.position;
    
    if (playerPos.x <= this.worldBounds.x) {
      playerPos.x = this.worldBounds.x;
    }

    if (playerPos.x >= this.worldBounds.width) {
      playerPos.x = this.worldBounds.width;
    }

    if (playerPos.z >= this.worldBounds.height) {
      playerPos.z = this.worldBounds.height;
    }

    if (playerPos.z >= this.worldBounds.height) {
      playerPos.z = this.worldBounds.height;
    }

    if (playerPos.z <= this.worldBounds.y) {
      playerPos.z = this.worldBounds.y;
    }

     let camPosition = new Vector3(playerPos.x + this.cameraOriginalLocation.x, 
      playerPos.y + this.cameraOriginalLocation.y, 
      playerPos.z + this.cameraOriginalLocation.z);

     this.scene.camera.target = playerPos;
     this.scene.camera.position = camPosition;
  }

  private intersect(ray: Ray, plane: LogicPlane): Vector3 {
    // from line = p + t * v
    let p = ray.point;      // (x1, y1, z1)
    let v = ray.direction;  // (Vx, Vz, Vz)

    // from plane: ax + by + cz + d = 0
    let n = plane.normal; // (a, b, c,)
    let d = plane.d;      // constant term of d

    // dot product
    let dot1 = Vector3.dot(n, v);
    let dot2 = Vector3.dot(n, p);

    if (dot1 == 0) {
      return null; // no intersect
    }

    // find t = -(a*x1 + b*y1 + c*z1 + d) / (a*Vx + b*Vy + c*Vz)
    let t = -(dot2 + d) / dot1;
    return Vector3.add(p, Vector3.mul(v, t));
  }
} 