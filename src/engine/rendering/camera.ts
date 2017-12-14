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

import { Vector3 } from '../math/vector3';
import { Matrix4x4 } from '../math/matrix_4x4';
import { MathHelper } from '../math/math.helper';
/// Camera
export class Camera {
 
 cameraPitch: number = 20;
 cameraAroundPointAngle: number = 0;
 cameraDistanceToPoint: number = 20;

 private _position: Vector3 = Vector3.zero;
 private _target: Vector3 = Vector3.zero;
 private _up: Vector3 = Vector3.zero;

 set position(value: Vector3) {
  this._position = value;
 }

 get position(): Vector3 {
  return new Vector3(this._position.x, this._position.y, this._position.z);
 }

 set target(value: Vector3) {
  this._target = value;
 }

 get target(): Vector3 {
  return new Vector3(this._target.x, this._target.y, this._target.z);
 }

 constructor(position: Vector3, target: Vector3, up: Vector3) {
  this._position = position;
  this._target = target;
  this._up = up;
 }


 updateRotation(offsetX: number, offsetY: number) {
  this.cameraPitch += offsetY;

  console.log("Pitch " + this.cameraPitch);

  if(this.cameraPitch >= 90) {
   this.cameraPitch = 90
  }

  if(this.cameraPitch <= -90) {
   this.cameraPitch = -90
  }

  this.cameraAroundPointAngle += offsetX;

  this.position.y = this.calculateVerticalDistance();

  let horizontalDistance = this.calculateHorizontalDistance();
  let newX = horizontalDistance * Math.cos(MathHelper.degToRad(this.cameraAroundPointAngle));
  let newZ = horizontalDistance * Math.sin(MathHelper.degToRad(this.cameraAroundPointAngle));

  this.position.x = newX;
  this.position.z = newZ;

  console.log("x " + newX + " z " + newZ);
 }

 private calculateHorizontalDistance(): number {
  return this.cameraDistanceToPoint * Math.cos(MathHelper.degToRad(this.cameraPitch));
 }

 private calculateVerticalDistance() {
  return this.cameraDistanceToPoint * Math.sin(MathHelper.degToRad(this.cameraPitch));
 }

 get viewMatrix(): number[] {
 // Compute the camera's matrix using look at.
 var cameraMatrix = Matrix4x4.lookAt(this._position, this._target, this._up);
 // Make a view matrix from the camera matrix
 return Matrix4x4.inverse(cameraMatrix);
 }
}