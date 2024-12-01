"use strict";

const sum = (...args) => {
  let res = 0;
  for (const element of args) {
    res += element;
  }
  return res;
};

module.exports = { sum };
