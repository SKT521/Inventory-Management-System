const { UserModel } = require("../models");

class AuthService {
  static async RegisterUser(body) {
    const { email, password, name } = body;
    const checkExist = await UserModel.findOne({ email });
    if (checkExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User Already Registered");
      return;
    }

    const user = await UserModel.create({
      email,
      password,
      name,
    });

    await ProfileModel.create({
      user: user._id,
    });
  }
  static async RegisterUser(body) {
    const { email, password, name } = body;
    const checkExist = await UserModel.findOne({ email });
    if (checkExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User Already Registered");
      return;
    }

    if (password !== checkExist.password) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid Credentials");
    }

    const user = await UserModel.create({
      email,
      password,
      name,
    });

    await ProfileModel.create({
      user: user._id,
    });
  }
}

module.exports = AuthService;
