require("./assets/style.css");

var angular = require("angular");

var app = angular.module("app", []);

app.component("myApp", require("./app/main.component"));