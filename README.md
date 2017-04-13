# Quickstart of local-development for AngularJS 1.x projects

## by using CommonJS style which has live-development and AOT compilation by using Browserify, Watchify and BrowserSync.


The Project structure use approachs below

1. CommonJS-style, Modular Loader to be ompatible with browserify
2. [Angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html) to follow file structure, naming convention 
3. [Upgrading guideline](https://angular.io/docs/ts/latest/guide/upgrade.html#!#using-a-module-loader) from Angular 1.x to Angular (2.x ++) with minimum efforts
4. Ahead-of-time compilation (AOT) build process by using Browserify-Watchify 



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
