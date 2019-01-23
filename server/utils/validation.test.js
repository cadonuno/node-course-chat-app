const expect = require('expect');

const {isRealString} = require('./validation');


describe('isRealString', () => {
  it('should reject non-string values', () => {
    var notAString = 5;
    var result = isRealString(notAString);
    expect(typeof result).toBe('boolean');
    expect(result).toBeFalsy();
  })
  it('should reject strings with only spaces', () => {
    var string = '                       ';
    var result = isRealString(string);
    expect(typeof result).toBe('boolean');
    expect(result).toBeFalsy();
  })
  it('shoul allow strings with non space characters', () => {
    var string = 'This is actually a String';
    var result = isRealString(string);
    expect(typeof result).toBe('boolean');
    expect(result).toBeTruthy();
  })
});
