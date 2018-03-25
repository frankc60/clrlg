const c = require("./index");

//let c = new clrlg();

c.lg("default color");

c.timestamp = true; //turn on prefix timestamp

c.lg("red","red"); //add second parameter of color

c.lg("yellow","yellow");

c.lg("blue","blue");

c.lg("green","green");

c.timestamp = false; //turn off prefix timestamp

c.lg("magenta","magenta");

c.lg("grey","grey");

c.lg("white","white");

c.lg("cyan","cyan");

c.lg("non color","fishcolor"); //enter a non existent color.

c.start("a"); //start timer

setTimeout(()=>{c.end("a")},5525); //stop timers - after 5.5 seconds

c.lg("hello world",()=>{
  console.log("hi");
})