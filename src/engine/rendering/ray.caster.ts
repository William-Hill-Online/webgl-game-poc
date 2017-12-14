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
import { Vector2 } from '../math/vector2';
import { Matrix4x4 } from '../math/matrix_4x4';
import { Camera } from '../rendering/camera';
import { Point } from '../math/point';

export class Ray {
    constructor(public point: Vector3 = Vector3.zero,
        public direction: Vector3 = Vector3.zero) { }
}

export class RayCaster {
    private viewMatrix: number[] = [];
    public projectionMatrix: number[] = Matrix4x4.identity();
    private screenWidth: number;
    private screenHeight: number;

    constructor(public camera: Camera,
        private canvas: HTMLCanvasElement) {
    }

    currentRay(point: Point): Ray {
        let ratio = window.devicePixelRatio || 1;
        let scaledPoint = new Point(point.x * ratio, point.y * ratio);
        let directionVector = this.calculateMouseDirection(scaledPoint);
        return new Ray(this.camera.position, directionVector);
    }

    private getNormalizedDeviceCoords(point: Point): Vector2 {
        let x = (2 * point.x) / this.canvas.width - 1;
        let y = 1.0 - (2 * point.y) / this.canvas.height;
        return new Vector2(x, y);
    }

    private toEyeCoords(clippingCoords: number[]): number[] {
        let invertedProjectionMatrix = Matrix4x4.inverse(this.projectionMatrix);
        let eyeCoords = Matrix4x4.multiply(invertedProjectionMatrix, clippingCoords);
        return [eyeCoords[0], eyeCoords[1], -1.0, 0.0];
    }

    private toWorldCoords(eyeCoords: number[]): Vector3 {
        let invertedView = Matrix4x4.inverse(this.viewMatrix);
        let rayWorld = Matrix4x4.multiply(invertedView, eyeCoords);
        let mouseRay = new Vector3(rayWorld[0], rayWorld[1], rayWorld[2]);
        return Vector3.normalize(mouseRay);
    }

    private calculateMouseDirection(point: Point): Vector3 {
        // Get view matrix from camera
        this.viewMatrix = this.camera.viewMatrix;
        let mouseCoords = this.getNormalizedDeviceCoords(point);

        let clippingCoords = [mouseCoords.x, mouseCoords.y, -1.0, 1.0];
        let eyeCoords = this.toEyeCoords(clippingCoords);
        let worldRay = this.toWorldCoords(eyeCoords);
        return worldRay;
    }
}