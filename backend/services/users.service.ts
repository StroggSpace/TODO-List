import User from "@/data/model/User";
import { Error } from "mongoose";

class UsersService {
  async getUsers() {
    return User.find();
  }

  async createUser(user) {
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      throw new Error("Пользователь с таким email уже существует");
    }

    return User.create(user);
  }
}

export default new UsersService();
