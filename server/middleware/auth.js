module.exports = (model) => async (req, res, next) => {
  const jwt = require("jsonwebtoken");
  const secret = req.app.get("secret");
  const assert = require("http-assert");

  //校验
  const token = String(req.headers.authorization || "")
    .split(" ")
    .pop();

  assert(token, 401, "Please provide jwt token!"); //实际message应该倾向用户友好

  const tokenData = jwt.verify(token, secret);
  const { id } = tokenData;

  assert(id, 401, "Invalid jwt token!"); //同上

  req.user = await model.findById(id);

  assert(req.user, 401, "Please sign in first!");

  await next();
};
