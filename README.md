
# clrlg

Console Color Logging with timers and other functionality.

## Getting Started

Require the clrlg inside your node app, and then use it instead of the standard console.log. Give more meaning to your console output, by adding colors, and timers.

### Prerequisites

To install the module before using it inside your project. 
```
$ npm install clrlg --save
```

### Installing

To use clrlg inside your project. 

Require the installed module
```
const clrlg = require("clrlg");
```

Assign a variable to the constructor.
```
let c = new clrlg();
```

Output from anywhere in your code.
```
c.lg("default color output");
```

Output different colors.
```
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
```
c.timestamp = true; //turn on prefix timestamp

c.lg("output some text");

c.lg("red","red"); //add second parameter of color

c.lg("blue","blue");

c.timestamp = false; //turn off prefix timestamp

c.lg("blue without timestamp prefix","blue");
```

Setup a timer.
```
c.start("a"); //start timer

setTimeout(() => {
  c.end("a");
},5500); //stop timers - after 5.5 seconds
```

## Built With

* [colors](https://www.npmjs.com/package/colors) - Color outputs.
* [Moment.js](http://momentjs.com/) - Dates and Times in JS.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/frankc60/clrlg). 

## Authors

* **Frank C** - *work in progress* - [GitHub](https://github.com/frankc60)

See also the list of [contributors](https://github.com/frankc60/clrlg/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Node JS is awesome!