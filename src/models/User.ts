import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import { Model, Document } from "mongoose";
import  isEmail  from "validator/lib/isEmail";

export interface IUser extends Document {
    fullName: string;
    email: string;
    password: string;
}

export interface IUserModel {
    comparePassword(candidatePassword: string, hash: string, callback: Function): void;
    findByEmail(email: string, callback: Function): void;
}

const UserSchema = new mongoose.Schema({
    email: { 
        type: String, 
        maxlength: 40, 
        minlength: 6, 
        validate: [isEmail,'Please input valid email']
    },
    password: { 
        type: String, 
        minlength: 8, 
        maxlength: 30 
    },
    fullName: { 
        type: String, 
        maxlength: 40 
    },
    phone: { 
        type: String, 
        minlength: 9 
    },
    address: { 
        type: String 
    },
    location: { 
        type: [String], 
        length: 2 
    },
    courses: { 
        type: [String] 
    }
})

UserSchema.static('comparePassword', (candidatePassword: string, hash: string, callback: Function) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
});

UserSchema.pre('save', function(next) {
    var user = <IUser>this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

export type UserModel = Model<IUser> & IUserModel & IUser;

const User = <UserModel>mongoose.model<IUser>("User", UserSchema);

export default User;