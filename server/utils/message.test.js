var expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should  generate the correct message object', () => {
    var from = 'Ricardo';
    var text = 'Sample test message'
    var message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number')
  });
});
