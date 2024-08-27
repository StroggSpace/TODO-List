const express = require("express"),
    router = express.Router(),
    tasks = require("./tasks"),
    users = require("./users"),
    auth = require("./auth"),
    settings = require("./settings"),
    notes = require("./notes");

router.use("/tasks", tasks);
router.use("/users", users);
router.use("/auth", auth);
router.use("/settings", settings);
router.use("/notes", notes);

module.exports = router;