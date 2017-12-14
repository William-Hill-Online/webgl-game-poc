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

/// Class responsible for managing touches on various elements
export class GestureRecognizer {
 /// Parameter action - an action to be performed when this gesture recognizer is invoked.
constructor(public action?:(() => void)) {}
/// Runs the stored action
invoke() {
 if (this.action != null) {
  this.action(); // Perform the stored action
 }
}
}