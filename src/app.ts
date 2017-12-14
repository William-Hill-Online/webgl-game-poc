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

import { Engine } from './engine/engine'
import { SceneNavigationController } from './engine/UI/scene.navigation.controller';
import { MainSceneController } from './game/main.scene.controller';
import { GameSceneController } from './game/game.scene.controller';
import { Resources, Resource, Type } from './engine/resources';
import { SharedGeometry } from './engine/rendering/objects/shared.geometry'
import { GrassModel } from './game/objects/grass';

export class App {
    private engine: Engine;
    private resources: Resources;

    constructor() {
        this.engine = new Engine();
        this.engine.setup();
        this.resources = new Resources();

        Promise.all(
            [this.resources.load({
                url: 'resources/play-button.png',
                name: "play-button",
                type: Type.IMAGE
            }),
            this.resources.load({
                url: 'resources/knight.jpg',
                name: "knight",
                type: Type.IMAGE
            }),
            this.resources.load({
                url: 'resources/knight-enemy.jpg',
                name: "knight-enemy",
                type: Type.IMAGE
            }),
            this.resources.load({
                url: 'resources/grass.jpg',
                name: "grass",
                type: Type.IMAGE
            }),
            this.resources.load({
                url: 'resources/crate.jpg',
                name: "crate",
                type: Type.IMAGE
            }),
            this.resources.load({
                url: 'resources/banner.png',
                name: "banner",
                type: Type.IMAGE
            }),
            this.resources.load({
                url: 'resources/shaders/v1/vs_2d.glsl',
                name: "2d_vertex_shader",
                type: Type.TEXT
            }),
            this.resources.load({
                url: 'resources/shaders/v1/fs_2d.glsl',
                name: "2d_fragment_shader",
                type: Type.TEXT
            }),
            this.resources.load({
                url: 'resources/shaders/v1/vs_3d.glsl',
                name: "3d_vertex_shader",
                type: Type.TEXT
            }),
            this.resources.load({
                url: 'resources/shaders/v1/fs_3d.glsl',
                name: "3d_fragment_shader",
                type: Type.TEXT
            }),
            this.resources.load({
                url: 'resources/knight.ogex',
                name: "knight",
                type: Type.TEXT
            }),
            this.resources.load({
                url: 'resources/crate.ogex',
                name: "crate",
                type: Type.TEXT
            })
        ]    
        ).then(arr => {
            this.engine.createTextureWithImage("play-button", arr[0]);
            this.engine.createTextureWithImage("knight", arr[1]);
            this.engine.createTextureWithImage("knight-enemy", arr[2]);
            this.engine.createTextureWithImage("grass", arr[3]);
            this.engine.createTextureWithImage("crate", arr[4]);
            this.engine.createTextureWithImage("banner", arr[5]);
            this.engine.createProgram2D(arr[6], arr[7], "2d");
            this.engine.createProgram3D(arr[8], arr[9], "3d");
            this.engine.loadModel(arr[10], "knight");
            this.engine.loadModel(arr[11], "crate");
            this.registerAdditionalModels();
            this.engine.rootSceneNavigationController = new SceneNavigationController(new MainSceneController());
            this.engine.start();
        })
        .catch(err => {
            console.log("Error " + err);
        });
    }

    registerAdditionalModels() {
        SharedGeometry.Instance.registerModel("grass", GrassModel.createModel());
    }
}
export const app = new App();