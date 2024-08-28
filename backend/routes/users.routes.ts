import express from "express";
import UsersService from "../services/users.service";
import UserController from "../controllers/users.controller";

const router = express.Router();

router.use(async (req, res, next) => {
    let data;
    try {
        data = await UsersService.getUsers();
        if (data) {
            req.users = data;
            next();
        } else {
            return res.status(500).json({ message: "Ошибка при получении данных" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Ошибка при получении данных" });
    }
});

router
.route('/users')
.get(UserController.getUsers)
.post(UserController.createUser)
.put(UserController.updateUser)
.delete(UserController.deleteUser);

export default router;