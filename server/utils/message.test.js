var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', () => {
        var res = generateMessage('Jen', 'Hey');
        expect(res.from).toMatch('Jen');
        expect(res.text).toMatch('Hey');
        expect(res.createdAt).toBeA('number');
    });

});

describe('generateLocationMessage', () => {
    it('should gerenate correct location object', () => {
        var from = 'test';
        var latitude = 1, longitude = 1;
        var url = 'https://www.google.com/maps?q=1,1'
        var res = generateLocationMessage(from, latitude, longitude);
        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({from, url});
    });
});