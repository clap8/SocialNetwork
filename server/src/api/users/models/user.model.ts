import _ from 'lodash';
import bcrypt from 'bcryptjs';
import mongoose, { Document, PaginateModel } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
//--------------------------------------------------------------------------------------------

let Schema = mongoose.Schema;

// you can add methods to document for intellisense
export interface IUser extends Document {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
  profileImageURL: string;
  email: string;
  birthYear?: number;
  sex?: string;
  roles: string;
  updated: Date;
  created: Date;
  resetPasswordToken: string;
  resetPasswordExpires: number;
  externalId: string;
  loginProvider: string;

  setPassword(password: string);
  validPassword(password: string);
  hasRole(role: string);
};

// you can add methods to model for intellisense
export interface IUserModel extends PaginateModel<IUser> {
  getUserByExternalId(extId);
}

export const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    default: ''
  },
  lastName: {
    type: String,
    trim: true,
    default: ''
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  profileImageURL: {
    type: String,
    default: '/storage/img/users/profile/default.png'
  },
  birthYear: {
    type: Number
  },
  sex: {
    type: String,
    enum: ['M', 'F', 'MALE', 'FEMALE']
  },
  roles: {
    type: [{
      type: String,
      enum: ['user', 'admin']
    }],
    default: ['user']
  },
  updated: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  },
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Number
  },
  externalId: {
    type: String
  },
  loginProvider: {
    type: String
  }
});

userSchema.plugin(mongoosePaginate);

//
// HOOKS
//
userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    let password = this.get('password');
    this.set('password', encryptPassword(password));
  }

  next();
});

//
// CUSTOM REPOSITORY METHODS (DON'T FORGET TO ADD TO IUser)
//
userSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};

userSchema.methods.setPassword = function (password) {
  this.password = encryptPassword(password);
};

userSchema.methods.validPassword = function (password) {
  return matchPassword(this.password, password);
};

userSchema.methods.hasRole = function (role) {
  return this.roles.indexOf(role) !== -1;
};

//
// CUSTOM REPOSITORY STATICS (DON'T FORGET TO ADD TO IModelUser)
//
userSchema.statics.getUserByExternalId = async function (extId) {
  return await User.findOne({ externalId: extId });
};

export const User = mongoose.model<IUser, IUserModel>('User', userSchema);
export default User;

//--------------------------------------------------------------------------------------------
// SUB-ROUTINES IF NEEDED
//--------------------------------------------------------------------------------------------
function encryptPassword(password: string) {
  return bcrypt.hashSync(password, 8);
}

function matchPassword(encryptedPassword: string, givenPassword: string) {
  return bcrypt.compareSync(givenPassword, encryptedPassword);
}