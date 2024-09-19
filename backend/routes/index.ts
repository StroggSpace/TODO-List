import { Router } from "express";
import usersRouter from "./users.routes";

const router = Router();

router.use("/users", usersRouter);
// router.use("/tasks", tasks);
// router.use("/auth", auth);
// router.use("/settings", settings);
// router.use("/notes", notes);

export default router;
