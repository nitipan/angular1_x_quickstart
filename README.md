# Quickstart of local-development for AngularJS 1.x projects

[![build status](https://travis-ci.org/nitipan/angular1_x_quickstart.svg?branch=master)](https://travis-ci.org/nitipan/angular1_x_quickstart)

## by using CommonJS style which has live-development and AOT compilation by using Browserify, Watchify and BrowserSync.


The Project structure use approachs below

1. CommonJS-style, Modular Loader to be compatible with browserify, example below

file: app.js
```js
require("./assets/style.css");

var angular = require("angular");

var app = angular.module("app", []);

app.controller("mainController", require("./app/main.component"));

```


2. [Angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html) to follow file structure, naming convention etc, 
3. Compatible with [Upgrading guideline](https://angular.io/docs/ts/latest/guide/upgrade.html#!#using-a-module-loader) (I hope :p) from Angular 1.x to Angular (2.x ++) with minimum efforts
4. Ahead-of-time compilation (AOT) build process by using Browserify-Watchify 


Remark:
> This version is not optimized-yet for production. 



 Setting up a new project on your machine is quick and easy with the QuickStart seed, maintained on github repository.

 First, make sure [node](https://nodejs.org) installed on your machine.

 Then, run following commands via command-line prompt

``` cmd
>git clone https://github.com/nitipan/angular1_x_quickstart.git quickstart
>cd quickstart
>npm install
>npm start
```
 
The live-development will be start at [http://localhost:3000]()


### What's inside quick start seed ?

Let's focus on `src` folder 

```

|-- src
    |-- app.js
    |-- index.html
    |-- app
    |   |-- main.component.js
    |   |-- main.view.html
    |-- assets
        |-- style.css

```




### Have fun !
