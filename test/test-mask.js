'use strict';

const _ = require('../lodash-mask.js');
const assert = require('chai').assert;


describe('String', function() {
  describe('#ASCII', function() {
    it('should return * when the value length is 1-length word', function() {
      assert.equal('*', _.mask('a'));
    });
    it('should return a* when the value length is 2-length word', function() {
      assert.equal('a*', _.mask('ab'));
    });
    it('should return a*c when the value length is 3-length word', function() {
      assert.equal('a*c', _.mask('abc'));
    });
    it('should return a**d when the value length is 4-length word', function() {
      assert.equal('a**d', _.mask('abcd'));
    });
    it('should return ab**e when the value length is 5-length word', function() {
      assert.equal('ab**e', _.mask('abcde'));
    });
    it('should return ab***f when the value length is 6-length word', function() {
      assert.equal('ab***f', _.mask('abcdef'));
    });
    it('should return ab***fg when the value length is 7-length word', function() {
      assert.equal('ab***fg', _.mask('abcdefg'));
    });
    it('should return ab****gh when the value length is 8-length word', function() {
      assert.equal('ab****gh', _.mask('abcdefgh'));
    });
    it('should return abc****hi when the value length is 9-length word', function() {
      assert.equal('abc****hi', _.mask('abcdefghi'));
    });
    it('should return abc*****ij when the value length is 10-length word', function() {
      assert.equal('abc*****ij', _.mask('abcdefghij'));
    });
    it('should return abc*****ijk when the value length is 11-length word', function() {
      assert.equal('abc*****ijk', _.mask('abcdefghijk'));
    });
  });

  describe('#Non-ASCII', function() {
    it('should return * when the value length is 1-length word', function() {
      assert.equal('*', _.mask('臣'));
    });
    it('should return 臣* when the value length is 2-length word', function() {
      assert.equal('臣*', _.mask('臣亮'));
    });
    it('should return 臣*言 when the value length is 3-length word', function() {
      assert.equal('臣*言', _.mask('臣亮言'));
    });
    it('should return 臣**今 when the value length is 4-length word', function() {
      assert.equal('臣**先', _.mask('臣亮言先'));
    });
    it('should return 臣亮**帝 when the value length is 5-length word', function() {
      assert.equal('臣亮**帝', _.mask('臣亮言先帝'));
    });
    it('should return 臣亮***創 when the value length is 6-length word', function() {
      assert.equal('臣亮***創', _.mask('臣亮言先帝創'));
    });
    it('should return 臣亮***創業 when the value length is 7-length word', function() {
      assert.equal('臣亮***創業', _.mask('臣亮言先帝創業'));
    });
    it('should return 臣亮****業未 when the value length is 8-length word', function() {
      assert.equal('臣亮****業未', _.mask('臣亮言先帝創業未'));
    });
    it('should return 臣亮言****未半 when the value length is 9-length word', function() {
      assert.equal('臣亮言****未半', _.mask('臣亮言先帝創業未半'));
    });
    it('should return 臣亮言*****半而 when the value length is 10-length word', function() {
      assert.equal('臣亮言*****半而', _.mask('臣亮言先帝創業未半而'));
    });
    it('should return 臣亮言*****半而中 when the value length is 11-length word', function() {
      assert.equal('臣亮言*****半而中', _.mask('臣亮言先帝創業未半而中'));
    });
  });

  describe('#ASCII with specify mask `-`', function() {
    it('should return - when the value length is 1-length word', function() {
      assert.equal('-', _.mask('a', '-'));
    });
    it('should return a- when the value length is 2-length word', function() {
      assert.equal('a-', _.mask('ab', '-'));
    });
    it('should return a-c when the value length is 3-length word', function() {
      assert.equal('a-c', _.mask('abc', '-'));
    });
    it('should return a--d when the value length is 4-length word', function() {
      assert.equal('a--d', _.mask('abcd', '-'));
    });
    it('should return ab--e when the value length is 5-length word', function() {
      assert.equal('ab--e', _.mask('abcde', '-'));
    });
    it('should return ab---f when the value length is 6-length word', function() {
      assert.equal('ab---f', _.mask('abcdef', '-'));
    });
    it('should return ab---fg when the value length is 7-length word', function() {
      assert.equal('ab---fg', _.mask('abcdefg', '-'));
    });
    it('should return ab----gh when the value length is 8-length word', function() {
      assert.equal('ab----gh', _.mask('abcdefgh', '-'));
    });
    it('should return abc----hi when the value length is 9-length word', function() {
      assert.equal('abc----hi', _.mask('abcdefghi', '-'));
    });
    it('should return abc-----ij when the value length is 10-length word', function() {
      assert.equal('abc-----ij', _.mask('abcdefghij', '-'));
    });
    it('should return abc-----ijk when the value length is 11-length word', function() {
      assert.equal('abc-----ijk', _.mask('abcdefghijk', '-'));
    });
  });

  describe('#Non-ASCII with specify mask `-`', function() {
    it('should return - when the value length is 1-length word', function() {
      assert.equal('-', _.mask('臣', '-'));
    });
    it('should return 臣- when the value length is 2-length word', function() {
      assert.equal('臣-', _.mask('臣亮', '-'));
    });
    it('should return 臣-言 when the value length is 3-length word', function() {
      assert.equal('臣-言', _.mask('臣亮言', '-'));
    });
    it('should return 臣--今 when the value length is 4-length word', function() {
      assert.equal('臣--先', _.mask('臣亮言先', '-'));
    });
    it('should return 臣亮--帝 when the value length is 5-length word', function() {
      assert.equal('臣亮--帝', _.mask('臣亮言先帝', '-'));
    });
    it('should return 臣亮---創 when the value length is 6-length word', function() {
      assert.equal('臣亮---創', _.mask('臣亮言先帝創', '-'));
    });
    it('should return 臣亮---創業 when the value length is 7-length word', function() {
      assert.equal('臣亮---創業', _.mask('臣亮言先帝創業', '-'));
    });
    it('should return 臣亮----業未 when the value length is 8-length word', function() {
      assert.equal('臣亮----業未', _.mask('臣亮言先帝創業未', '-'));
    });
    it('should return 臣亮言----未半 when the value length is 9-length word', function() {
      assert.equal('臣亮言----未半', _.mask('臣亮言先帝創業未半', '-'));
    });
    it('should return 臣亮言-----半而 when the value length is 10-length word', function() {
      assert.equal('臣亮言-----半而', _.mask('臣亮言先帝創業未半而', '-'));
    });
    it('should return 臣亮言-----半而中 when the value length is 11-length word', function() {
      assert.equal('臣亮言-----半而中', _.mask('臣亮言先帝創業未半而中', '-'));
    });
  });

});

// console.log(_.mask('a', '*'));
// console.log(_.mask('ab', '*'));
// console.log(_.mask('abc', '*'));
// console.log(_.mask('abcd', '*'));
// console.log(_.mask('abcde', '*'));
// console.log(_.mask('abcdef', '*'));
// console.log(_.mask('abcdefg', '*'));
// console.log(_.mask('abcdefgh', '*'));
// console.log(_.mask('abcdefghi', '*'));
// console.log(_.mask('abcdefghij', '*'));
// console.log(_.mask('abcdefghijk', '*'));