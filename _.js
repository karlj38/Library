const _ = {
  clamp(val, min, max) {
    if (val < min) {
      return min;
    } else if (val < max) {
      return val;
    } else {
      return max;
    }
  },
  //   clamp(val, min, max) {
  //     let res = Math.max(val, min);
  //     res = Math.min(res, max);
  //     return res;
  //   },
  inRange(num, min, max) {
    if (max === undefined) {
      max = min;
      min = 0;
    }
    if (min > max) {
      let x = max;
      max = min;
      min = x;
    }
    if (num < min) {
      return false;
    } else if (num >= max) {
      return false;
    } else {
      return true;
    }
  },
  words(str) {
    return str.split(" ");
  },
  // pad(str, len) {
  //   if (str.length < len) {
  //     let padding = len - str.length;
  //     if (padding % 2 !== 0) {
  //       //if odd padding, add uneven padding to end
  //       str += " ";
  //       padding--;
  //     }
  //     padding /= 2;
  //     let spacer = " ".repeat(padding);
  //     str = spacer + str + spacer;
  //   }
  //   return str;
  // },
  pad(str, len) {
    if (str.length < len) {
      let padding = len - str.length;
      padding /= 2;
      let start = " ".repeat(Math.floor(padding));
      let end = " ".repeat(Math.ceil(padding));
      str = start + str + end;
    }
    return str;
  },
  has(obj, key) {
    return obj[key] ? true : false;
  },
  invert(obj) {
    let res = {};
    Object.entries(obj).forEach((entry) => {
      res[entry[1]] = entry[0];
    });
    return res;
  },
  findKey(obj, func) {
    for (let entry in obj) {
      return func(obj[entry]) ? entry : undefined;
    }
  },
  // drop(arr, num) {
  //   arr.shift();
  //   for (let i = 2; i <= num; i++) {
  //     arr.shift();
  //   }
  //   return arr;
  // },
  drop(arr, num) {
    num = num === undefined ? 1 : num;
    return arr.slice(num);
  },
  dropWhile(arr, func) {
    let i = arr.findIndex((element, index) => !func(element, index, arr));
    let res = this.drop(arr, i);
    return res;
  },
  chunk(arr, size) {
    let res = [];
    if (size === undefined) {
      size = 1;
    }
    for (let i = 1; i <= arr.length; ) {
      res.push(arr.splice(0, size));
    }
    console.log(res);
    return res;
  },
};

// Do not write or modify code below this line.
module.exports = _;
