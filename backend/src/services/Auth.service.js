const { UserModel } = require("../models/user.models");

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

  static async ProfileService(body) {
    const checkExist = await UserModel.findById(user).select("name email");
    if (!checkExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User Not Registered");
      return;
    }

    return {
      msg: "Data fetched",
      user: checkExist,
    };
  }
}

module.exports = AuthService;
