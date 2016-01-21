/**
 * Created by aharon.amram on 1/21/2016.
 */
"use strict";

let path = require('path'),
    rootPathSymbol = Symbol('rootPath'),
    instance = null;

class globals{
    constructor(){
        if(!instance){
            this[rootPathSymbol] = path.join(path.resolve(__dirname),'/');
            instance = this;
        }
        return instance;
    }

    get rootPath(){
        return this[rootPathSymbol];
    }
}

module.exports = new globals();