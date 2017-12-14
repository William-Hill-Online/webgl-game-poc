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

import { SceneController } from './scene.controller';

/// Class responsible for managing stack of scene controllers
export class SceneNavigationController {
 sceneControllers: SceneController[] = [];
 /// Returns the top most SceneController. Returns null if there are no scene controllers 

 constructor(rootSceneController: SceneController = null) {
  if (rootSceneController != null) {
   rootSceneController.sceneNavigationController = this;
   this.sceneControllers.push(rootSceneController);
  }
 }

 /// Retrieves the top most scene controller
 get topSceneController(): SceneController {
  let count = this.sceneControllers.length;
  if (count == 0) { return null; }
  return this.sceneControllers[count - 1];
 }

 /// Navigates to the given scene controller
 pushSceneController(sceneController: SceneController) {
  // pass the raycaster to new scene controller
  sceneController.rayCaster = this.topSceneController.rayCaster;
  sceneController.rayCaster.camera = sceneController.scene.camera;

  // pass scene dims
  sceneController.scene.width = this.topSceneController.scene.width;
  sceneController.scene.height = this.topSceneController.scene.height;

  sceneController.sceneNavigationController = this;
  sceneController.sceneDidLoad();
  sceneController.sceneDidResize();
  this.sceneControllers.push(sceneController);
 }

 /// Navigates back to previous scene controller
 popSceneController() {
  let count = this.sceneControllers.length;
  if (count == 0) { return; }
  this.sceneControllers[count - 1].sceneNavigationController = null;
  this.sceneControllers.pop();
 }
}