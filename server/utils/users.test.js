const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Test room'
        }, {
            id: '2',
            name: 'Jen',
            room: 'Force room'
        }, {
            id: '3',
            name: 'Andy',
            room: 'Test room'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {id: '123', name: 'Test', room: 'Test Room'};
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '2';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '99';
        var user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toEqual('2');
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);
        expect(user).toNotExist();
    });

    it('should return names for test room', () => {
        var userList = users.getUserList('Test room');
        
        expect(userList).toEqual(['Mike', 'Andy']);
    });

    it('should return names for force room', () => {
        var userList = users.getUserList('Force room');
        
        expect(userList).toEqual(['Jen']);
    });
    
});