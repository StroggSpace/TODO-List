import express from "express";
import users from "./users.routes";


const router = express.Router();

router.use("/users", users);
// router.use("/tasks", tasks);
// router.use("/auth", auth);
// router.use("/settings", settings);
// router.use("/notes", notes);

export default router;
