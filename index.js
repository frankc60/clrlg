const colors  = require("colors");
const ts      = require("moment");

let pfx;

class clrlg {
  constructor() {
  this._timestamp = false;
  this.timestampFormat= "";;
  this.writeToFile= true;
  this.filePath= "c.log"; //working on
}

set timestamp(val) {
  if(typeof(val) === "boolean") this._timestamp = val;
  this.lg(`timestamp = ${this._timestamp}`);
}

get timestamp() {
  return this._timestamp;
}

  info(p) {
    if(this[p]) {
      this.lg(`${p} = ${this[p]}`);
      return;
    }
    Object.keys(this).forEach((key,ind) => {
      //if(key == p && p != undefined){
      //} 
      if({}.toString.call(this[key]) != "[object Function]") {
        
        this.lg(`${key} = ${this[key]}`);
      }
    })  
  };

  lg(output,r="white")  {
    if(this.timestamp !== false) { pfx = `${getTs(this.timestampFormat)}:`} else { pfx = "";}
    

    try {
      console.log(colors[r](`${pfx}${output}`));
    } catch (err) {
      console.log(colors.underline(`${pfx}${output} - invalid color`));
    }
  };

  start(id)  {
    // start timer
    this[id] = new Date().getTime();
  };

  end(id) {
    //end time from start to end
    let t = new Date().getTime() - this[id];
    let elapsed = Math.floor(t / 100) / 10;
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }
    this.lg(`time elapsed: ${elapsed} seconds`,"white");
  }
}

const getTs = (f) => {
 return ts().format(f);
 /*
 'f' can be:   
      "MMMM Do YYYY, h:mm:ss a"   // March 18th 2018, 10:04:37 pm
      "dddd"                      // Sunday
      "MMM Do YY"                 // Mar 18th 18
      'YYYY [escaped] YYYY'       // 2018 escaped 2018
      "" - default                // 2018-03-18T22:06:44+00:00
*/
}

module.exports = clrlg;