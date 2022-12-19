const { model, Schema, SchemaTypes } = require("mongoose");
const mongoose = require("mongoose");
const validator = require("validator");
const guildSchema = new Schema({
  id: String,
  ModRole: String,
  AdminRole: String,
});
const userSchema = new Schema({
  id: {
    required: true,
    type: SchemaTypes.String,
  },
  Nickname: {
    required: false,
    type: SchemaTypes.String,
    validate: (val) => validator.default.isAlphanumeric(val),
  },
});
const dashboardSchema = new mongoose.Schema({
  createdAt: {
    type: mongoose.SchemaTypes.Date,
    required: true,
    default: new Date(),
  },
  userGuilds: {
    type: mongoose.SchemaTypes.Array,
    required: true,
  },
  id: String,
  username: String,
  discriminator: String,
  avatar: String,
  access_token: String,
  refresh_token: String,
  expires_in: Number,
  secretAccessKey: String,
});
module.exports.GuildSchema = model("guild", guildSchema);
module.exports.UserSchema = model("User", userSchema);
module.exports.DashboardUser = model("discord_users", dashboardSchema);
