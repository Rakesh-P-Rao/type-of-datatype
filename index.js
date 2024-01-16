function typeOfDatatype(data) {
    console.log(typeof data);
    if (typeof data === typeof 27) {
      return `type of datatype is ${typeof data}`;
    } else if (typeof data === typeof true) {
      return `type of datatype is ${typeof data}`;
    } else if (typeof data === typeof undefined) {
      return `type of datatype is ${typeof data}`;
    } else if (typeof data === null) {
      return `type of datatype is ${typeof data}`;
    } else if (typeof data === typeof {}) {
      return `type of datatype is ${typeof data}`;
    } else if (typeof data === typeof []) {
      return `type of datatype is ${typeof data}`;
    } else if (typeof data === typeof 1998n) {
      return `type of datatype is ${typeof data}`;
    } else if (typeof data === typeof Symbol()) {
      return `type of datatype is ${typeof data}`;
    } else {
      return `type of datatype is not found!!!`;
    }
  }
  
//   console.log(typeOfDatatype(1998n));
  
module.exports = typeOfDatatype;