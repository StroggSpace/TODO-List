import { Request, Response } from "express";
import UsersService from "../services/users.service";
import { getDefaultErrors } from "@/utils/getDefaultErrors";

class UsersController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await UsersService.getUsers();

      if (!users || users.length === 0) {
        return res.status(404).send({ message: "Пользователи отсутствуют" });
      }

      return res.status(200).json(users);
    } catch (error) {
      getDefaultErrors(error, res);
    }
  }

  async createUser(req, res) {
    if (!req.body) {
      return res.status(400).send({ message: "Bad request" });
    }

    const { email, name, password } = req.body;
    if (!email || !name || !password) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      const user = await UsersService.createUser(req.body);
      return res.status(201).json(user);
    } catch (error) {
      getDefaultErrors(error, res);
    }
  }
}

export default new UsersController();
