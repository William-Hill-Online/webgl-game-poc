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

import { Texture } from '../rendering/texture';

export class SharedTextures {
    private static _instance: SharedTextures;
    private cache: Map<string, Texture>;
    public static get Instance(): SharedTextures {
        return this._instance;
    }

    constructor(private glContext: WebGLRenderingContext) {
        this.cache = new Map<string, Texture>();
    }

    static createInstance(glContext: WebGLRenderingContext) {
        this._instance = new SharedTextures(glContext);
    }

    setTexture(key: string, texture: Texture) {
        this.cache.set(key,texture);
    }

    getTexture(key: string): Texture {
        return this.cache.get(key);
    }
}