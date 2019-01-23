const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
      users = new Users();
      users.users = [{
        id: 1,
        name: 'Mike',
        room: 'Node Course'
      }, {
        id: 2,
        name: 'Jen',
        room: 'React Course'
      }, {
        id: 3,
        name: 'Julie',
        room: 'Node Course'
      }];
  });
  describe('addUser', () => {
    it('should add a new user', () => {
      var users = new Users();
      user = {
        id: '123',
        name: 'Ricardo',
        room: 'The Office Fans'
      };

      responseUser = users.addUser(user.id, user.name, user.room);

      expect(users.users).toEqual([user]);
    });
  });

  describe('getUserList', () => {
    it('should return names for node course', () => {
      var userList = users.getUserList('Node Course');

      expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for react course', () => {
      var userList = users.getUserList('React Course');

      expect(userList).toEqual(['Jen']);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      var priorLength = users.users.length;
      var id = users.users[0].id;
      var removedUser = users.removeUser(id);
      expect(removedUser).toBeTruthy();
      expect(removedUser.id).toBe(id);
      expect(users.users.length).toBe(priorLength-1);
      expect(users.users).not.toContainEqual(removedUser);
    });

    it('should not a user if user doesnt exist', () => {
      var priorLength = users.users.length;
      var id = 999999;
      var removedUser = users.removeUser(id);
      expect(removedUser).toBeFalsy();
      expect(users.users.length).toBe(priorLength);
    });
  });

  describe('getUser', () => {
    it('should return a user', () => {
      var id = users.users[1].id;
      var user = users.getUser(id);
      expect(user).toBeTruthy();
      expect(user.id).toBe(id);
      expect(users.users).toContainEqual(user);
    });

    it('should not return a user if it doesnt exist', () => {
      var id = 9999999;
      var user = users.getUser(id);
      expect(user).toBeFalsy();
    });
  });
});
