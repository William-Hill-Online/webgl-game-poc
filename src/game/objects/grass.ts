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

import { Object3D } from '../../engine/rendering/objects/object3d';
import { Point3D } from '../../engine/math/point3d';
import { SharedGeometry } from '../../engine/rendering/objects/shared.geometry';
import { SharedTextures } from '../../engine/rendering/shared.textures';
import { Vector3 } from '../../engine/math/vector3';
import { Vector2 } from '../../engine/math/vector2';
import { Vector3Array } from '../../engine/structs/vector3.array';
import { Vector2Array } from '../../engine/structs/vector2.array';
import { Model } from '../../engine/rendering/objects/model';

export class Grass extends Object3D {
    onInit() {
        this.model = SharedGeometry.Instance.modelForName("grass");
        this.texture = SharedTextures.Instance.getTexture("grass");
    }
}

export class GrassModel extends Model {
    static createModel(): GrassModel {
        let size = 20;

        let numberOfHorizontalPlanes = 50;
        let numberOfVerticalPlanes = 50;

        var verts: number[] = [];
        var indices: number[] = [];
        var textureCoords: number[] = [];

        for(var j = 0; j < numberOfVerticalPlanes; j++) {
            for(var i = 0; i < numberOfHorizontalPlanes; i++) {
                let totalNumberOfIndicies = i * 4 + j * numberOfHorizontalPlanes * 4;

                let v = this.generateVerticlesForHorizontalPlane(j * size, i * size, size);
                let ind = this.generateIndicesForHorizontalPlane(totalNumberOfIndicies);
                let txc = this.generateTextureCoordinates();

                verts = verts.concat(v);
                indices = indices.concat(ind);
                textureCoords = textureCoords.concat(txc);
            }
        }

        return new GrassModel(new Vector3Array(verts), 
               new Vector3Array(indices), 
               new Vector3Array([]), 
               new Vector3Array([]), 
               new Vector2Array(textureCoords));
    }

    private static generateTextureCoordinates(): number[] {
        return [0.0, 0.0,
                1.0, 0.0,
                0.0, 1.0,
                1.0, 1.0];
    }

    private static generateIndicesForHorizontalPlane(offset: number): number[] {
        return [offset + 0, offset + 1, 
                offset + 2, offset + 1, 
                offset + 3, offset + 2];
    }

    private static generateVerticlesForHorizontalPlane(offsetX: number, offsetZ: number, size: number): number[] {
        let v0x = offsetX;
        let v0y = 0;
        let v0z = offsetZ;

        let v1x = offsetX;
        let v1y = 0;
        let v1z = offsetZ + size;

        let v2x = offsetX + size;
        let v2y = 0;
        let v2z = offsetZ;

        let v3x = offsetX + size;
        let v3y = 0;
        let v3z = offsetZ + size;

        return [v0x, v0y, v0z,
                v1x, v1y, v1z,
                v2x, v2y, v2z,
                v3x, v3y, v3z,
        ]
    }
}