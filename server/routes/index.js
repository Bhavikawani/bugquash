const userRouter = require("./user");


const initRoutes = (app) => {
  app.use("/user", userRouter);
  
};

module.exports = initRoutes;