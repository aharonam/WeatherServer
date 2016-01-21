/**
 * Created by aharon.amram on 1/19/2016.
 */
"use strict";
let globals = require('../globals'),
    Datastore = require('nedb'),
    path = require('path'),
    dbFileSymbol = Symbol("fileName"),
    nameSymbol = Symbol('name'),
    dbSymbol = Symbol('dbSymbol');

class weatherDb {
    constructor(repositoryName) {
        if(!repositoryName){
            console.log("weatherDb: repository name is empty");
        }
        this[dbSymbol] = null;
        this[dbFileSymbol] = path.join(globals.rootPath, "db", repositoryName + ".db");
        this[nameSymbol] = repositoryName;
        this._init();
    }

    get name(){
        return this[nameSymbol];
    }

    get db(){
        return this[dbSymbol];
    }

    _init(){
        this[dbSymbol] = new Datastore({ filename: this[dbFileSymbol], autoload: true, inMemoryOnly:false});
        console.log(this[nameSymbol] + ' database created!');
    }
}

module.exports = weatherDb;