import { ModificationNote } from "../common/model";

// user create new
export interface IUser {
    // ? :   an optional parameter. The Typescript compiler does not require this parameter to be filled in
    _id?: String;
    name: {
        first_name: String;
        middle_name: String;
        last_name: String;
    };
    password: String;
    email: String;
    phone_number: String;
    gender: String;
    is_deleted?: Boolean;
    modification_notes: ModificationNote[]
}