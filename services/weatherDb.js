/**
 * Created by aharon.amram on 1/19/2016.
 */
"use strict";
let globals = require('../globals'),
    Datastore = require('nedb'),
    path = require('path'),
    dbFileSymbol = Symbol("fileName"),
    nameSymbol = Symbol('name');

class weatherDb {
    constructor(repositoryName) {
        if(!repositoryName){
            console.log("weatherDb: repository name is empty");
        }
        this.db = null;
        var appDir = path.dirname('app.js');
        this[dbFileSymbol] = path.join(globals.rootPath, "db", repositoryName + ".db");
        this[nameSymbol] = repositoryName;
        this._init();
    }

    get name(){
        return this[nameSymbol];
    }

    _init(){
        this.db = new Datastore({ filename: this[dbFileSymbol], autoload: true, inMemoryOnly:false});
        console.log(this[nameSymbol] + ' database created!');
    }

    insert(doc){
        this.db.insert(doc, (e,doc)=>{
            if(!e){
                console.log("record inserted");
            }
        });
    }
}

module.exports = weatherDb;