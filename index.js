const colors = require("colors");

const c = {
  lg  : (output,r="white") => {
    try {
      console.log(colors[r](output));
    } catch (err) {
      console.log(colors.underline(`${output} - invalid color`));
    }
  }
}


module.exports = c;
