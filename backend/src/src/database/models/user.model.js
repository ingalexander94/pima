const { connectCommonDB } = require("../common");

class UserModel {
  static findByEmail = async (email = "") => {
    let db;
    try {
      db = await connectCommonDB();
      const user = db
        .select("*")
        .from("mp_users")
        .where("user_email", email)
        .first();
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static updateColumnByUserId = async (id, data) => {
    let db;
    try {
      db = await connectCommonDB();
      const updatedRows = db.from("mp_users").where("id_user", id).update(data);
      return updatedRows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

module.exports = UserModel;
