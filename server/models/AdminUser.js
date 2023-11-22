const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    // $2b$12$fJj0Ci74qiMJvwA9dVxaWuDgjHotBiJqIzQFjm6pqv3AAfGINc5Qi
    select: false, //查询时不带这个数据
    set(val) {
      //加密
      return require("bcrypt").hashSync(val, 12);
    },
  },
});

module.exports = mongoose.model("AdminUser", schema);
