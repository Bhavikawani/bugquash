const User = require("../models/User.js");

module.exports.signup = async (req, res) => {
  const {name,email,password}=req.body;
  let response = { success: false, message: "", errMessage: "" };
  let user=new User ({
      name,
      email,
      password
  });
  await user.save().then((result) => {
    response.success = true;
    response.message = "User signup successfully";
    res.status(201).json(response);
  }).catch((err) => {
    response.errMessage = err.message;
    response.message = "Failed to signup. Please try again";
    res.status(400).json(response);
  })
}


  