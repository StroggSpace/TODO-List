const fs = require("fs");

class UsersService {
    getUsers() {
        return new Promise((resolve, reject) => {
            fs.readFile("./data/users.json", "utf8", (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(data));
                }
            });
        });
    }
    createUser(data) {
        return new Promise((resolve, reject) => {
            fs.writeFile("./data/users.json", JSON.stringify(data), (err) => {
                if (err) {
                    return resolve(false);
                } else {
                    return resolve({ message: "Пользователь успешно создан" });
                }
            });
        });
    }
    updateUser(data) {
        return new Promise((resolve, reject) => {
            fs.writeFile("./data/users.json", JSON.stringify(data), (err) => {
                if (err) {
                    return resolve(false);
                } else {
                    return resolve({ message: "Пользователь успешно обновлен" });
                }
            });
        });
    }
    deleteUser(id) {
        return new Promise((resolve, reject) => {
            fs.writeFile("./data/users.json", JSON.stringify(id), (err) => {
                if (err) {
                    return resolve(false);
                } else {
                    return resolve({ message: "Пользователь успешно удален" });
                }
            });
        });
    }
}

module.exports = new UsersService();