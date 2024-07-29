const router = require("express").Router();

const routes = [require("./auth.routes"), require("./revenue.routes")];
routes.forEach((route) => {
  router.use("/api/v1", route);
});

module.exports = router;