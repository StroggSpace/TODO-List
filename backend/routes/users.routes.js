const express = require("express"),
    router = express.Router(),
    UserController = require("../controllers/users.controller"),
    UsersService = require("../services/users.service");

router.use(async (req, res, next) => {
    let data = await UsersService.getUsers();
    if (data) {
        req.users = data;
        next();
    } else {
        return res.status(500).json({ message: "Ошибка при получении данных" });
    }
});

router
.route('/users')
.get(UserController.getUsers)
.post(UserController.createUser)
.put(UserController.updateUser)
.delete(UserController.deleteUser);

module.exports = router;