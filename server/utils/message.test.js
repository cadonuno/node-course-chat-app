var expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

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


describe('generateLocationMessage', () => {
  //expect url
  //expect createdAt to be number
  it('should generate correct location object', () => {
    var from = 'Fiamminha linda';
    var latitude = 12;
    var longitude = 25;
    var message = generateLocationMessage(from, latitude, longitude);
    expect(message.from).toBe(from);
    expect(message.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    expect(typeof message.createdAt).toBe('number');
  });
});
