import * as mongoose from "mongoose";
import { ModificationNote } from "../common/model";

const Schema = mongoose.Schema;

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const riderSchema = new Schema({
  name: {
    first_name: String,
    middle_name: String,
    last_name: String,
  },

  email: {
    type: String,
    trim: true,
    unique:true,
    required: 'Email address is required',
    validate:[validateEmail,'Please fill a valid email address']
    //match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  Phone: {
    type: Number,
    minlength: 7,
    maxlength: 10
  },
  Age: Number,
  Gender: String,
  Address: String,
  Status: Boolean,
  JoinDate: {
    type: Date,
    default: Date.now,
  },
  cardID: String,
  modification_notes:[ModificationNote]
});

export default mongoose.model('rider', riderSchema);
