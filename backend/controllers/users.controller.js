const UsersService = require('../services/users.service');

class UsersController {
    getUsers(req, res) {
        if (req.query.id) {
            if (req.users.hasOwnProperty(req.query.id))
                return res.status(200).send({
                    data: req.users[req.query.id],
                });
            else
                return res
                    .status(404)
                    .send({ message: 'Пользователь с таким ID не найден.' });
        } else if (!req.users)
            return res
                .status(404)
                .send({ message: 'Пользователи не найдены.' });

        return res.status(200).send({ data: req.users });
    }

    async createUser(req, res) {
        if (req.body.user && req.body.user.id) {
            if (req.users.hasOwnProperty(req.body.user.id))
                return res.status(409).send({
                    message: 'Пользователь с таким ID уже существует.',
                });

            req.users[req.body.user.id] = req.body.user;

            let result = await UsersService.createUser(
                req.users
            );

            if (result) return res.status(200).send(result);
            else
                return res.status(500).send({
                    message: 'Невозможно создать пользователя.',
                });
        } else
            return res
                .status(400)
                .send({ message: 'Bad request.' });
    }

    async updateUser(req, res) {
        if (req.body.user && req.body.user.id) {
            if (!req.users.hasOwnProperty(req.body.user.id))
                return res
                    .status(404)
                    .send({ message: 'Пользователь с таким ID не найден.' });

            req.users[req.body.user.id] = req.body.user;

            let result = await UsersService.updateUser(
                req.users
            );

            if (result) return res.status(200).send(result);
            else
                return res.status(500).send({
                    message: 'Невозможно обновить пользователя.',
                });
        } else
            return res
                .status(400)
                .send({ message: 'Bad request.' });
    }

    async deleteUser(req, res) {
        if (req.query.id) {
            if (req.users.hasOwnProperty(req.query.id)) {
                delete req.users[req.query.id];

                let result = await UsersService.deleteUser(
                    req.users
                );

                if (result)
                    return res.status(200).send(result);
                else
                    return res.status(500).send({
                        message: 'Невозможно удалить пользователя.',
                    });
            } else
                return res
                    .status(404)
                    .send({ message: 'Пользователь с таким ID не найден.' });
        } else
            return res
                .status(400)
                .send({ message: 'Bad request.' });
    }
}

module.exports = new UsersController();