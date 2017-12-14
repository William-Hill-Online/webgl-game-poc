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
import { GameSceneController } from "./game.scene.controller";
import { Touch } from '../engine/UI/touch';
import { Layer } from '../engine/UI/layer';
import { Sprite } from '../engine/rendering/sprite';
import { Rectangle } from '../engine/rendering/rectangle';
import { Button } from './UI/button';

export class MainSceneController extends SceneController {
  playButton: Button
  
 sceneDidLoad() {
  super.sceneDidLoad();

  let layer = new Layer();
  this.scene.addLayer(layer);

  this.playButton = new Button(Rectangle.zero);
  this.playButton.tapAction = () => {
    this.sceneNavigationController.pushSceneController(new GameSceneController());
  };
  layer.addSprite(this.playButton);
 }

 sceneDidResize() {
  let w = this.scene.width;
  let h = this.scene.height;

  let buttonWidth = 200;
  let buttonHeight = 100;
  let buttonPosX = (w - buttonWidth) / 2.0;
  let buttonPosY = (h - buttonHeight) / 2.0;

  this.playButton.frame = new Rectangle(buttonPosX, buttonPosY, buttonWidth, buttonHeight);
 }
}