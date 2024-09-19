import { Router } from "express";
import UserController from "../controllers/users.controller";

const usersRouter = Router();

usersRouter
  .route("/")
  .get(UserController.getUsers)
  .post(UserController.createUser);
// .put(UserController.updateUser)
// .delete(UserController.deleteUser);

export default usersRouter;
