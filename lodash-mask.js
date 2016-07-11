'use strict';

const _ = require('lodash');

function _mask(string, mask) {
  mask = mask || '*';
  let length = string.length;
  let maskLength = _.floor(length/2) || 1;
  let maskStart = _.ceil((length-maskLength)/2);
  // console.log(length, maskLength, maskStart);
  let strMasked = string.substr(0, maskStart)+_.repeat(mask, maskLength)+string.substr(maskStart+maskLength, length);
  // console.log(strMasked);
  return strMasked;
}

_.mixin({ 'mask': _mask });

module.exports = _;
