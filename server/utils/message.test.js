var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', () => {
        var res = generateMessage('Jen', 'Hey');
        expect(res.from).toMatch('Jen');
        expect(res.text).toMatch('Hey');
        expect(res.createdAt).toBeA('number');
    });

});