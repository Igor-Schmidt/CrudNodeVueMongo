const status = require("http-status");

const userModel = require("../models/users.js");

const has = require("has-keys");

module.exports = {
  async getUserById(req, res) {
    if (!has(req.params, "id"))
      throw { code: status.BAD_REQUEST, message: "You must specify the id" };

    let { id } = req.params;

    let data = await userModel.search(id, req);

    if (!data) throw { code: status.BAD_REQUEST, message: "User not found" };

    res.json({ status: true, message: "Returning user", data });
  },
  async getUsers(req, res) {
    let data = await userModel.getAll(req);

    res.json({ status: true, message: "Returning users", data });
  },
  async newUser(req, res) {
    if (!has(req.body, ["name", "email", "birth"]))
      throw {
        code: status.BAD_REQUEST,
        message: "You must specify the name and email",
      };

    let { name, email, birth } = req.body;

    await userModel.create({ name, email, birth }, req);

    res.json({ status: true, message: "User Added" });
  },
  async updateUser(req, res) {
    try {
      if (!has(req.body, ["id", "name", "email", "birth"]))
        throw {
          code: status.BAD_REQUEST,
          message: "You must specify the id, name and email",
        };

      let { id, name, email, birth } = req.body;

      await userModel.update({ id, name, email, birth }, req);

      res.json({ status: true, message: "User updated" });
    } catch (error) {
      console.log(error);
    }
  },
  async deleteUser(req, res) {
    if (!has(req.params, "id"))
      throw { code: status.BAD_REQUEST, message: "You must specify the id" };

    let { id } = req.params;

    await userModel.delete(id, req);

    res.json({ status: true, message: "User deleted" });
  },
};
