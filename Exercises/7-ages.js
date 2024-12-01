"use strict";

const ages = (persons) => {
  let age = {};
  for (const key in persons) {
    if (persons.hasOwnProperty(key)) {
      age[key] = persons[key].died - persons[key].born;
    }
  }
  return age;
};

module.exports = { ages };
