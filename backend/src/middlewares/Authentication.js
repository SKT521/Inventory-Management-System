httpStatus = require("http-status");
ApiError = require("../utils/ApiError");

Authentication = (req, res, next) => {
  try {
    const headers = req.headers["Authorizatioin"] || "";

    if (!headers) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "Please Login first");
    }

    const auth_token = headers.split(" ")[1];

    if (!auth_token) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "Please provide valid");
    }

    const data = validateToken(auth_token);
    req_user = data.user_id;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = Authentication;
