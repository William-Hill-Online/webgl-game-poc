/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /// Returns new Vector3 as a result of substraction. Substracts v2 from v1
    static subtract(v1, v2) {
        return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }
    static get zero() {
        return new Vector3(0, 0, 0);
    }
    static dot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }
    static distance(v1, v2) {
        return this.vectorLength(this.subtract(v1, v2));
    }
    /// Returns the length of the given Vector3
    static vectorLength(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    }
    /// Returns the normalized Vector3
    static normalize(v) {
        let l = Math.abs(Vector3.vectorLength(v));
        return new Vector3(v.x / l, v.y / l, v.z / l);
    }
    print() {
        console.log("Printing Vector3" + " x:" + this.x + " y: " + this.y + " z: " + this.z);
    }
    static cross(v1, v2) {
        return new Vector3(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
    }
    static add(v1, v2) {
        return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }
    static mul(v, val) {
        return new Vector3(v.x * val, v.y * val, v.z * val);
    }
}
exports.Vector3 = Vector3;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
class SharedTextures {
    constructor(glContext) {
        this.glContext = glContext;
        this.cache = new Map();
    }
    static get Instance() {
        return this._instance;
    }
    static createInstance(glContext) {
        this._instance = new SharedTextures(glContext);
    }
    setTexture(key, texture) {
        this.cache.set(key, texture);
    }
    getTexture(key) {
        return this.cache.get(key);
    }
}
exports.SharedTextures = SharedTextures;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector3_array_1 = __webpack_require__(5);
const vector2_array_1 = __webpack_require__(4);
class SharedGeometry {
    constructor(glContext) {
        this.glContext = glContext;
        this.vertexCount = 0;
        this.indicesCount = 0;
        this.textureCoordsCount = 0;
        this.models = new Map();
        this.vertices = new vector3_array_1.Vector3Array([]);
        this.indecies = new vector3_array_1.Vector3Array([]);
        this.textureCoords = new vector2_array_1.Vector2Array([]);
        this.vertexBuffer = glContext.createBuffer();
        this.indexBuffer = glContext.createBuffer();
        this.textureBuffer = glContext.createBuffer();
    }
    static get Instance() {
        return this._instance;
    }
    static createInstance(glContext) {
        this._instance = new SharedGeometry(glContext);
    }
    registerModel(key, model) {
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
    modelForName(name) {
        let model = this.models.get(name);
        if (model == null) {
            throw "No such model";
        }
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
exports.SharedGeometry = SharedGeometry;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static zero() {
        return new Vector2(0, 0);
    }
    /// Returns the length of the given Vector2
    static vectorLength(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }
    /// Returns the normalized Vector2
    static normalize(v) {
        let l = Math.abs(Vector2.vectorLength(v));
        return new Vector2(v.x / l, v.y / l);
    }
}
exports.Vector2 = Vector2;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
class Vector2Array {
    constructor(array) {
        this.array = [];
        this.array = array;
    }
    push(vector) {
        this.array.push(vector.x);
        this.array.push(vector.y);
    }
    add(vector2Array) {
        vector2Array.data.forEach(element => {
            this.array.push(element);
        });
    }
    append(newArray) {
        newArray.forEach(item => {
            this.push(item);
        });
    }
    clear() {
        this.array = [];
    }
    print() {
        this.array.forEach(element => {
            console.log(element);
        });
    }
    get count() {
        return this.array.length;
    }
    get data() {
        return this.array;
    }
}
exports.Vector2Array = Vector2Array;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
class Vector3Array {
    constructor(array) {
        this.array = [];
        this.array = array;
    }
    add(vector3Array) {
        vector3Array.data.forEach(element => {
            this.array.push(element);
        });
    }
    append(newArray) {
        newArray.forEach(item => {
            this.push(item);
        });
    }
    push(vector) {
        this.array.push(vector.x);
        this.array.push(vector.y);
        this.array.push(vector.z);
    }
    clear() {
        this.array = [];
    }
    get count() {
        return this.array.length;
    }
    print() {
        this.array.forEach(element => {
            console.log(element);
        });
    }
    get data() {
        return this.array;
    }
}
exports.Vector3Array = Vector3Array;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector3_1 = __webpack_require__(0);
const physics_1 = __webpack_require__(32);
/// Class responsible for managing 3d scene object
class Object3D {
    constructor(position = vector3_1.Vector3.zero, rotation = vector3_1.Vector3.zero, scale = new vector3_1.Vector3(1, 1, 1)) {
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
        this.texture = null;
        this.speed = 10;
        this.onInit();
    }
    onInit() {
    }
    setTarget(pos) { this.target = pos; }
    localToWorld(pt) {
        return vector3_1.Vector3.add(pt, this.position);
    }
    update(dt) {
        if (this.target) {
            const diff = vector3_1.Vector3.subtract(this.target, this.position);
            const dir = vector3_1.Vector3.normalize(diff);
            let velocity = vector3_1.Vector3.mul(vector3_1.Vector3.mul(dir, this.speed), dt);
            if (vector3_1.Vector3.vectorLength(diff) < vector3_1.Vector3.vectorLength(velocity)) {
                velocity = diff;
                this.target = null;
            }
            const prevPosition = this.position;
            this.position = vector3_1.Vector3.add(this.position, velocity);
            if (physics_1.Physics.checkForCollisions(this, this.scene.objects3D)) {
                this.position = prevPosition;
                this.target = null;
            }
        }
    }
}
exports.Object3D = Object3D;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
/// Class responsible for representing single coordinate in 2d space.
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static get zero() {
        return new Point(0, 0);
    }
}
exports.Point = Point;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
class MathHelper {
    static degToRad(d) {
        return d * Math.PI / 180;
    }
    static radToDeg(r) {
        return r * 180 / Math.PI;
    }
}
exports.MathHelper = MathHelper;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector3_array_1 = __webpack_require__(5);
const vector2_array_1 = __webpack_require__(4);
const model_buffer_info_1 = __webpack_require__(33);
class Model {
    constructor(vertices = new vector3_array_1.Vector3Array([]), indices = new vector3_array_1.Vector3Array([]), normals = new vector3_array_1.Vector3Array([]), colors = new vector3_array_1.Vector3Array([]), textureCoordinates = new vector2_array_1.Vector2Array([])) {
        this.vertices = vertices;
        this.indices = indices;
        this.normals = normals;
        this.colors = colors;
        this.textureCoordinates = textureCoordinates;
        this.modelBufferInfo = new model_buffer_info_1.ModelBufferInfo();
    }
    get indicesCount() {
        return this.indices.data.length;
    }
}
exports.Model = Model;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector3_1 = __webpack_require__(0);
/// Class handling matrix operations 
class Matrix4x4 {
    /// Returns an indentity matrix
    static identity() {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    }
    /// Returns perspective matix based on the given values
    static perspective(fieldOfViewInRadians, aspect, near, far) {
        var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
        var rangeInv = 1.0 / (near - far);
        return [
            f / aspect, 0, 0, 0,
            0, f, 0, 0,
            0, 0, (near + far) * rangeInv, -1,
            0, 0, near * far * rangeInv * 2, 0,
        ];
    }
    /// Returns projection matrix. Note: This matrix flips the Y axis so 0 is at the top.
    static projection(width, height, depth) {
        return [
            2 / width, 0, 0, 0,
            0, -2 / height, 0, 0,
            0, 0, 2 / depth, 0,
            -1, 1, 0, 1,
        ];
    }
    /// Multiplies two matrices
    static multiply(a, b) {
        var a00 = a[0 * 4 + 0];
        var a01 = a[0 * 4 + 1];
        var a02 = a[0 * 4 + 2];
        var a03 = a[0 * 4 + 3];
        var a10 = a[1 * 4 + 0];
        var a11 = a[1 * 4 + 1];
        var a12 = a[1 * 4 + 2];
        var a13 = a[1 * 4 + 3];
        var a20 = a[2 * 4 + 0];
        var a21 = a[2 * 4 + 1];
        var a22 = a[2 * 4 + 2];
        var a23 = a[2 * 4 + 3];
        var a30 = a[3 * 4 + 0];
        var a31 = a[3 * 4 + 1];
        var a32 = a[3 * 4 + 2];
        var a33 = a[3 * 4 + 3];
        var b00 = b[0 * 4 + 0];
        var b01 = b[0 * 4 + 1];
        var b02 = b[0 * 4 + 2];
        var b03 = b[0 * 4 + 3];
        var b10 = b[1 * 4 + 0];
        var b11 = b[1 * 4 + 1];
        var b12 = b[1 * 4 + 2];
        var b13 = b[1 * 4 + 3];
        var b20 = b[2 * 4 + 0];
        var b21 = b[2 * 4 + 1];
        var b22 = b[2 * 4 + 2];
        var b23 = b[2 * 4 + 3];
        var b30 = b[3 * 4 + 0];
        var b31 = b[3 * 4 + 1];
        var b32 = b[3 * 4 + 2];
        var b33 = b[3 * 4 + 3];
        return [
            b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
            b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
            b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
            b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
            b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
            b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
            b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
            b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
            b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
            b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
            b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
            b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
            b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
            b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
            b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
            b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
        ];
    }
    /// Returns translated matrix
    static translate(m, tx, ty, tz) {
        let translate = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            tx, ty, tz, 1,
        ];
        return Matrix4x4.multiply(m, translate);
    }
    /// Look at
    static lookAt(cameraPosition, target, up) {
        var zAxis = vector3_1.Vector3.normalize(vector3_1.Vector3.subtract(cameraPosition, target));
        var xAxis = vector3_1.Vector3.normalize(vector3_1.Vector3.cross(up, zAxis));
        var yAxis = vector3_1.Vector3.cross(zAxis, xAxis);
        return [
            xAxis.x, xAxis.y, xAxis.z, 0,
            yAxis.x, yAxis.y, yAxis.z, 0,
            zAxis.x, zAxis.y, zAxis.z, 0,
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z,
            1,
        ];
    }
    /// Returns inverted matrix
    static inverse(matrix) {
        var m00 = matrix[0 * 4 + 0];
        var m01 = matrix[0 * 4 + 1];
        var m02 = matrix[0 * 4 + 2];
        var m03 = matrix[0 * 4 + 3];
        var m10 = matrix[1 * 4 + 0];
        var m11 = matrix[1 * 4 + 1];
        var m12 = matrix[1 * 4 + 2];
        var m13 = matrix[1 * 4 + 3];
        var m20 = matrix[2 * 4 + 0];
        var m21 = matrix[2 * 4 + 1];
        var m22 = matrix[2 * 4 + 2];
        var m23 = matrix[2 * 4 + 3];
        var m30 = matrix[3 * 4 + 0];
        var m31 = matrix[3 * 4 + 1];
        var m32 = matrix[3 * 4 + 2];
        var m33 = matrix[3 * 4 + 3];
        var tmp_0 = m22 * m33;
        var tmp_1 = m32 * m23;
        var tmp_2 = m12 * m33;
        var tmp_3 = m32 * m13;
        var tmp_4 = m12 * m23;
        var tmp_5 = m22 * m13;
        var tmp_6 = m02 * m33;
        var tmp_7 = m32 * m03;
        var tmp_8 = m02 * m23;
        var tmp_9 = m22 * m03;
        var tmp_10 = m02 * m13;
        var tmp_11 = m12 * m03;
        var tmp_12 = m20 * m31;
        var tmp_13 = m30 * m21;
        var tmp_14 = m10 * m31;
        var tmp_15 = m30 * m11;
        var tmp_16 = m10 * m21;
        var tmp_17 = m20 * m11;
        var tmp_18 = m00 * m31;
        var tmp_19 = m30 * m01;
        var tmp_20 = m00 * m21;
        var tmp_21 = m20 * m01;
        var tmp_22 = m00 * m11;
        var tmp_23 = m10 * m01;
        var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
            (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
        var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
            (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
        var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
            (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
        var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
            (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
        var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
        return [
            d * t0,
            d * t1,
            d * t2,
            d * t3,
            d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
                (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30)),
            d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
                (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30)),
            d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
                (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30)),
            d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
                (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20)),
            d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
                (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33)),
            d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
                (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33)),
            d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
                (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33)),
            d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
                (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23)),
            d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
                (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22)),
            d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
                (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02)),
            d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
                (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12)),
            d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
                (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02))
        ];
    }
    static print(m) {
        console.log("M-Start");
        console.log(m[0] + " " + m[1] + " " + m[2] + " " + m[3]);
        console.log(m[4] + " " + m[5] + " " + m[6] + " " + m[7]);
        console.log(m[8] + " " + m[9] + " " + m[10] + " " + m[11]);
        console.log(m[12] + " " + m[13] + " " + m[14] + " " + m[15]);
        console.log("M-End");
    }
    static xRotation(angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        return [
            1, 0, 0, 0,
            0, c, s, 0,
            0, -s, c, 0,
            0, 0, 0, 1,
        ];
    }
    static yRotation(angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        return [
            c, 0, -s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1,
        ];
    }
    static zRotation(angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        return [
            c, s, 0, 0,
            -s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
    }
    static xRotate(m, angleInRadians) {
        return Matrix4x4.multiply(m, Matrix4x4.xRotation(angleInRadians));
    }
    static yRotate(m, angleInRadians) {
        return Matrix4x4.multiply(m, Matrix4x4.yRotation(angleInRadians));
    }
    static zRotate(m, angleInRadians) {
        return Matrix4x4.multiply(m, Matrix4x4.zRotation(angleInRadians));
    }
    static scale(m, sx, sy, sz) {
        let scaling = [
            sx, 0, 0, 0,
            0, sy, 0, 0,
            0, 0, sz, 0,
            0, 0, 0, 1,
        ];
        return Matrix4x4.multiply(m, scaling);
    }
}
exports.Matrix4x4 = Matrix4x4;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector2_1 = __webpack_require__(3);
/// Class responsible for containing information about particular region of space
class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    /// Returns the bottom y coordinate of this rectangle
    get bottom() {
        return this.y + this.height;
    }
    /// Returns the right x coordinate of this rectangle
    get right() {
        return this.x + this.width;
    }
    print() {
        console.log("x " + this.x + " y " + this.y + " width " + this.width + " height " + this.height);
    }
    /// Tells if the given point is inside the rectangle
    isPointInside(point) {
        console.log("Test point inside " + point.x + " " + point.y);
        console.log(this.x + " y: " + this.y + " r: " + this.right + " b: " + this.bottom);
        console.log("////");
        return (this.x <= point.x && point.x < this.right) && (this.y <= point.y && point.y <= this.bottom);
    }
    static get zero() {
        return new Rectangle(0, 0, 0, 0);
    }
    static fromMiddlePoint(middle, size) {
        return new Rectangle(middle.x - size.x / 2, middle.y - size.y / 2, size.x, size.y);
    }
    transformAroundPoint(point) {
        let w_2 = this.width / 2.0;
        let h_2 = this.height / 2.0;
        let newX = point.x - w_2;
        let newY = point.y + h_2;
        return new Rectangle(newX, newY, this.width, this.height);
    }
    get middle() {
        return new vector2_1.Vector2(this.x + this.width / 2, this.y + this.height / 2);
    }
    get size() {
        return new vector2_1.Vector2(this.width, this.height);
    }
}
exports.Rectangle = Rectangle;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const rectangle_1 = __webpack_require__(11);
class BoxCollider {
    get rect() {
        return this._rect;
    }
    constructor(localPosition, size) {
        this._rect = rectangle_1.Rectangle.fromMiddlePoint(localPosition, size);
    }
}
exports.BoxCollider = BoxCollider;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
/// Class responsible for managing stack of scene controllers
class SceneNavigationController {
    /// Returns the top most SceneController. Returns null if there are no scene controllers 
    constructor(rootSceneController = null) {
        this.sceneControllers = [];
        if (rootSceneController != null) {
            rootSceneController.sceneNavigationController = this;
            this.sceneControllers.push(rootSceneController);
        }
    }
    /// Retrieves the top most scene controller
    get topSceneController() {
        let count = this.sceneControllers.length;
        if (count == 0) {
            return null;
        }
        return this.sceneControllers[count - 1];
    }
    /// Navigates to the given scene controller
    pushSceneController(sceneController) {
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
        if (count == 0) {
            return;
        }
        this.sceneControllers[count - 1].sceneNavigationController = null;
        this.sceneControllers.pop();
    }
}
exports.SceneNavigationController = SceneNavigationController;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const base_shading_program_1 = __webpack_require__(15);
var ShadingProgram2dLocations;
(function (ShadingProgram2dLocations) {
    ShadingProgram2dLocations[ShadingProgram2dLocations["POSITION"] = 0] = "POSITION";
    ShadingProgram2dLocations[ShadingProgram2dLocations["TEXTURE_COORDINATES"] = 1] = "TEXTURE_COORDINATES";
    ShadingProgram2dLocations[ShadingProgram2dLocations["RESOLUTION"] = 2] = "RESOLUTION";
})(ShadingProgram2dLocations = exports.ShadingProgram2dLocations || (exports.ShadingProgram2dLocations = {}));
class ShadingProgram2d extends base_shading_program_1.BaseShadingProgram {
    getLocation(location) {
        switch (location) {
            case ShadingProgram2dLocations.POSITION:
                return this.positionAttributeLocation;
            case ShadingProgram2dLocations.TEXTURE_COORDINATES:
                return this.textureCoordinatesAttributeLocation;
            case ShadingProgram2dLocations.RESOLUTION:
                return this.resolutionUniformLocation;
        }
    }
    setupLocations() {
        this.resolutionUniformLocation = this.glContext.getUniformLocation(this.programId, "u_resolution");
        this.textureCoordinatesAttributeLocation = this.glContext.getAttribLocation(this.programId, "a_texcoord");
        this.positionAttributeLocation = this.glContext.getAttribLocation(this.programId, "a_position");
    }
}
exports.ShadingProgram2d = ShadingProgram2d;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const shader_1 = __webpack_require__(28);
const program_1 = __webpack_require__(29);
class BaseShadingProgram {
    constructor(glContext, vertexShaderSource, fragmentShaderSource) {
        this.glContext = glContext;
        let vs = shader_1.Shader.createFromSource(glContext, vertexShaderSource, this.glContext.VERTEX_SHADER);
        if (vs == null) {
            throw "Vertex shader is empty!";
        }
        let fs = shader_1.Shader.createFromSource(glContext, fragmentShaderSource, this.glContext.FRAGMENT_SHADER);
        if (fs == null) {
            throw "Fragment shader is empty!";
        }
        this.program = program_1.Program.createProgram(glContext, vs, fs);
        if (this.program == null) {
            throw "Program is empty!";
        }
        this.setupLocations();
    }
    get programId() {
        return this.program.programId;
    }
    /// Uses the program
    useProgram() {
        return this.glContext.useProgram(this.program.programId);
    }
    setupLocations() { }
}
exports.BaseShadingProgram = BaseShadingProgram;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const base_shading_program_1 = __webpack_require__(15);
var ShadingProgram3dLocations;
(function (ShadingProgram3dLocations) {
    ShadingProgram3dLocations[ShadingProgram3dLocations["POSITION"] = 0] = "POSITION";
    ShadingProgram3dLocations[ShadingProgram3dLocations["TEXTURE"] = 1] = "TEXTURE";
    ShadingProgram3dLocations[ShadingProgram3dLocations["MATRIX"] = 2] = "MATRIX";
})(ShadingProgram3dLocations = exports.ShadingProgram3dLocations || (exports.ShadingProgram3dLocations = {}));
class ShadingProgram3d extends base_shading_program_1.BaseShadingProgram {
    getLocation(location) {
        switch (location) {
            case ShadingProgram3dLocations.POSITION:
                return this.positionAttributeLocation;
            case ShadingProgram3dLocations.TEXTURE:
                return this.textureAttributeLocation;
            case ShadingProgram3dLocations.MATRIX:
                return this.matrixUniformLocation;
        }
    }
    setupLocations() {
        this.positionAttributeLocation = this.glContext.getAttribLocation(this.programId, "a_position");
        this.textureAttributeLocation = this.glContext.getAttribLocation(this.programId, "a_texcoord");
        this.matrixUniformLocation = this.glContext.getUniformLocation(this.programId, "u_matrix");
    }
}
exports.ShadingProgram3d = ShadingProgram3d;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const scene_1 = __webpack_require__(38);
const point_1 = __webpack_require__(7);
/// Class responsible for containing all game objects and logic for a single scene (e.g. menu, or game map)
class SceneController {
    constructor() {
        this.scene = new scene_1.Scene();
    }
    get layers() {
        return this.scene.layers;
    }
    sceneDidLoad() { }
    sceneDidResize() { }
    update() { }
    touchesBegan(touch) {
        // Loop though all sprites and look if any of them was tapped
        this.layers.forEach(layer => {
            layer.sprites.forEach(sprite => {
                if (sprite.frame.isPointInside(new point_1.Point(touch.x, touch.y))) {
                    if (sprite.tapAction != null) {
                        sprite.tapAction();
                    }
                }
            });
        });
    }
}
exports.SceneController = SceneController;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
/// Class responsible for managing a group of 2D sprites.
class Layer {
    constructor() {
        this._sprites = [];
    }
    /// Returns all sprites added to this layer.
    get sprites() {
        return this._sprites;
    }
    /// Adds new sprite to the scene
    addSprite(sprite) {
        this._sprites.push(sprite);
    }
}
exports.Layer = Layer;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const object3d_1 = __webpack_require__(6);
const shared_geometry_1 = __webpack_require__(2);
const shared_textures_1 = __webpack_require__(1);
const vector3_array_1 = __webpack_require__(5);
const vector2_array_1 = __webpack_require__(4);
const model_1 = __webpack_require__(9);
class Grass extends object3d_1.Object3D {
    onInit() {
        this.model = shared_geometry_1.SharedGeometry.Instance.modelForName("grass");
        this.texture = shared_textures_1.SharedTextures.Instance.getTexture("grass");
    }
}
exports.Grass = Grass;
class GrassModel extends model_1.Model {
    static createModel() {
        let size = 20;
        let numberOfHorizontalPlanes = 50;
        let numberOfVerticalPlanes = 50;
        var verts = [];
        var indices = [];
        var textureCoords = [];
        for (var j = 0; j < numberOfVerticalPlanes; j++) {
            for (var i = 0; i < numberOfHorizontalPlanes; i++) {
                let totalNumberOfIndicies = i * 4 + j * numberOfHorizontalPlanes * 4;
                let v = this.generateVerticlesForHorizontalPlane(j * size, i * size, size);
                let ind = this.generateIndicesForHorizontalPlane(totalNumberOfIndicies);
                let txc = this.generateTextureCoordinates();
                verts = verts.concat(v);
                indices = indices.concat(ind);
                textureCoords = textureCoords.concat(txc);
            }
        }
        return new GrassModel(new vector3_array_1.Vector3Array(verts), new vector3_array_1.Vector3Array(indices), new vector3_array_1.Vector3Array([]), new vector3_array_1.Vector3Array([]), new vector2_array_1.Vector2Array(textureCoords));
    }
    static generateTextureCoordinates() {
        return [0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0];
    }
    static generateIndicesForHorizontalPlane(offset) {
        return [offset + 0, offset + 1,
            offset + 2, offset + 1,
            offset + 3, offset + 2];
    }
    static generateVerticlesForHorizontalPlane(offsetX, offsetZ, size) {
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
        ];
    }
}
exports.GrassModel = GrassModel;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const gesture_recognizer_1 = __webpack_require__(47);
class Sprite {
    constructor(frame) {
        this.frame = frame;
        this._gestureRecognizer = new gesture_recognizer_1.GestureRecognizer();
        this.onInit();
    }
    onInit() {
    }
    set tapAction(action) {
        this._gestureRecognizer.action = action;
    }
    get tapAction() {
        return this._gestureRecognizer.action;
    }
}
exports.Sprite = Sprite;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = __webpack_require__(22);
const scene_navigation_controller_1 = __webpack_require__(13);
const main_scene_controller_1 = __webpack_require__(37);
const resources_1 = __webpack_require__(49);
const shared_geometry_1 = __webpack_require__(2);
const grass_1 = __webpack_require__(19);
class App {
    constructor() {
        this.engine = new engine_1.Engine();
        this.engine.setup();
        this.resources = new resources_1.Resources();
        Promise.all([this.resources.load({
                url: 'resources/play-button.png',
                name: "play-button",
                type: resources_1.Type.IMAGE
            }),
            this.resources.load({
                url: 'resources/knight.jpg',
                name: "knight",
                type: resources_1.Type.IMAGE
            }),
            this.resources.load({
                url: 'resources/knight-enemy.jpg',
                name: "knight-enemy",
                type: resources_1.Type.IMAGE
            }),
            this.resources.load({
                url: 'resources/grass.jpg',
                name: "grass",
                type: resources_1.Type.IMAGE
            }),
            this.resources.load({
                url: 'resources/crate.jpg',
                name: "crate",
                type: resources_1.Type.IMAGE
            }),
            this.resources.load({
                url: 'resources/banner.png',
                name: "banner",
                type: resources_1.Type.IMAGE
            }),
            this.resources.load({
                url: 'resources/shaders/v1/vs_2d.glsl',
                name: "2d_vertex_shader",
                type: resources_1.Type.TEXT
            }),
            this.resources.load({
                url: 'resources/shaders/v1/fs_2d.glsl',
                name: "2d_fragment_shader",
                type: resources_1.Type.TEXT
            }),
            this.resources.load({
                url: 'resources/shaders/v1/vs_3d.glsl',
                name: "3d_vertex_shader",
                type: resources_1.Type.TEXT
            }),
            this.resources.load({
                url: 'resources/shaders/v1/fs_3d.glsl',
                name: "3d_fragment_shader",
                type: resources_1.Type.TEXT
            }),
            this.resources.load({
                url: 'resources/knight.ogex',
                name: "knight",
                type: resources_1.Type.TEXT
            }),
            this.resources.load({
                url: 'resources/crate.ogex',
                name: "crate",
                type: resources_1.Type.TEXT
            })
        ]).then(arr => {
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
            this.engine.rootSceneNavigationController = new scene_navigation_controller_1.SceneNavigationController(new main_scene_controller_1.MainSceneController());
            this.engine.start();
        })
            .catch(err => {
            console.log("Error " + err);
        });
    }
    registerAdditionalModels() {
        shared_geometry_1.SharedGeometry.Instance.registerModel("grass", grass_1.GrassModel.createModel());
    }
}
exports.App = App;
exports.app = new App();


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const scene_navigation_controller_1 = __webpack_require__(13);
const touch_1 = __webpack_require__(23);
const texture_1 = __webpack_require__(24);
const master_renderer_1 = __webpack_require__(25);
const shared_geometry_1 = __webpack_require__(2);
const cube_1 = __webpack_require__(31);
const triangle_1 = __webpack_require__(34);
const shared_textures_1 = __webpack_require__(1);
const shading_program_2d_1 = __webpack_require__(14);
const shading_program_3d_1 = __webpack_require__(16);
const ogex_loader_1 = __webpack_require__(35);
const ray_caster_1 = __webpack_require__(36);
const point_1 = __webpack_require__(7);
class Engine {
    constructor() {
        this.isSetup = false;
        this.mouseLocation = point_1.Point.zero;
        //Keycodes
        this.KEY_A = 97;
        this.KEY_D = 100;
        this.KEY_Q = 113;
        this.KEY_RIGHT = 39;
        this.lastTimestamp = 0;
        //
        this.lastMouseX = 0;
        this.lastMouseY = 0;
    }
    /// Setups the engine
    setup() {
        this.canvas = document.getElementById('webgl-canvas');
        this.glContext = this.canvas.getContext("webgl");
        if (this.glContext == null) {
            throw "No WebGL support";
        }
        shared_textures_1.SharedTextures.createInstance(this.glContext);
        shared_geometry_1.SharedGeometry.createInstance(this.glContext);
        shared_geometry_1.SharedGeometry.Instance.registerModel("cube", new cube_1.CubeModel());
        shared_geometry_1.SharedGeometry.Instance.registerModel("triangle", new triangle_1.TriangleModel());
        //register touches
        this.canvas.onmousedown = (event) => {
            this.onMouseClick(new touch_1.Touch(event.x, event.y));
        };
        window.onresize = () => {
            this.resize(this.canvas);
        };
        window.onorientationchange = () => {
            this.resize(this.canvas);
        };
        this.rootSceneNavigationController = new scene_navigation_controller_1.SceneNavigationController();
        this.glContext.clearColor(125 / 255, 196 / 255, 240 / 255, 1);
        this.isSetup = true;
    }
    onMouseClick(touch) {
        let ratio = window.devicePixelRatio || 1;
        let touchWithRatio = new touch_1.Touch(touch.x / ratio, touch.y / ratio);
        let topSC = this.rootSceneNavigationController.topSceneController;
        if (topSC == null)
            return;
        topSC.touchesBegan(touch);
    }
    start() {
        if (!this.isSetup) {
            throw "Engine is not setup! Call setup!";
        }
        // all models are loaded at this point setup buffers 
        shared_geometry_1.SharedGeometry.Instance.setupBuffers();
        let topSceneCtr = this.rootSceneNavigationController.topSceneController;
        this.masterRenderer = new master_renderer_1.MasterRenderer(this.glContext, this.shadingProgram2d, this.shadingProgram3d);
        this.rayCaster = new ray_caster_1.RayCaster(topSceneCtr.scene.camera, this.canvas);
        topSceneCtr.rayCaster = this.rayCaster;
        topSceneCtr.sceneDidLoad();
        this.resize(this.canvas); // resize canvas before rendering
        requestAnimationFrame(this.update.bind(this));
    }
    update(timestamp) {
        const dt = (timestamp - this.lastTimestamp) / 1000;
        this.lastTimestamp = timestamp;
        let topSC = this.rootSceneNavigationController.topSceneController;
        topSC.scene.objects3D.forEach(o => o.update(dt));
        if (topSC.scene.player != null) {
            topSC.scene.player.update(dt);
        }
        topSC.scene.enemies.forEach(e => e.update(dt));
        this.render();
        requestAnimationFrame(this.update.bind(this));
    }
    render() {
        this.glContext.clear(this.glContext.COLOR_BUFFER_BIT | this.glContext.DEPTH_BUFFER_BIT);
        let topSC = this.rootSceneNavigationController.topSceneController;
        // draw 2D sprites
        if (topSC != null) {
            topSC.update();
            this.masterRenderer.render(topSC.scene);
        }
    }
    createProgram2D(vertextShaderCode, fragmentShaderCode, programName) {
        let shader = new shading_program_2d_1.ShadingProgram2d(this.glContext, vertextShaderCode, fragmentShaderCode);
        this.shadingProgram2d = shader;
    }
    createProgram3D(vertextShaderCode, fragmentShaderCode, programName) {
        let shader = new shading_program_3d_1.ShadingProgram3d(this.glContext, vertextShaderCode, fragmentShaderCode);
        this.shadingProgram3d = shader;
    }
    createTextureWithImage(key, image) {
        let texture = texture_1.Texture.createTextureFromImage(this.glContext, image);
        shared_textures_1.SharedTextures.Instance.setTexture(key, texture);
    }
    loadModel(data, name) {
        let model = new ogex_loader_1.OGexLoader().parse(data);
        shared_geometry_1.SharedGeometry.Instance.registerModel(name, model);
    }
    resize(canvas) {
        var cssToRealPixels = window.devicePixelRatio || 1;
        // Lookup the size the browser is displaying the canvas in CSS pixels
        // and compute a size needed to make our drawingbuffer match it in
        // device pixels.
        var displayWidth = Math.floor(canvas.clientWidth * cssToRealPixels);
        var displayHeight = Math.floor(canvas.clientHeight * cssToRealPixels);
        // Check if the canvas is not the same size.
        if (canvas.width !== displayWidth ||
            canvas.height !== displayHeight) {
            // Make the canvas the same size
            canvas.width = displayWidth;
            canvas.height = displayHeight;
        }
        this.rootSceneNavigationController.topSceneController.scene.width = canvas.width / cssToRealPixels;
        this.rootSceneNavigationController.topSceneController.scene.height = canvas.height / cssToRealPixels;
        this.rootSceneNavigationController.sceneControllers.forEach(element => {
            element.sceneDidResize();
        });
        this.masterRenderer.updatePixelRatio(cssToRealPixels);
        this.masterRenderer.updateAspectRatio(canvas.width, canvas.height);
        // Update the projection matrix in RayCaster
        this.rayCaster.projectionMatrix = this.masterRenderer.projectionMatrix;
    }
}
exports.Engine = Engine;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
/// Class containing information about single touch.
class Touch {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.Touch = Touch;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
/// Class responsible for handing texture data
class Texture {
    constructor(textureId) {
        this.textureId = textureId;
    } // the address of the texture data
    // Returns texture address
    get address() {
        return this.textureId;
    }
    static createTextureFromImage(glContext, image) {
        var texture = glContext.createTexture(); // Create a texture
        glContext.bindTexture(glContext.TEXTURE_2D, texture); // Bind the texture
        // Set the parameters so we don't need mips and so we're not filtering
        // and we don't repeat
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
        // Upload the image into the texture.
        var mipLevel = 0; // the largest mip
        var internalFormat = glContext.RGBA; // format we want in the texture
        var srcFormat = glContext.RGBA; // format of data we are supplying
        var srcType = glContext.UNSIGNED_BYTE; // type of data we are supplying
        glContext.texImage2D(glContext.TEXTURE_2D, mipLevel, internalFormat, srcFormat, srcType, image);
        glContext.bindTexture(glContext.TEXTURE_2D, null); // Undbind the texture
        return new Texture(texture);
    }
}
exports.Texture = Texture;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const sprite_renderer_1 = __webpack_require__(26);
const object3d_renderer_1 = __webpack_require__(30);
/// Class responsible for rendering 
class MasterRenderer {
    constructor(glContext, shadingProgram2d, shadingProgram3d) {
        this.glContext = glContext;
        this.shadingProgram2d = shadingProgram2d;
        this.shadingProgram3d = shadingProgram3d;
        this.spriteRenderer = new sprite_renderer_1.SpriteRenderer(shadingProgram2d, glContext);
        this.object3dRender = new object3d_renderer_1.Object3dRenderer(shadingProgram3d, glContext);
    }
    updateAspectRatio(width, height) {
        this.glContext.viewport(0, 0, width, height);
        this.object3dRender.updateProjectionMatrix(width, height);
    }
    updatePixelRatio(ratio) {
        this.spriteRenderer.updatePixelRatio(ratio);
    }
    get projectionMatrix() {
        return this.object3dRender.projectionMatrix;
    }
    /// Renders the scene
    render(scene) {
        this.object3dRender.render(scene);
        this.spriteRenderer.render(scene);
    }
}
exports.MasterRenderer = MasterRenderer;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const sprite_batch_1 = __webpack_require__(27);
/// Class responsible for rendering sprites
class SpriteRenderer {
    constructor(shadingProgram, glContext) {
        this.shadingProgram = shadingProgram;
        this.glContext = glContext;
        this.spriteBatch = new sprite_batch_1.SpriteBatch(shadingProgram, this.glContext);
    }
    updatePixelRatio(ratio) {
        this.spriteBatch.updatePixelRatio(ratio);
    }
    /// Renders scene's sprites
    render(scene) {
        this.spriteBatch.begin();
        scene.layers.forEach(layer => {
            layer.sprites.forEach(item => {
                this.spriteBatch.draw(item);
            });
        });
        this.spriteBatch.flush();
    }
}
exports.SpriteRenderer = SpriteRenderer;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector2_1 = __webpack_require__(3);
const vector2_array_1 = __webpack_require__(4);
const shading_program_2d_1 = __webpack_require__(14);
class SpriteBatch {
    constructor(shadingProgram, glContext) {
        this.shadingProgram = shadingProgram;
        this.glContext = glContext;
        this.vertexCount = 0;
        this.pixelRatio = 1;
        this.vertexBuffer = glContext.createBuffer();
        this.textureBuffer = glContext.createBuffer();
        this.vertices = new vector2_array_1.Vector2Array([]);
        this.textCoords = new vector2_array_1.Vector2Array([]);
    }
    /// Binds vertex buffer as current buffer
    begin() {
        this.currentTexture = null;
        this.vertexCount = 0;
        this.vertices.clear();
        this.textCoords.clear();
        // turn on depth testing
        this.glContext.disable(this.glContext.DEPTH_TEST);
        this.glContext.disable(this.glContext.CULL_FACE);
    }
    /// Adds a single sprite to draw batch
    draw(sprite) {
        if (this.currentTexture == null) {
            this.currentTexture = sprite.texture;
        }
        // if different texture is used for rendering - flush the content on to the screen
        if (this.currentTexture != sprite.texture) {
            this.flush();
            this.begin();
        }
        let f = sprite.frame;
        let v1 = new vector2_1.Vector2(f.x * this.pixelRatio, f.y * this.pixelRatio);
        let v2 = new vector2_1.Vector2(f.right * this.pixelRatio, f.y * this.pixelRatio);
        let v3 = new vector2_1.Vector2(f.x * this.pixelRatio, f.bottom * this.pixelRatio);
        let v4 = v2;
        let v5 = new vector2_1.Vector2(f.right * this.pixelRatio, f.bottom * this.pixelRatio);
        let v6 = v3;
        this.vertices.push(v1);
        this.vertices.push(v2);
        this.vertices.push(v3);
        this.vertices.push(v4);
        this.vertices.push(v5);
        this.vertices.push(v6);
        let t1 = new vector2_1.Vector2(0, 0);
        let t2 = new vector2_1.Vector2(1, 0);
        let t3 = new vector2_1.Vector2(0, 1);
        let t4 = t2;
        let t5 = new vector2_1.Vector2(1, 1);
        let t6 = t3;
        this.textCoords.push(t1);
        this.textCoords.push(t2);
        this.textCoords.push(t3);
        this.textCoords.push(t4);
        this.textCoords.push(t5);
        this.textCoords.push(t6);
        this.vertexCount += 6;
    }
    /// Flushes the data to the GPU
    flush() {
        this.glContext.bindTexture(this.glContext.TEXTURE_2D, this.currentTexture.address);
        // Set the program shader as current program
        this.shadingProgram.useProgram();
        // setup vertices
        // set the shader attribute
        let resolutionUniformLocation = this.shadingProgram.getLocation(shading_program_2d_1.ShadingProgram2dLocations.RESOLUTION);
        // Pass in the canvas resolution so we can convert from
        // pixels to clipspace in the shader
        this.glContext.uniform2f(resolutionUniformLocation, this.glContext.canvas.width, this.glContext.canvas.height);
        // Bind the current buffer
        this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, this.vertexBuffer);
        // Pass down the buffer data
        this.glContext.bufferData(this.glContext.ARRAY_BUFFER, new Float32Array(this.vertices.data), this.glContext.STATIC_DRAW);
        // Enable attribute location
        let positionLocation = this.shadingProgram.getLocation(shading_program_2d_1.ShadingProgram2dLocations.POSITION);
        this.glContext.enableVertexAttribArray(positionLocation);
        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        var size = 2; // 2 components per iteration
        var type = this.glContext.FLOAT; // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0; // start at the beginning of the buffer
        this.glContext.vertexAttribPointer(positionLocation, size, type, normalize, stride, offset);
        // Handle textures
        let textureLocation = this.shadingProgram.getLocation(shading_program_2d_1.ShadingProgram2dLocations.TEXTURE_COORDINATES);
        // Bind the texture buffer
        this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, this.textureBuffer);
        // Pass down the buffer data
        this.glContext.bufferData(this.glContext.ARRAY_BUFFER, new Float32Array(this.textCoords.data), this.glContext.STATIC_DRAW);
        this.glContext.enableVertexAttribArray(textureLocation);
        this.glContext.vertexAttribPointer(textureLocation, size, type, normalize, stride, offset);
        this.glContext.drawArrays(this.glContext.TRIANGLES, offset, this.vertexCount);
        // disable attribute locations
        this.glContext.disableVertexAttribArray(positionLocation);
        this.glContext.disableVertexAttribArray(textureLocation);
    }
    updatePixelRatio(ratio) {
        this.pixelRatio = ratio;
    }
}
exports.SpriteBatch = SpriteBatch;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
/// Class responsible for holding shader data
class Shader {
    constructor(shaderId) {
        this.shaderId = shaderId;
    }
    /// Creates shader from the given source
    static createFromSource(glContext, source, type) {
        // create shader object
        let shader = glContext.createShader(type);
        // Load the shader source
        glContext.shaderSource(shader, source);
        // Compile the shader
        glContext.compileShader(shader);
        // Check the compile status
        var compiled = glContext.getShaderParameter(shader, glContext.COMPILE_STATUS);
        if (!compiled) {
            // Something went wrong during compilation; get the error
            var lastError = glContext.getShaderInfoLog(shader);
            glContext.deleteShader(shader);
            console.log(lastError);
            return null;
        }
        return new Shader(shader);
    }
}
exports.Shader = Shader;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
/// Class responsible for handling WebGL program.
class Program {
    constructor(programId) {
        this.programId = programId;
    }
    /// Creates WebGL program from the given shaders
    static createProgram(glContext, vertexShader, fragmentShader) {
        // Create empty program
        let program = glContext.createProgram();
        // Attach shaders to the program
        glContext.attachShader(program, vertexShader.shaderId);
        glContext.attachShader(program, fragmentShader.shaderId);
        // Link program
        glContext.linkProgram(program);
        // Check the link status
        let linked = glContext.getProgramParameter(program, glContext.LINK_STATUS);
        if (!linked) {
            // something went wrong with the link
            var lastError = glContext.getProgramInfoLog(program);
            console.log("Error in program linking:" + lastError);
            glContext.deleteProgram(program);
            return null;
        }
        // Shaders are not needed any more - detach them 
        // Normally they should be detached but there is problem in Safari. For now, detachement is commented out
        //glContext.detachShader(program, fragmentShader.shaderId);
        //glContext.detachShader(program, vertexShader.shaderId);
        return new Program(program);
    }
}
exports.Program = Program;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const shading_program_3d_1 = __webpack_require__(16);
const matrix_4x4_1 = __webpack_require__(10);
const math_helper_1 = __webpack_require__(8);
/// Class responsible for rendering 3d objects
class Object3dRenderer {
    constructor(shadingProgram, glContext) {
        this.shadingProgram = shadingProgram;
        this.glContext = glContext;
        this._projectionMatrix = [];
        this._projectionMatrix = matrix_4x4_1.Matrix4x4.identity();
        this.fieldOfViewRadians = math_helper_1.MathHelper.degToRad(60);
    }
    get projectionMatrix() {
        return this._projectionMatrix;
    }
    updateProjectionMatrix(width, height) {
        this._projectionMatrix = matrix_4x4_1.Matrix4x4.perspective(this.fieldOfViewRadians, width / height, 1, 2000);
    }
    render(scene) {
        this.glContext.enable(this.glContext.DEPTH_TEST); // turn on depth testing
        this.glContext.enable(this.glContext.CULL_FACE); // tell webgl to cull faces
        this.shadingProgram.useProgram();
        scene.objects3D.forEach(obj => {
            let textureAddress = obj.texture.address;
            this.glContext.bindTexture(this.glContext.TEXTURE_2D, textureAddress);
            let model = obj.model;
            let positionLocation = this.shadingProgram.getLocation(shading_program_3d_1.ShadingProgram3dLocations.POSITION);
            let matrixLocation = this.shadingProgram.getLocation(shading_program_3d_1.ShadingProgram3dLocations.MATRIX);
            let textureLocation = this.shadingProgram.getLocation(shading_program_3d_1.ShadingProgram3dLocations.TEXTURE);
            this.glContext.bindBuffer(this.glContext.ELEMENT_ARRAY_BUFFER, model.modelBufferInfo.indiciesBufferInfo.glBuffer);
            // Tell WebGL how to pull out the positions from the position
            // buffer into the vertexPosition attribute 
            let vertsOffset = model.modelBufferInfo.verticesBufferInfo.offset;
            this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, model.modelBufferInfo.verticesBufferInfo.glBuffer);
            this.glContext.vertexAttribPointer(positionLocation, 3, this.glContext.FLOAT, false, 0, vertsOffset * 4); // * 4 - is the size of float
            this.glContext.enableVertexAttribArray(positionLocation);
            // Texture
            let textOffset = model.modelBufferInfo.textureBufferInfo.offset;
            this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, model.modelBufferInfo.textureBufferInfo.glBuffer);
            this.glContext.vertexAttribPointer(textureLocation, 2, this.glContext.FLOAT, false, 0, textOffset * 4); // * 4 - is the size of float
            this.glContext.enableVertexAttribArray(textureLocation);
            let viewMatrix = scene.camera.viewMatrix;
            var MVP = matrix_4x4_1.Matrix4x4.multiply(this._projectionMatrix, viewMatrix);
            let pos = obj.position;
            MVP = matrix_4x4_1.Matrix4x4.translate(MVP, pos.x, pos.y, pos.z);
            MVP = matrix_4x4_1.Matrix4x4.xRotate(MVP, math_helper_1.MathHelper.degToRad(obj.rotation.x));
            MVP = matrix_4x4_1.Matrix4x4.yRotate(MVP, math_helper_1.MathHelper.degToRad(obj.rotation.y));
            MVP = matrix_4x4_1.Matrix4x4.zRotate(MVP, math_helper_1.MathHelper.degToRad(obj.rotation.z));
            let scale = obj.scale;
            MVP = matrix_4x4_1.Matrix4x4.scale(MVP, scale.x, scale.y, scale.z);
            // Compute a view projection matrix
            this.glContext.uniformMatrix4fv(matrixLocation, false, MVP);
            // Draw the geometry.
            let primitiveType = this.glContext.TRIANGLES;
            let offset = model.modelBufferInfo.indiciesBufferInfo.offset;
            let vertexCount = model.indicesCount;
            let type = this.glContext.UNSIGNED_SHORT;
            this.glContext.drawElements(this.glContext.TRIANGLES, vertexCount, type, offset * 2); // * 2 - is size of unsigned short
        });
    }
}
exports.Object3dRenderer = Object3dRenderer;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector3_array_1 = __webpack_require__(5);
const vector2_array_1 = __webpack_require__(4);
const object3d_1 = __webpack_require__(6);
const model_1 = __webpack_require__(9);
const shared_geometry_1 = __webpack_require__(2);
const shared_textures_1 = __webpack_require__(1);
class Cube extends object3d_1.Object3D {
    onInit() {
        this.model = shared_geometry_1.SharedGeometry.Instance.modelForName("cube");
        this.texture = shared_textures_1.SharedTextures.Instance.getTexture("fx");
    }
}
exports.Cube = Cube;
class CubeModel extends model_1.Model {
    constructor() {
        super(...arguments);
        this.vertices = new vector3_array_1.Vector3Array([
            // Front face
            -1.0, -1.0, 1.0,
            1.0, -1.0, 1.0,
            1.0, 1.0, 1.0,
            -1.0, 1.0, 1.0,
            // Back face
            -1.0, -1.0, -1.0,
            -1.0, 1.0, -1.0,
            1.0, 1.0, -1.0,
            1.0, -1.0, -1.0,
            // // Top face
            -1.0, 1.0, -1.0,
            -1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, -1.0,
            // // Bottom face
            -1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            1.0, -1.0, 1.0,
            -1.0, -1.0, 1.0,
            // // Right face
            1.0, -1.0, -1.0,
            1.0, 1.0, -1.0,
            1.0, 1.0, 1.0,
            1.0, -1.0, 1.0,
            // // Left face
            -1.0, -1.0, -1.0,
            -1.0, -1.0, 1.0,
            -1.0, 1.0, 1.0,
            -1.0, 1.0, -1.0,
        ]);
        this.indices = new vector3_array_1.Vector3Array([
            0, 1, 2, 0, 2, 3,
            4, 5, 6, 4, 6, 7,
            8, 9, 10, 8, 10, 11,
            12, 13, 14, 12, 14, 15,
            16, 17, 18, 16, 18, 19,
            20, 21, 22, 20, 22, 23 // left
        ]);
        this.textureCoordinates = new vector2_array_1.Vector2Array([
            // Front
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            // Back
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            // Top
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            // Bottom
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            // Right
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            // Left
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ]);
    }
}
exports.CubeModel = CubeModel;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector3_1 = __webpack_require__(0);
const vector2_1 = __webpack_require__(3);
const point_1 = __webpack_require__(7);
class Physics {
    static rectOverlap(r1, r2) {
        if (Math.max(r1.x, r1.x + r1.width) < Math.min(r2.x, r2.x + r2.width))
            return false;
        if (Math.min(r1.x, r1.x + r1.width) > Math.max(r2.x, r2.x + r2.width))
            return false;
        if (Math.max(r1.y, r1.y + r1.height) < Math.min(r2.y, r2.y + r2.height))
            return false;
        if (Math.min(r1.y, r1.y + r1.height) > Math.max(r2.y, r2.y + r2.height))
            return false;
        return true;
    }
    static checkForCollisions(current, objects) {
        if (!current.collider) {
            return false;
        }
        let isColliding = false;
        let colliderRect = current.collider.rect;
        let boundingBox = colliderRect.transformAroundPoint(new point_1.Point(current.position.x, current.position.z));
        objects.forEach(element => {
            if (current != element && element.collider != null) {
                let otherCollidingRect = element.collider.rect;
                let otherBox = colliderRect.transformAroundPoint(new point_1.Point(element.position.x, element.position.z));
                if (Physics.rectOverlap(boundingBox, otherBox)) {
                    isColliding = true;
                }
            }
        });
        // const mid1 = (current.collider as BoxCollider).rect.middle;
        // const coll1 = current.collider as BoxCollider;
        // const gridPoint1 = this.worldPointToGridPoint(current.localToWorld(this.gridPointToWorldPoint(mid1)));
        // const rc1 = Rectangle.fromMiddlePoint(gridPoint1,coll1.rect.size );
        // objects.forEach(other => {
        //     if(other !== current && other.collider && other.collider instanceof BoxCollider) {
        //         if(other instanceof Cube) {
        //             const coll2 = other.collider as BoxCollider;
        //             const mid2 = coll2.rect.middle;
        //             const gridPoint2 = this.worldPointToGridPoint(other.localToWorld(this.gridPointToWorldPoint(mid2)));
        //             const rc2 = Rectangle.fromMiddlePoint(gridPoint2, coll2.rect.size);
        //             if (Physics.rectOverlap(rc1, rc2)) {
        //                 isColliding = true;
        //             }
        //         }
        //     }
        // });
        return isColliding;
    }
    static worldPointToGridPoint(pt) {
        return new vector2_1.Vector2(pt.x, pt.z);
    }
    static gridPointToWorldPoint(pt) {
        return new vector3_1.Vector3(pt.x, 0, pt.y);
    }
}
exports.Physics = Physics;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
class ModelBufferInfo {
    constructor() {
        this.verticesBufferInfo = new BufferDataInfo();
        this.indiciesBufferInfo = new BufferDataInfo();
        this.textureBufferInfo = new BufferDataInfo();
    }
}
exports.ModelBufferInfo = ModelBufferInfo;
class BufferDataInfo {
}
exports.BufferDataInfo = BufferDataInfo;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector2_array_1 = __webpack_require__(4);
const vector3_array_1 = __webpack_require__(5);
const model_1 = __webpack_require__(9);
const object3d_1 = __webpack_require__(6);
const shared_geometry_1 = __webpack_require__(2);
const shared_textures_1 = __webpack_require__(1);
class Triangle extends object3d_1.Object3D {
    onInit() {
        this.model = shared_geometry_1.SharedGeometry.Instance.modelForName("triangle");
        this.texture = shared_textures_1.SharedTextures.Instance.getTexture("fx");
    }
}
exports.Triangle = Triangle;
class TriangleModel extends model_1.Model {
    constructor() {
        super(...arguments);
        this.vertices = new vector3_array_1.Vector3Array([
            -0.5, 0.5, 0.0,
            -0.5, -0.5, 0.0,
            0.5, -0.5, 0.0
        ]);
        this.indices = new vector3_array_1.Vector3Array([
            0, 1, 2
        ]);
        this.textureCoordinates = new vector2_array_1.Vector2Array([
            0.0, 0.0, 1.0, 0.0, 0.0, 1.0
        ]);
    }
}
exports.TriangleModel = TriangleModel;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __webpack_require__(9);
const vector3_array_1 = __webpack_require__(5);
const vector2_array_1 = __webpack_require__(4);
class OGexLoader {
    constructor() {
        this.iterator = 0;
    }
    parse(data) {
        while (this.iterator < data.length) {
            var nextToken = this.readNextToken(data);
            switch (nextToken) {
                case OGexLoader.METRIC_TOKEN:
                    let metric = this.readMetricData(data);
                    break;
                case OGexLoader.GEOMETRY_OBJECT_DATA_TOKEN:
                    return this.readGeometryData(data);
                default:
                    this.iterator += 1;
            }
        }
        return null;
    }
    readMetricData(data) {
        var proprety = this.readProperty(data);
        var value = this.readValue(data);
        return new Metric(proprety, value);
    }
    readGeometryData(data) {
        let model = new model_1.Model();
        let name = this.readNameReference(data);
        var numberOfOpeningBrackets = 0;
        var numberOfClosingBrackets = 0;
        var nextToken = this.readNextToken(data);
        // move to opening bracket
        while (nextToken != OGexLoader.OPENING_BRACKET) {
            nextToken = this.readNextToken(data);
        }
        //read all the data
        while (this.iterator < data.length) {
            var next_token = this.readNextToken(data);
            switch (next_token) {
                case OGexLoader.OPENING_BRACKET:
                    numberOfOpeningBrackets += 1;
                    break;
                case OGexLoader.CLOSING_BRACKET:
                    numberOfClosingBrackets += 1;
                    break;
                case OGexLoader.MESH_TOKEN:
                    let p1 = this.readProperty(data);
                    break;
                case OGexLoader.VERTEX_TOKEN:
                    let prop = this.readProperty(data);
                    let vData = this.readVertexData(data);
                    switch (prop.value) {
                        case "position":
                            model.vertices = vData;
                            break;
                        case "normal":
                            model.normals = vData;
                            break;
                        case "color":
                            model.colors = vData;
                            break;
                        case "texcoord":
                            model.textureCoordinates = vData;
                            break;
                    }
                    break;
                case OGexLoader.INDEX_ARRAY_TOKEN:
                    model.indices = this.readVertexData(data);
                    break;
            }
            this.iterator += 1;
        }
        return model;
    }
    readVertexData(data) {
        var numberOfOpeningTags = 0;
        var numberOfClosingTags = 0;
        var vertextComponents = 0;
        var tempChar = "";
        var buffer = "";
        // read number of components
        // 1. find opening square bracket
        while (data[this.iterator] != OGexLoader.OPENING_SQUARE_BRACKET) {
            this.iterator += 1;
        }
        this.iterator += 1; // move to real value
        // 2. read the data inside square brackets
        while (data[this.iterator] != OGexLoader.CLOSING_SQUARE_BRACKET) {
            buffer += data[this.iterator];
            this.iterator += 1;
        }
        vertextComponents = Number(buffer);
        // read data
        numberOfOpeningTags = 0; // system aleardy loaded first bracket of the data. The second one is to inform that all data has been loaded
        numberOfClosingTags = 0;
        var dataArray = [];
        while (!(numberOfOpeningTags > 0 && (numberOfOpeningTags == numberOfClosingTags))) {
            let t = this.readNextToken(data);
            switch (t) {
                case OGexLoader.OPENING_BRACKET:
                    numberOfOpeningTags += 1;
                    break;
                case OGexLoader.CLOSING_BRACKET:
                    numberOfClosingTags += 1;
                    break;
                default:
                    if (numberOfOpeningTags >= 2) {
                        dataArray.push(Number(t));
                    }
            }
        }
        if (vertextComponents == 2) {
            return new vector2_array_1.Vector2Array(dataArray);
        }
        else if (vertextComponents == 3) {
            return new vector3_array_1.Vector3Array(dataArray);
        }
        else {
            return null;
        }
    }
    readNameReference(data) {
        let token = this.readNextToken(data);
        return token.substring(1, token.length);
    }
    readNextToken(data) {
        var buffer = "";
        var tempChar = "";
        while (this.iterator < data.length) {
            tempChar = data[this.iterator];
            if ((tempChar == OGexLoader.OPENING_BRACKET ||
                tempChar == OGexLoader.CLOSING_BRACKET) && buffer.length == 0) {
                this.iterator += 1;
                return tempChar;
            }
            switch (tempChar) {
                case OGexLoader.SLASH: break;
                case OGexLoader.OPENING_PARENTESIS:
                case OGexLoader.CLOSING_PARENTESIS:
                case OGexLoader.OPENING_BRACKET:
                case OGexLoader.CLOSING_BRACKET:
                case OGexLoader.EMPTY_SPACE:
                case OGexLoader.TABS:
                case OGexLoader.COMMA:
                case OGexLoader.LINE_END:
                    var trimmedBuffer = buffer.trim();
                    if (trimmedBuffer.length > 0) {
                        trimmedBuffer = trimmedBuffer.replace(/['"]+/g, '');
                        return trimmedBuffer;
                    }
                    break;
                default:
                    buffer += tempChar;
            }
            this.iterator += 1;
        }
    }
    // read value between parentesis
    readProperty(data) {
        let key = this.readNextToken(data);
        let equalSign = this.readNextToken(data);
        let value = this.readNextToken(data);
        return new Property(key, value);
    }
    readValue(data) {
        var numberOfOpeningTags = 0;
        var numberOfClosingTags = 0;
        var buffer = "";
        var value = new Value();
        while (!(numberOfOpeningTags > 0 && (numberOfOpeningTags == numberOfClosingTags))) {
            let tempChar = data[this.iterator];
            switch (tempChar) {
                case OGexLoader.OPENING_BRACKET:
                case OGexLoader.CLOSING_BRACKET:
                    if (buffer.length > 0) {
                        if (value.type == null) {
                            value.type = buffer.trim();
                            buffer = "";
                        }
                        else {
                            if (buffer.indexOf(OGexLoader.QUOTE_SIGN) !== -1) {
                                value.stringData = buffer;
                            }
                            else {
                                value.arrayData = buffer.split(",").map(Number);
                            }
                            buffer = "";
                        }
                    }
                    break;
                case OGexLoader.EMPTY_SPACE:
                    break;
                default:
                    buffer += tempChar;
            }
            switch (tempChar) {
                case OGexLoader.OPENING_BRACKET:
                    numberOfOpeningTags += 1;
                    break;
                case OGexLoader.CLOSING_BRACKET:
                    numberOfClosingTags += 1;
                    break;
            }
            this.iterator += 1;
        }
        return value;
    }
}
OGexLoader.METRIC_TOKEN = "Metric";
OGexLoader.OPENING_PARENTESIS = "(";
OGexLoader.CLOSING_PARENTESIS = ")";
OGexLoader.OPENING_BRACKET = "{";
OGexLoader.CLOSING_BRACKET = "}";
OGexLoader.CLOSING_SQUARE_BRACKET = "]";
OGexLoader.OPENING_SQUARE_BRACKET = "[";
OGexLoader.EMPTY_SPACE = " ";
OGexLoader.EQUAL_SIGN = "=";
OGexLoader.QUOTE_SIGN = "\"";
OGexLoader.LINE_END = "\n";
OGexLoader.SLASH = "/";
OGexLoader.TABS = "\t";
OGexLoader.COMMA = ",";
OGexLoader.FLOAT_DATA_TYPE = "float";
OGexLoader.NODE_DATA_TOKEN = "Node";
OGexLoader.GEOMETRY_OBJECT_DATA_TOKEN = "GeometryObject";
OGexLoader.INDEX_ARRAY_TOKEN = "IndexArray";
OGexLoader.MESH_TOKEN = "Mesh";
OGexLoader.VERTEX_TOKEN = "VertexArray";
exports.OGexLoader = OGexLoader;
class Property {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    print() {
        console.log("=========================================================");
        console.log("Property: ");
        console.log("Key " + this.key);
        console.log("Value " + this.value);
        console.log("=========================================================");
    }
}
class Metric {
    constructor(property, value) {
        this.property = property;
        this.value = value;
    }
    print() {
        console.log("=========================================================");
        console.log("Metric: ");
        console.log("Property " + this.property.key + " " + this.property.value);
        console.log("Array value " + this.value.type + " " + this.value.arrayData);
        console.log("String data " + this.value.stringData);
        console.log("=========================================================");
    }
}
class Value {
}
exports.Value = Value;
class VertexArray {
    constructor(primitive) {
        this.primitive = primitive;
    }
}
exports.VertexArray = VertexArray;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector3_1 = __webpack_require__(0);
const vector2_1 = __webpack_require__(3);
const matrix_4x4_1 = __webpack_require__(10);
const point_1 = __webpack_require__(7);
class Ray {
    constructor(point = vector3_1.Vector3.zero, direction = vector3_1.Vector3.zero) {
        this.point = point;
        this.direction = direction;
    }
}
exports.Ray = Ray;
class RayCaster {
    constructor(camera, canvas) {
        this.camera = camera;
        this.canvas = canvas;
        this.viewMatrix = [];
        this.projectionMatrix = matrix_4x4_1.Matrix4x4.identity();
    }
    currentRay(point) {
        let ratio = window.devicePixelRatio || 1;
        let scaledPoint = new point_1.Point(point.x * ratio, point.y * ratio);
        let directionVector = this.calculateMouseDirection(scaledPoint);
        return new Ray(this.camera.position, directionVector);
    }
    getNormalizedDeviceCoords(point) {
        let x = (2 * point.x) / this.canvas.width - 1;
        let y = 1.0 - (2 * point.y) / this.canvas.height;
        return new vector2_1.Vector2(x, y);
    }
    toEyeCoords(clippingCoords) {
        let invertedProjectionMatrix = matrix_4x4_1.Matrix4x4.inverse(this.projectionMatrix);
        let eyeCoords = matrix_4x4_1.Matrix4x4.multiply(invertedProjectionMatrix, clippingCoords);
        return [eyeCoords[0], eyeCoords[1], -1.0, 0.0];
    }
    toWorldCoords(eyeCoords) {
        let invertedView = matrix_4x4_1.Matrix4x4.inverse(this.viewMatrix);
        let rayWorld = matrix_4x4_1.Matrix4x4.multiply(invertedView, eyeCoords);
        let mouseRay = new vector3_1.Vector3(rayWorld[0], rayWorld[1], rayWorld[2]);
        return vector3_1.Vector3.normalize(mouseRay);
    }
    calculateMouseDirection(point) {
        // Get view matrix from camera
        this.viewMatrix = this.camera.viewMatrix;
        let mouseCoords = this.getNormalizedDeviceCoords(point);
        let clippingCoords = [mouseCoords.x, mouseCoords.y, -1.0, 1.0];
        let eyeCoords = this.toEyeCoords(clippingCoords);
        let worldRay = this.toWorldCoords(eyeCoords);
        return worldRay;
    }
}
exports.RayCaster = RayCaster;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const scene_controller_1 = __webpack_require__(17);
const game_scene_controller_1 = __webpack_require__(40);
const layer_1 = __webpack_require__(18);
const rectangle_1 = __webpack_require__(11);
const button_1 = __webpack_require__(48);
class MainSceneController extends scene_controller_1.SceneController {
    sceneDidLoad() {
        super.sceneDidLoad();
        let layer = new layer_1.Layer();
        this.scene.addLayer(layer);
        this.playButton = new button_1.Button(rectangle_1.Rectangle.zero);
        this.playButton.tapAction = () => {
            this.sceneNavigationController.pushSceneController(new game_scene_controller_1.GameSceneController());
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
        this.playButton.frame = new rectangle_1.Rectangle(buttonPosX, buttonPosY, buttonWidth, buttonHeight);
    }
}
exports.MainSceneController = MainSceneController;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector3_1 = __webpack_require__(0);
const camera_1 = __webpack_require__(39);
/// Class responsible for managing objects and layers within single logical container
class Scene {
    constructor() {
        this._layers = []; // All layer that were added to the scene
        this._objects3D = []; // All 3d objects placed in the scene
        this._enemies = [];
        let pos = new vector3_1.Vector3(15, 20, 15);
        let up = new vector3_1.Vector3(0, 1, 0);
        let target = new vector3_1.Vector3(0, 0, 0);
        this.camera = new camera_1.Camera(pos, target, up);
    }
    /// Returns all layers added to this scene
    get layers() {
        return this._layers;
    }
    /// Returns all 3d objects added to this scene
    get objects3D() {
        return this._objects3D;
    }
    get enemies() {
        return this._enemies;
    }
    get player() {
        return this._player;
    }
    /// Adds new layer to the scene
    addLayer(layer) {
        this._layers.push(layer);
    }
    /// Add 3d object to the scene
    addObject3D(object) {
        object.scene = this;
        this._objects3D.push(object);
    }
    setPlayer(player) {
        this.addObject3D(player.sceneObject);
        this._player = player;
    }
    addEnemy(enemy) {
        this.addObject3D(enemy.sceneObject);
        this._enemies.push(enemy);
    }
}
exports.Scene = Scene;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector3_1 = __webpack_require__(0);
const matrix_4x4_1 = __webpack_require__(10);
const math_helper_1 = __webpack_require__(8);
/// Camera
class Camera {
    constructor(position, target, up) {
        this.cameraPitch = 20;
        this.cameraAroundPointAngle = 0;
        this.cameraDistanceToPoint = 20;
        this._position = vector3_1.Vector3.zero;
        this._target = vector3_1.Vector3.zero;
        this._up = vector3_1.Vector3.zero;
        this._position = position;
        this._target = target;
        this._up = up;
    }
    set position(value) {
        this._position = value;
    }
    get position() {
        return new vector3_1.Vector3(this._position.x, this._position.y, this._position.z);
    }
    set target(value) {
        this._target = value;
    }
    get target() {
        return new vector3_1.Vector3(this._target.x, this._target.y, this._target.z);
    }
    updateRotation(offsetX, offsetY) {
        this.cameraPitch += offsetY;
        console.log("Pitch " + this.cameraPitch);
        if (this.cameraPitch >= 90) {
            this.cameraPitch = 90;
        }
        if (this.cameraPitch <= -90) {
            this.cameraPitch = -90;
        }
        this.cameraAroundPointAngle += offsetX;
        this.position.y = this.calculateVerticalDistance();
        let horizontalDistance = this.calculateHorizontalDistance();
        let newX = horizontalDistance * Math.cos(math_helper_1.MathHelper.degToRad(this.cameraAroundPointAngle));
        let newZ = horizontalDistance * Math.sin(math_helper_1.MathHelper.degToRad(this.cameraAroundPointAngle));
        this.position.x = newX;
        this.position.z = newZ;
        console.log("x " + newX + " z " + newZ);
    }
    calculateHorizontalDistance() {
        return this.cameraDistanceToPoint * Math.cos(math_helper_1.MathHelper.degToRad(this.cameraPitch));
    }
    calculateVerticalDistance() {
        return this.cameraDistanceToPoint * Math.sin(math_helper_1.MathHelper.degToRad(this.cameraPitch));
    }
    get viewMatrix() {
        // Compute the camera's matrix using look at.
        var cameraMatrix = matrix_4x4_1.Matrix4x4.lookAt(this._position, this._target, this._up);
        // Make a view matrix from the camera matrix
        return matrix_4x4_1.Matrix4x4.inverse(cameraMatrix);
    }
}
exports.Camera = Camera;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const scene_controller_1 = __webpack_require__(17);
const layer_1 = __webpack_require__(18);
const rectangle_1 = __webpack_require__(11);
const grass_1 = __webpack_require__(19);
const point_1 = __webpack_require__(7);
const vector3_1 = __webpack_require__(0);
const player_1 = __webpack_require__(41);
const enemy_1 = __webpack_require__(42);
const knight_1 = __webpack_require__(43);
const knight_enemy_1 = __webpack_require__(44);
const crate_1 = __webpack_require__(45);
const math_helper_1 = __webpack_require__(8);
const banner_1 = __webpack_require__(46);
class LogicPlane {
    constructor(normal = vector3_1.Vector3.zero, d = 0) {
        this.normal = normal;
        this.d = d;
    }
}
class GameSceneController extends scene_controller_1.SceneController {
    constructor() {
        super(...arguments);
        this.worldBounds = new rectangle_1.Rectangle(50, 50, 200, 200);
        this.knight = new knight_1.Knight(new vector3_1.Vector3(100, 0, 100));
        this.knightEnemy = new knight_enemy_1.KnightEnemy(new vector3_1.Vector3(50, 0, 50));
        this.cameraOriginalLocation = vector3_1.Vector3.zero;
    }
    sceneDidLoad() {
        super.sceneDidLoad();
        this.banner = new banner_1.Banner(rectangle_1.Rectangle.zero);
        let layer = new layer_1.Layer();
        layer.addSprite(this.banner);
        this.scene.addLayer(layer);
        // save intial camera location for futher use
        this.cameraOriginalLocation = this.scene.camera.position;
        let plane = new grass_1.Grass();
        plane.position = new vector3_1.Vector3(-100, 0, -100);
        this.scene.addObject3D(plane);
        this.player = new player_1.Player();
        this.player.sceneObject = this.knight;
        this.enemy = new enemy_1.Enemy(8, this.knightEnemy);
        this.scene.addEnemy(this.enemy);
        this.scene.setPlayer(this.player);
        this.scene.addObject3D(new crate_1.Crate(new vector3_1.Vector3(80, 1, 60)));
        this.scene.addObject3D(new crate_1.Crate(new vector3_1.Vector3(120, 1, 80)));
        this.scene.addObject3D(new crate_1.Crate(new vector3_1.Vector3(150, 1, 75)));
        this.scene.addObject3D(new crate_1.Crate(new vector3_1.Vector3(70, 1, 107)));
        this.scene.addObject3D(new crate_1.Crate(new vector3_1.Vector3(80, 1, 109)));
        this.scene.addObject3D(new crate_1.Crate(new vector3_1.Vector3(40, 1, 60)));
        this.scene.addObject3D(new crate_1.Crate(new vector3_1.Vector3(90, 1, 90)));
        this.scene.addObject3D(new crate_1.Crate(new vector3_1.Vector3(110, 1, 110)));
        this.knight.rotation.x = -90;
        this.knight.scale = new vector3_1.Vector3(0.1, 0.1, 0.1);
        this.knightEnemy.rotation.x = -90;
        this.knightEnemy.scale = new vector3_1.Vector3(0.1, 0.1, 0.1);
    }
    sceneDidResize() {
        super.sceneDidResize();
        let w_2 = this.scene.width / 4.0;
        this.banner.frame = new rectangle_1.Rectangle(0, 0, w_2, w_2 / 4.0);
    }
    touchesBegan(touch) {
        super.touchesBegan(touch);
        let directionVector = this.rayCaster.currentRay(new point_1.Point(touch.x, touch.y));
        let plane = new LogicPlane(new vector3_1.Vector3(0, 10, 0), 0);
        let intersection = this.intersect(directionVector, plane);
        if (intersection != null) {
            //update player rotation
            let playerPos = this.player.sceneObject.position;
            let xOffset = playerPos.x - intersection.x;
            let zOffset = playerPos.z - intersection.z;
            if (zOffset != 0) {
                let angle = zOffset / xOffset;
                let rotation = math_helper_1.MathHelper.radToDeg(Math.atan(angle));
                var targetRotation = -90 - rotation;
                if (playerPos.x < intersection.x) {
                    targetRotation = 90 - rotation;
                }
                let playerRotation = this.player.sceneObject.rotation;
                this.player.sceneObject.rotation = new vector3_1.Vector3(playerRotation.x, playerRotation.y, targetRotation);
            }
            // move player to location
            this.player.movePlayerToLocation(intersection.x, intersection.z);
        }
    }
    update() {
        super.update();
        let playerPos = this.scene.player.sceneObject.position;
        if (playerPos.x <= this.worldBounds.x) {
            playerPos.x = this.worldBounds.x;
        }
        if (playerPos.x >= this.worldBounds.width) {
            playerPos.x = this.worldBounds.width;
        }
        if (playerPos.z >= this.worldBounds.height) {
            playerPos.z = this.worldBounds.height;
        }
        if (playerPos.z >= this.worldBounds.height) {
            playerPos.z = this.worldBounds.height;
        }
        if (playerPos.z <= this.worldBounds.y) {
            playerPos.z = this.worldBounds.y;
        }
        let camPosition = new vector3_1.Vector3(playerPos.x + this.cameraOriginalLocation.x, playerPos.y + this.cameraOriginalLocation.y, playerPos.z + this.cameraOriginalLocation.z);
        this.scene.camera.target = playerPos;
        this.scene.camera.position = camPosition;
    }
    intersect(ray, plane) {
        // from line = p + t * v
        let p = ray.point; // (x1, y1, z1)
        let v = ray.direction; // (Vx, Vz, Vz)
        // from plane: ax + by + cz + d = 0
        let n = plane.normal; // (a, b, c,)
        let d = plane.d; // constant term of d
        // dot product
        let dot1 = vector3_1.Vector3.dot(n, v);
        let dot2 = vector3_1.Vector3.dot(n, p);
        if (dot1 == 0) {
            return null; // no intersect
        }
        // find t = -(a*x1 + b*y1 + c*z1 + d) / (a*Vx + b*Vy + c*Vz)
        let t = -(dot2 + d) / dot1;
        return vector3_1.Vector3.add(p, vector3_1.Vector3.mul(v, t));
    }
}
exports.GameSceneController = GameSceneController;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector3_1 = __webpack_require__(0);
class Player {
    update(dt) { }
    movePlayerToLocation(x, z) {
        this.sceneObject.setTarget(new vector3_1.Vector3(x, 0, z));
    }
}
exports.Player = Player;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const vector3_1 = __webpack_require__(0);
const math_helper_1 = __webpack_require__(8);
class Enemy {
    constructor(movementSpeed, sceneObject) {
        this.movementSpeed = movementSpeed;
        this.sceneObject = sceneObject;
        this.watchRadius = 10;
        this.attackRadius = 3;
        this.attackDelay = 1; //in seconds
        this.timeLeftToAttack = 0;
        sceneObject.speed = movementSpeed;
    }
    update(dt) {
        const player = this.sceneObject.scene.player;
        const playerPos = player.sceneObject.position;
        let isInRange = (Math.pow(this.sceneObject.position.x - playerPos.x, 2) + Math.pow(this.sceneObject.position.z - playerPos.z, 2)) < Math.pow(this.watchRadius, 2);
        if (isInRange) {
            let xOffset = playerPos.x - this.sceneObject.position.x;
            let zOffset = playerPos.z - this.sceneObject.position.z;
            if (zOffset != 0) {
                let angle = zOffset / xOffset;
                var rotation = math_helper_1.MathHelper.radToDeg(Math.atan(angle));
                rotation = 90 - rotation;
                if (playerPos.x < this.sceneObject.position.x) {
                    rotation = -180 + rotation;
                }
                this.sceneObject.rotation = new vector3_1.Vector3(-90, 0, rotation);
            }
            this.sceneObject.setTarget(new vector3_1.Vector3(playerPos.x, this.sceneObject.position.y, playerPos.z));
            this.sceneObject.position.print();
        }
        else {
            this.sceneObject.setTarget(null);
        }
        this.timeLeftToAttack -= dt;
        if (this.timeLeftToAttack < 0) {
            this.timeLeftToAttack = 0;
        }
    }
}
exports.Enemy = Enemy;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const object3d_1 = __webpack_require__(6);
const shared_geometry_1 = __webpack_require__(2);
const shared_textures_1 = __webpack_require__(1);
const vector3_1 = __webpack_require__(0);
const vector2_1 = __webpack_require__(3);
const boxCollider_1 = __webpack_require__(12);
class Knight extends object3d_1.Object3D {
    onInit() {
        this.model = shared_geometry_1.SharedGeometry.Instance.modelForName("knight");
        this.texture = shared_textures_1.SharedTextures.Instance.getTexture("knight");
        this.collider = new boxCollider_1.BoxCollider(new vector3_1.Vector3(0, -0.5, 0), new vector2_1.Vector2(2, 2));
    }
}
exports.Knight = Knight;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const object3d_1 = __webpack_require__(6);
const shared_geometry_1 = __webpack_require__(2);
const shared_textures_1 = __webpack_require__(1);
const vector3_1 = __webpack_require__(0);
const vector2_1 = __webpack_require__(3);
const boxCollider_1 = __webpack_require__(12);
class KnightEnemy extends object3d_1.Object3D {
    onInit() {
        this.model = shared_geometry_1.SharedGeometry.Instance.modelForName("knight");
        this.texture = shared_textures_1.SharedTextures.Instance.getTexture("knight-enemy");
        this.collider = new boxCollider_1.BoxCollider(new vector3_1.Vector3(0, -0.5, 0), new vector2_1.Vector2(2, 2));
    }
}
exports.KnightEnemy = KnightEnemy;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const object3d_1 = __webpack_require__(6);
const shared_geometry_1 = __webpack_require__(2);
const shared_textures_1 = __webpack_require__(1);
const vector3_1 = __webpack_require__(0);
const vector2_1 = __webpack_require__(3);
const boxCollider_1 = __webpack_require__(12);
class Crate extends object3d_1.Object3D {
    onInit() {
        this.model = shared_geometry_1.SharedGeometry.Instance.modelForName("crate");
        this.texture = shared_textures_1.SharedTextures.Instance.getTexture("crate");
        this.collider = new boxCollider_1.BoxCollider(new vector3_1.Vector3(0, -0.5, 0), new vector2_1.Vector2(2, 2));
    }
}
exports.Crate = Crate;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const sprite_1 = __webpack_require__(20);
const shared_textures_1 = __webpack_require__(1);
class Banner extends sprite_1.Sprite {
    onInit() {
        this.texture = shared_textures_1.SharedTextures.Instance.getTexture("banner");
    }
}
exports.Banner = Banner;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
/// Class responsible for managing touches on various elements
class GestureRecognizer {
    /// Parameter action - an action to be performed when this gesture recognizer is invoked.
    constructor(action) {
        this.action = action;
    }
    /// Runs the stored action
    invoke() {
        if (this.action != null) {
            this.action(); // Perform the stored action
        }
    }
}
exports.GestureRecognizer = GestureRecognizer;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
const sprite_1 = __webpack_require__(20);
const shared_textures_1 = __webpack_require__(1);
class Button extends sprite_1.Sprite {
    onInit() {
        this.texture = shared_textures_1.SharedTextures.Instance.getTexture("play-button");
        console.log("Button texture " + this.texture);
    }
}
exports.Button = Button;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/// Class responsible for managing resources
class Resources {
    constructor() {
        this.cache = new Map();
    }
    /// Loads the resource in to the cache
    load(res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.cache.get(res)) {
                return this.cache.get(res);
            }
            console.log('Loading resource', res);
            if (res.type == Type.TEXT) {
                return fetch(res.url)
                    .then(res => {
                    if (res.ok) {
                        return res.text();
                    }
                    else {
                        throw Error(res.statusText);
                    }
                })
                    .then(text => {
                    this.cache.set(res, text);
                    return text;
                });
            }
            else if (res.type == Type.IMAGE) {
                const img = new Image();
                img.src = res.url;
                return new Promise((resolve, reject) => {
                    img.onload = () => {
                        resolve(img);
                    };
                    img.onerror = () => {
                        reject(img);
                    };
                });
            }
        });
    }
    /// Returns resource with the given reference name or nil
    getResourceWithName(name) {
        this.cache.forEach((value, key) => {
            if (key.name == name) {
                return value;
            }
        });
        return null;
    }
    /// Removes the resource from the cache
    remove(res) {
        this.cache.delete(res);
    }
}
exports.Resources = Resources;
;
var Type;
(function (Type) {
    Type[Type["TEXT"] = 0] = "TEXT";
    Type[Type["IMAGE"] = 1] = "IMAGE";
})(Type = exports.Type || (exports.Type = {}));


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map