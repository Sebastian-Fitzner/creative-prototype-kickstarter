'use strict';

// Save a reference to the global object
var root = window;
var App = root.App = window.App || {};

// Versioning
App.version = "0.0.1";

// Feature detection
App.support = App.support || {};
App.support.touch = 'ontouchstart' in window;