const { connectCommonDB } = require("../common");

class UserRoleModel {
  static findByIdUser = async (id_user = "") => {
    let db;
    try {
      db = await connectCommonDB();
      const roles = db
        .select("ur_id_role")
        .from("mp_user_roles")
        .where("ur_id_user", id_user)
        .pluck("ur_id_role");
      return roles;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

module.exports = UserRoleModel;
