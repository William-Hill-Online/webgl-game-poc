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

/// Class responsible for managing resources
export class Resources {
    private cache: Map<Resource, any>;

    constructor() {
        this.cache = new Map<Resource,any>();
    }

    /// Loads the resource in to the cache
    async load(res: Resource) {
        if(this.cache.get(res)) {
            return this.cache.get(res);
        }

        console.log('Loading resource', res);
        if(res.type == Type.TEXT) {
            return fetch(res.url)
                .then(res => {
                    if(res.ok) {
                        return res.text();
                    } else {
                        throw Error(res.statusText);
                    }
                })
                .then(text => {
                    this.cache.set(res,text);
                    return text;
                });
        }
        else if(res.type == Type.IMAGE) {
            const img = new Image();
            img.src = res.url;
            return new Promise((resolve,reject) => {
                img.onload = () => {
                    resolve(img);
                }
                img.onerror = () => {
                    reject(img);
                }
            });
        }
    }

    /// Returns resource with the given reference name or nil
    getResourceWithName?(name: string): Resource {
        this.cache.forEach((value: any, key: Resource) => {
            if (key.name == name) {
                return value; 
            }
        });
        return null;
    }
    /// Removes the resource from the cache
    remove(res: Resource) {
        this.cache.delete(res);
    }
};

export interface Resource {
    url: string,
    name?: string, // the reference name of the resource
    type : Type
}

export enum Type {
    TEXT,
    IMAGE,
}