# clrlg

Improve the standard console.log output by adding Color Logging, timers and timestamps. High performance and Easy to Setup and Use.


## Getting Started

Require the **clrlg** into your node app, and then use it instead of the standard *console.log*. Give more meaning to your console output, by adding colors, and timers.

### Installing

To use the **clrlg** module you first need to install it into your app project. We recommend installing it globally (-g)

```js
$ npm install -g clrlg 
```

To install just for your current project, from the project folder:

```js
npm install --save clrlg 
```

### Using

To use **clrlg** inside your project app. 

In your code include the installed module.

```js
const c = require("clrlg");

//const c = new clrlg(); not longer constructor 'new' required
```

Now output to the terminal from anywhere in your code using he **lg** method.

```js
c.lg("default color output");
```

Output using many different colors with the second parameter.

```js
c.lg("text to output","red|yellow|blue|green|magenta|grey|white(default)|cyan");
```

For example

```js
c.lg("red","red"); //add second parameter of color

c.lg("yellow","yellow");

c.lg("blue","blue");

c.lg("green","green");

c.lg("magenta","magenta");

c.lg("grey","grey");

c.lg("white","white");

c.lg("cyan","cyan");

c.lg("non color","fishcolor"); //enter a non existent color.
```

Output timestamp prefix.

```js
c.timestamp = true; //turn on prefix timestamp

c.lg("output some text");

c.lg("red","red"); //add second parameter of color

c.lg("blue","blue");

c.timestamp = false; //turn off prefix timestamp

c.lg("blue without timestamp prefix","blue");
```

Setup a timer.

```js
c.start("a"); //start timer

setTimeout(() => {
  c.end("a");
},5500); //stop timers - after 5.5 seconds
```

Pass a callback function, so console output describes the callback function.

```js
c.lg("doing DB lookup of id",() => {
  //retrieve data from db
  //return data
})
```

## Running the tests

Mocha is used to unit test clrlg. Currently this is minimalistic to prove the build is successful. From the command line:

```js
npm test
```

## Built With

* [Mocha](https://mochajs.org/) - JavaScript test framework.
* [colors](https://www.npmjs.com/package/colors) - Color outputs.
* [Moment.js](http://momentjs.com/) - Dates and Times in JS.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. Contact me at [GitHub](https://github.com/frankc60) if you would like to contribute.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/frankc60/clrlg). 

## Authors

* **Frank C** - *work in progress* - [GitHub](https://github.com/frankc60)

See also the list of [contributors](https://github.com/frankc60/clrlg/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Node JS is awesome!