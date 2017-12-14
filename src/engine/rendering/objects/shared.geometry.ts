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

import { Vector3Array } from '../../structs/vector3.array';
import { Vector2Array } from '../../structs/vector2.array';
import { Vector3 } from '../../math/vector3';
import { Model } from '../../rendering/objects/model';

export class SharedGeometry {
    vertexBuffer: WebGLBuffer;
    indexBuffer: WebGLBuffer;
    textureBuffer: WebGLBuffer;
    private static _instance: SharedGeometry;

    public static get Instance(): SharedGeometry {
        return this._instance;
    }

    private vertices: Vector3Array;
    private indecies: Vector3Array;
    private textureCoords: Vector2Array;
    private models: Map<string, Model>;
    private vertexCount: number = 0;
    private indicesCount: number = 0;
    private textureCoordsCount: number = 0;

    constructor(private glContext: WebGLRenderingContext) {
        this.models = new Map<string, Model>();

        this.vertices = new Vector3Array([]);
        this.indecies = new Vector3Array([]);
        this.textureCoords = new Vector2Array([]);

        this.vertexBuffer  = glContext.createBuffer(); 
        this.indexBuffer   = glContext.createBuffer();
        this.textureBuffer = glContext.createBuffer();
    }

    static createInstance(glContext: WebGLRenderingContext) {
        this._instance = new SharedGeometry(glContext);
    }

    registerModel(key: string, model: Model) {
        if (this.models.has(key)) {
            throw "Model already registered!";
        }

        this.vertices.add(model.vertices);
        this.indecies.add(model.indices);
        this.textureCoords.add(model.textureCoordinates);
        this.models.set(key, model);

        model.modelBufferInfo.indiciesBufferInfo.glBuffer = this.indexBuffer;
        model.modelBufferInfo.indiciesBufferInfo.offset = this.indicesCount;
        model.modelBufferInfo.indiciesBufferInfo.length = model.indices.count;

        model.modelBufferInfo.verticesBufferInfo.glBuffer = this.vertexBuffer;
        model.modelBufferInfo.verticesBufferInfo.offset = this.vertexCount;
        model.modelBufferInfo.verticesBufferInfo.length = model.vertices.count;

        model.modelBufferInfo.textureBufferInfo.glBuffer = this.textureBuffer;
        model.modelBufferInfo.textureBufferInfo.offset = this.textureCoordsCount;
        model.modelBufferInfo.textureBufferInfo.length = model.textureCoordinates.count;

        this.indicesCount += model.indices.count;
        this.vertexCount += model.vertices.count;
        this.textureCoordsCount += model.textureCoordinates.count;
    }

    modelForName(name: string): Model {
        let model = this.models.get(name);
        if (model == null) { throw "No such model" }
        return model;
    }

    setupBuffers() {
        // pass down the vertices data
        this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, this.vertexBuffer); 
        this.glContext.bufferData(this.glContext.ARRAY_BUFFER, new Float32Array(this.vertices.data), this.glContext.STATIC_DRAW);

        // pass down the indicies data
        this.glContext.bindBuffer(this.glContext.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.glContext.bufferData(this.glContext.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indecies.data), this.glContext.STATIC_DRAW);

        // pass down the texture data
        this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, this.textureBuffer); 
        this.glContext.bufferData(this.glContext.ARRAY_BUFFER, new Float32Array(this.textureCoords.data), this.glContext.STATIC_DRAW);
    }
}