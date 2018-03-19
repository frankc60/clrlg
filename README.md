# clrlg
Color Logging with timers and other functionality.

##Install
```
$ npm install clrlg
```

##Usage

```
const clrlg = require("clrlg");

let c = new clrlg();

c.lg("default color");

c.timestamp = true; 

c.lg("red","red");

c.lg("yellow","yellow");

c.lg("blue","blue");

c.lg("green","green");
c.timestamp = false; 

c.lg("magenta","magenta");

c.lg("grey","grey");

c.lg("white","white");

c.lg("cyan","cyan");


c.lg("orange","blsddsue");

c.start("a");
setTimeout(()=>{c.end("a")},5525);


```