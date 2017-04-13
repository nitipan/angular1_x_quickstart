require("./assets/style.css");

var angular = require("angular");

var app = angular.module("app", []);

app.controller("mainController", require("./app/main.component"));