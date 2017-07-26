const path = require('path');
const chai = require('chai');
const expect = chai.expect
chai.should()
const assert = chai.assert;
const locale_en = require(path.join(__dirname, '..', 'locale', "english"))
const locale_ja = require(path.join(__dirname, '..', 'locale', "japanese"))

function compareKeys(a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return JSON.stringify(aKeys) === JSON.stringify(bKeys);
}


assert(compareKeys(locale_en, locale_ja))
