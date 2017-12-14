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

import { Model } from '../rendering/objects/model';
import { Vector3 } from '../math/vector3';
import { Vector3Array } from '../structs/vector3.array';
import { Vector2Array } from '../structs/vector2.array';

export class OGexLoader {
    private static METRIC_TOKEN = "Metric";
    private static OPENING_PARENTESIS = "(";
    private static CLOSING_PARENTESIS = ")";

    private static OPENING_BRACKET = "{";
    private static CLOSING_BRACKET = "}";

    private static CLOSING_SQUARE_BRACKET = "]";
    private static OPENING_SQUARE_BRACKET = "[";

    private static EMPTY_SPACE = " ";
    private static EQUAL_SIGN = "=";
    private static QUOTE_SIGN = "\"";
    private static LINE_END = "\n";
    private static SLASH = "/";
    private static TABS = "\t";
    private static COMMA = ",";

    private static FLOAT_DATA_TYPE = "float";

    private static NODE_DATA_TOKEN = "Node";
    private static GEOMETRY_OBJECT_DATA_TOKEN = "GeometryObject";
    private static INDEX_ARRAY_TOKEN = "IndexArray";
    private static MESH_TOKEN = "Mesh";
    private static VERTEX_TOKEN = "VertexArray";
    
    private iterator = 0;

    constructor() {}

    parse(data: string): Model {
        while(this.iterator < data.length) {
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

        return null
    }

    readMetricData(data: string): Metric {
        var proprety = this.readProperty(data);
        var value = this.readValue(data);
        return new Metric(proprety, value);
    }

    readGeometryData(data: string): Model {
        let model = new Model();
        let name = this.readNameReference(data);

        var numberOfOpeningBrackets = 0;
        var numberOfClosingBrackets = 0;

        var nextToken = this.readNextToken(data);
        // move to opening bracket
        while(nextToken != OGexLoader.OPENING_BRACKET) {
            nextToken = this.readNextToken(data);
        }

        //read all the data
        while(this.iterator < data.length) {
            var next_token = this.readNextToken(data);
            switch(next_token) {
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

    readVertexData(data: string): any {
        var numberOfOpeningTags = 0;
        var numberOfClosingTags = 0;

        var vertextComponents = 0;

        var tempChar = "";
        var buffer = "";
        // read number of components
        // 1. find opening square bracket
        while(data[this.iterator] != OGexLoader.OPENING_SQUARE_BRACKET) {
            this.iterator += 1;
        }
        this.iterator += 1; // move to real value
        // 2. read the data inside square brackets
        while(data[this.iterator] != OGexLoader.CLOSING_SQUARE_BRACKET) {
            buffer += data[this.iterator];         
            this.iterator += 1;
        }

        vertextComponents = Number(buffer);

        // read data
        numberOfOpeningTags = 0; // system aleardy loaded first bracket of the data. The second one is to inform that all data has been loaded
        numberOfClosingTags = 0;

        var dataArray: number[] = [];

        while(!(numberOfOpeningTags > 0 && (numberOfOpeningTags == numberOfClosingTags))) {
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
            return new Vector2Array(dataArray);
        } else if (vertextComponents == 3) {
            return new Vector3Array(dataArray)
        } else {
            return null
        }
    }

    readNameReference(data: string): string {
        let token = this.readNextToken(data);
        return token.substring(1, token.length);
    }
    
    readNextToken(data: string): string {
        var buffer = "";
        var tempChar = "";

        while(this.iterator < data.length) {
            tempChar = data[this.iterator];
                if ((tempChar == OGexLoader.OPENING_BRACKET || 
                    tempChar == OGexLoader.CLOSING_BRACKET) && buffer.length == 0) {
                    this.iterator += 1;
                    return tempChar;
                }
                switch(tempChar) {
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
    readProperty(data: string): Property {
        let key = this.readNextToken(data);
        let equalSign = this.readNextToken(data);
        let value = this.readNextToken(data);
        return new Property(key, value);
    }

    readValue(data: string): Value {
        var numberOfOpeningTags = 0;
        var numberOfClosingTags = 0;
        var buffer: string = "";

        var value = new Value();

        while(!(numberOfOpeningTags > 0 && (numberOfOpeningTags == numberOfClosingTags))) {
            let tempChar = data[this.iterator];

            switch (tempChar) {
                case OGexLoader.OPENING_BRACKET:
                case OGexLoader.CLOSING_BRACKET:
                if (buffer.length > 0) {
                    if (value.type == null) {
                        value.type = buffer.trim();
                        buffer = "";
                    } else {
                        if (buffer.indexOf(OGexLoader.QUOTE_SIGN) !== -1) {
                            value.stringData = buffer;
                        } else {
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

class Property {
    constructor(public key: string, public value: string){}

    print() {
        console.log("=========================================================");
        console.log("Property: ")
        console.log("Key " + this.key);
        console.log("Value " + this.value);
        console.log("=========================================================");
    }
}

class Metric {
    constructor(public property: Property, public value: Value) {}

    print() {
        console.log("=========================================================");
        console.log("Metric: ")
        console.log("Property " + this.property.key + " " + this.property.value);
        console.log("Array value " + this.value.type + " " + this.value.arrayData);
        console.log("String data " + this.value.stringData);
        console.log("=========================================================");
    }
}

export class Value {
    type: string;
    arrayData: number[];
    stringData: string;
}

export class VertexArray {
    constructor(public primitive: Property) {}
}