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

import { Point } from '../math/point';
import { Vector2 } from "../math/vector2";

/// Class responsible for containing information about particular region of space
export class Rectangle {
    constructor(public x: number, public y: number, public width: number, public height: number) { }

    /// Returns the bottom y coordinate of this rectangle
    get bottom(): number {
        return this.y + this.height;
    }
    /// Returns the right x coordinate of this rectangle
    get right(): number {
        return this.x + this.width;
    }

    print() {
        console.log("x " + this.x + " y " + this.y + " width " + this.width + " height " + this.height);
    }

    /// Tells if the given point is inside the rectangle
    isPointInside(point: Point): Boolean {
        console.log("Test point inside " + point.x + " " + point.y);
        console.log(this.x + " y: " + this.y + " r: " + this.right + " b: " + this.bottom);
        console.log("////");
        return (this.x <= point.x && point.x < this.right) && (this.y <= point.y && point.y <= this.bottom);
    }

    static get zero(): Rectangle {
        return new Rectangle(0,0,0,0);
    }

    static fromMiddlePoint(middle: Vector2, size: Vector2): Rectangle {
        return new Rectangle(
            middle.x - size.x / 2,
            middle.y - size.y / 2,
            size.x,
            size.y
        );
    }

    public transformAroundPoint(point: Point): Rectangle {
        let w_2 = this.width / 2.0;
        let h_2 = this.height / 2.0;
        let newX = point.x - w_2;
        let newY = point.y + h_2;
        return new Rectangle(newX, newY, this.width, this.height);
    }

    get middle(): Vector2 {
        return new Vector2(this.x + this.width / 2, this.y + this.height / 2);
    }
    get size(): Vector2 {
        return new Vector2(this.width, this.height);
    }
}
