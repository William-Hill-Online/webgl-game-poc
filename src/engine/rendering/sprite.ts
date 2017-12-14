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

import { Rectangle } from './rectangle';
import { GestureRecognizer } from '../UI/gesture.recognizer';
import { Texture } from './texture';

export class Sprite {
 public texture: Texture;
 private _gestureRecognizer: GestureRecognizer;

 constructor(public frame: Rectangle) {
  this._gestureRecognizer = new GestureRecognizer();

  this.onInit();
 }

 onInit() {

 }

 set tapAction(action: (() => void)) {
  this._gestureRecognizer.action = action;
 }
 get tapAction(): (() => void) {
  return this._gestureRecognizer.action;
 }
}