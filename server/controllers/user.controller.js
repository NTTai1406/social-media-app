const UserService = require('../services/user.service');

class UserController {
    getUsers = UserService.getUsers;
    createUser = UserService.createUser;
    updateUser = UserService.updateUser;
    deleteUser = UserService.deleteUser;
}

module.exports = new UserController();