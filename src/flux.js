
var Fluxxor = require('fluxxor');

//var constants = require('./constants');
var actions = require('./actions');

//var AuthorStore = require('./stores/AuthorStore');
//var BookStore = require('./stores/BookStore');

import GameStore from '../stores/GameStore';

var stores = {
	GameStore: new GameStore()
};
console.log("ssss");
var flux = new Fluxxor.Flux(stores, actions);

flux.on("change", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

console.log("ssss2");
module.exports = flux;