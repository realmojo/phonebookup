import { Schema, models, model } from "mongoose";
import moment from "moment";

const PhoneCommentSchema = new Schema({
  // phoneId: { type: Schema.Types.ObjectId, ref: "Phone" },
  number: { type: String, require: true },
  message: { type: String, default: "" },
  ip: { type: String, default: "" },
  isDelete: { type: Boolean, default: false },
  created: { type: String, default: '' },
});

const PhoneComment =
  models.PhoneComment || model("PhoneComment", PhoneCommentSchema);
export default PhoneComment;
